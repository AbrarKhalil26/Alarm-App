import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeAlarm } from "../../redux/slice/alarmSlice";
import { GoBell } from "react-icons/go";
import { BsChatRightText } from "react-icons/bs";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { CALC_SECOND, FORMAT_TIME } from "../../data/data";
// import "react-toggle/style.css";
import "./CardAlarm.css";
import { Toggle } from "../../components";

const CardAlarm = ({ data, showEdit, setShowEdit }) => {
  const dispatch = useDispatch();
  const { "time-alarm": timeAlarm, title, id } = data;
  const [alarmAfter, setAlarmAfter] = useState("00:00:00");
  const [isFinished, setIsFinished] = useState(false);
  const [startAlarm, setStartAlarm] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const hour12 = true;

  const newTime = new Date(timeAlarm);
  const formattedTime = newTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: hour12, // Ensure 24-hour format
  });
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: hour12, // Ensure 24-hour format
  });

  useEffect(() => {
    if (hour12) {
      const alarmHour = newTime.getHours();
      const currentHour = new Date().getHours();
      const alarmMinute = newTime.getMinutes();
      const currentMinute = new Date().getMinutes();
      const alarmTotalMinutes = alarmHour * 60 + alarmMinute;
      const currentTotalMinutes = currentHour * 60 + currentMinute;
      let alarmAfterMinutes;

      if (alarmTotalMinutes > currentTotalMinutes) {
        alarmAfterMinutes = alarmTotalMinutes - currentTotalMinutes;
      } else {
        const remainingMinutesInDay = 24 * 60 - currentTotalMinutes;
        alarmAfterMinutes = remainingMinutesInDay + alarmTotalMinutes;
      }
      // Convert total minutes to HH:MM format
      const hours = Math.floor(alarmAfterMinutes / 60);
      const minutes = alarmAfterMinutes % 60;

      // Format hours and minutes to include leading zeros if needed
      const formattedHours = String(hours).padStart(2, "0");
      const formattedMinutes = String(minutes).padStart(2, "0");

      setAlarmAfter(`${formattedHours}:${formattedMinutes}`);
    } else {
      if (CALC_SECOND(formattedTime + ":00") > CALC_SECOND(currentTime + ":00"))
        setAlarmAfter(
          FORMAT_TIME(
            CALC_SECOND(formattedTime + ":00") -
              CALC_SECOND(currentTime + ":00"),
            "HH:MM"
          )
        );
      else
        setAlarmAfter(
          FORMAT_TIME(
            CALC_SECOND("23:60:00") -
              CALC_SECOND(currentTime + ":00") +
              CALC_SECOND(formattedTime + ":00"),
            "HH:MM"
          )
        );
    }
  }, [currentTime, formattedTime, hour12]);

  useEffect(() => {
    if (alarmAfter === "00:00") {
      setIsFinished(true);
    }
  }, [alarmAfter]);

  console.log("alarmAfter", alarmAfter);
  console.log("isFinished", isFinished);
  console.log("startAlarm", startAlarm);

  useEffect(() => {
    if (startAlarm) {
      if (isFinished) {
        alert("Time's up!");
        setStartAlarm(false);
      }
    }
  }, [startAlarm]);

  return (
    <>
      <div className="p-4 bg-transparent rounded-lg  shadow-inner-lg flex flex-col gap-4 justify-between max-w-96">
        <div className="flex gap-8 justify-between">
          <p className="flex items-end text-3xl">
            {formattedTime}{" "}
            {hour12 ? null : (
              <span className="ml-2 text-3xl">
                {" "}
                {newTime.getHours() < 12 ? "AM" : "PM"}
              </span>
            )}
          </p>

          <Toggle isChecked={isChecked} setIsChecked={setIsChecked} />
          {/* <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} />}
            sx={{
              ".css-mqonul-MuiSwitch-root": {
                margin: 0,
              },
              ".css-fqzjih-MuiFormControlLabel-root": {
                margin: 0 + "!important",
              },
            }}
            value={startAlarm}
            onChange={() => setStartAlarm(!startAlarm)}
          /> */}
        </div>

        <div className="flex items-center gap-3">
          <GoBell size={20} />
          <p className="text-base">in {alarmAfter}</p>
        </div>

        <div className="flex items-center gap-4">
          <BsChatRightText size={18} />
          <p className="text-base">{title || "Alarm"}</p>
        </div>

        <div
          className="flex items-center ml-auto w-fit px-2"
          display="flex"
          alignItems="center"
          width="fit-content"
          ml="auto"
          padding="0 8px"
        >
          <div
            className="p-icon"
            underline="none"
            sx={{ width: "40px", height: "40px" }}
            onClick={() => setShowEdit({ addAlarm: true, editAlarm: data })}
          >
            <MdEdit size={20} />
          </div>
          <div className="p-icon" onClick={() => dispatch(removeAlarm(id))}>
            <MdDeleteOutline size={23} className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAlarm;
