import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addAlarm, editAlarm } from "../../redux/slice/alarmSlice";
import { EditTime, AlarmSnooze, AlarmChime } from "../../components";
import { IoMdTime } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";

const AddAlarm = ({ showEdit, setShowEdit }) => {
  const gridWhenDigitalTime = () => (
    <>
      <div>
        <div width="100%" display="grid" gap="0.8rem">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                marginBottom: "0.5rem",
              }}
            >
              <IoMdTime size={20} />
              <label htmlFor="time" style={{ fontSize: "1.1rem" }}>
                Time
              </label>
            </div>
            {/* <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={chooseTypeTime}
              onChange={(e) => setChooseTypeTime(e.target.value)}
              sx={{ ml: "2rem" }}
            >
              <FormControlLabel
                value="digital"
                control={<Radio size="15px" />}
                label="Digital Time"
              />
              <FormControlLabel
                value="analog"
                control={<Radio size="15px" />}
                label="Analog Time"
              />
            </RadioGroup> */}
          </div>

          <div height="100%">
            <style>
              {`
                .css-z3c6am-MuiFormControl-root-MuiTextField-root {
                  border: 1px solid #666;
                  border-radius: 5px;
                  height: 50px;
                  width: 100%;
                }
                .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
                  height: 50px;
                  padding: 0 0.5rem;
                }
                .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root {
                  color: white;
                  background: #333;
                }
                .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
                  color: white;
                }
              `}
            </style>
            {/* <EditTime
              control={control}
              time={showEdit.editAlarm && timeAlarm}
              page="alarm"
              chooseTypeTime={chooseTypeTime}
            /> */}
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                marginBottom: "5px",
              }}
            >
              <MdOutlineEdit size={20} />
              <label htmlFor="title" style={{ fontSize: "0.9rem" }}>
                Alarm Name
              </label>
              <br />
            </div>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Alarm"
              width="100%"
              defaultValue={(showEdit.editAlarm && title) || "Alarm"}
              {...register("title")}
              style={{
                height: "50px",
                background: "transparent",
                border: "1px solid #666",
                padding: "0 0.5rem",
                borderRadius: "5px",
                color: "white",
                margin: 0,
              }}
            />
          </div>
          {/* <AlarmSnooze
            control={control}
            snooze={showEdit.editAlarm && snooze}
          />
          <AlarmChime control={control} chime={showEdit.editAlarm && chime} /> */}
        </div>
      </div>
    </>
  );
  const [chooseTypeTime, setChooseTypeTime] = useState("digital");
  const { register, control, handleSubmit, setValue } = useForm();
  const storedAlarms = useSelector((state) => state.alarm.alarms).find(
    (item) => item.id === (showEdit.editAlarm && showEdit.editAlarm.id)
  );
  const { chime, title, snooze, "time-alarm": timeAlarm } = storedAlarms || {};
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    if (showEdit.editAlarm) {
      dispatch(editAlarm(data));
    } else {
      dispatch(addAlarm(data));
    }
    setShowEdit({ addAlarm: false, editAlarm: null });
  };

  useEffect(() => {
    if (showEdit.editAlarm) {
      setValue("id", showEdit.editAlarm.id);
      setValue("title", showEdit.editAlarm.title);
      setValue("chime", showEdit.editAlarm.chime);
      setValue("snooze", showEdit.editAlarm.snooze);
      setValue("time", showEdit.editAlarm.time);
    }
  }, [showEdit.editAlarm, setValue]);

  return (
    <div className="fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-gray-800 text-white rounded-lg p-8 m-4">
        <p className="text-3xl font-bold text-center mb-8">
          {showEdit.editAlarm ? "Edit Alarm" : "Add Alarm"}
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register("id")} value={uuidv4()} />
          <div className="flex justify-between gap-3">
            {chooseTypeTime === "digital" ? (
              gridWhenDigitalTime()
            ) : (
              <>
                <div className="w-fit grid gap-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <IoMdTime size={20} />
                      {/* <label htmlFor="time" className='text-base'>
                        Time
                      </label> */}
                    </div>
                    {/* <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={chooseTypeTime}
                        onChange={(e) => setChooseTypeTime(e.target.value)}
                        sx={{ ml: "2rem" }}
                      >
                        <FormControlLabel
                          value="digital"
                          control={<Radio size="15px" />}
                          label="Digital Time"
                        />
                        <FormControlLabel
                          value="analog"
                          control={<Radio size="15px" />}
                          label="Analog Time"
                        />
                      </RadioGroup> */}
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                      }}
                    >
                      <MdOutlineEdit size={20} />
                      {/* <label htmlFor="title" style={{ fontSize: "1.1rem" }}>
                        Alarm Name
                      </label> */}
                      <br />
                    </div>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Alarm"
                      width="100%"
                      defaultValue={(showEdit.editAlarm && title) || "Alarm"}
                      {...register("title")}
                      style={{
                        height: "40px",
                        background: "transparent",
                        border: "1px solid #666",
                        padding: "0 0.5rem",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    />
                  </div>

                  {/* <AlarmChime
                      control={control}
                      chime={showEdit.editAlarm && chime}
                    />
                    <AlarmSnooze
                      control={control}
                      snooze={showEdit.editAlarm && snooze}
                    /> */}
                </div>

                <div item>
                  <div height="100%">
                    {/* <EditTime
                      control={control}
                      time={showEdit.editAlarm && timeAlarm}
                      page="alarm"
                      chooseTypeTime={chooseTypeTime}
                    /> */}
                  </div>
                </div>
              </>
            )}
          </div>

          <div
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              mt: "1rem",
            }}
          >
            <button
              className="outlined-btn"
              type="button"
              onClick={() =>
                setShowEdit((prev) => ({ ...prev, addAlarm: false }))
              }
            >
              Cancel
            </button>
            <button className="contained-btn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAlarm;
