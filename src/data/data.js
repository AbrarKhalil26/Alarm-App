import { FaClock } from "react-icons/fa6";
import { BsFillStopwatchFill } from "react-icons/bs";
import { IoIosAlarm } from "react-icons/io";
import { IoTimer } from "react-icons/io5";

// const darkMode = useSelector((state) => state.global.darkMode);

export const MENU = [
    {
        id: 1,
        title: 'Clock',
        path: '/',
        icon: <FaClock fontSize="1.6rem " />
    },
    {
        id: 2,
        title: 'Alarm',
        path: '/alarm',
        icon: <IoIosAlarm fontSize="2rem " />
    },
    {
        id: 3,
        title: 'Timer',
        path: '/timer',
        icon: <IoTimer fontSize="2rem " />
    },
    {
        id: 4,
        title: 'Stopwatch',
        path: '/stopwatch',
        icon: <BsFillStopwatchFill fontSize="1.8rem " />
    },

]

export const CHIME = [
  {
    id: 1,
    label: 'Beep',
    value: 'sounds/alarm-beep.mp3',
  },
  {
    id: 2,
    label: 'Ding',
    value: 'sounds/ding.mp3'
  },
  {
    id: 3,
    label: 'Seconds Tick',
    value: 'sounds/seconds-alarm.mp3'
  },
  {
    id: 4,
    label: 'Wind Chimes',
    value: 'sounds/mystical-wind-chimes-transition.mp3'
  },
  {
    id: 5,
    label: 'Bell',
    value: 'sounds/bell.mp3'
  },
  {
    id: 6,
    label: 'Cuckoo',
    value: 'sounds/gray-cuckoo-christmas-background.mp3'
  },
  {
    id: 7,
    label: 'Chirping Birds',
    value: 'sounds/birds-in-the-trees.mp3'
  },
  {
    id: 8,
    label: 'Memphis',
    value: 'sounds/memphis.mp3'
  }
]

export const SNOOZE = [
    {
        id: 1,
        label: 'Disabled',
        value: 0
    },
    {
        id: 2,
        label: '5 minutes',
        value: 5
    },
    {
        id: 3,
        label: '10 minutes',
        value: 10
    },
    {
        id: 4,
        label: '20 minutes',
        value: 20
    },
    {
        id: 5,
        label: '30 minutes',
        value: 30
    },
    {
        id: 5,
        label: '40 minutes',
        value: 40
    },
    {
        id: 5,
        label: '1 hour',
        value: 60
    }
]

export const CUSTOM_STYLES = (border) => ({
  option: (provided, state) => ({
    ...provided,
    padding: "10px",
    color: state.isSelected ? "white" : state.isFocused ? "#fff" : "#000",
    fontSize: "14px",
  }),
  control: (provided) => ({
    ...provided,
    background: "transparent",
    height: "50px",
    fontSize: "15px",
    border: border,
    divShadow: "none",
    width: "100%",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({ // Correct way to target dropdown indicator
    ...provided,
    padding: 0,
  }),
  container: (provided) => ({
    ...provided,
    flexGrow: 1,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
});

export const CALC_SECOND = (timeString) => {
  if (!timeString) return;
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
};

// Function to convert seconds to HH:MM:SS format
export  const FORMAT_TIME = (timeInSeconds,format) => {
  if (!timeInSeconds) return "00:00:00";
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  if (format === 'HH:MM') return `${formattedHours}:${formattedMinutes}`;
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};