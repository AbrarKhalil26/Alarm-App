import React, { useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Controller } from "react-hook-form";
import { LuMusic2 } from "react-icons/lu";
import { IoPlayOutline } from "react-icons/io5";
import { GrFormUpload } from "react-icons/gr";
import { IoPauseOutline } from "react-icons/io5";
import Select, { components } from "react-select";
import { CHIME, CUSTOM_STYLES } from "../../data/data";

const AlarmChime = ({ control, chime }) => {
  const [audio, setAudio] = useState(new Audio(CHIME[0].value));
  const [isPlaying, setIsPlaying] = useState(false);
  const hiddenFileInput = useRef(null); 

  // const playAudio = (audioSrc) => {
  //   if (isPlaying) {
  //     audio.pause();
  //     setIsPlaying(false);
  //   }
  //   else {
  //     const newAudio = new Audio(audioSrc); // Create a new Audio instance
  //     newAudio.play();
  //     setAudio(newAudio); // Update audio state with the new Audio instance
  //     setIsPlaying(true);
  //   }
  // }

  // const pauseAudio = () => {
  //   audio.pause();
  //   setIsPlaying(false); // Audio is paused
  // }

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const audioSrc = e.target.result;
  //     setAudio(new Audio(audioSrc));
  //     setIsPlaying(false); // Reset isPlaying state
  //     // playAudio(audioSrc);
  //   };
  //   reader.readAsDataURL(file);
  // }

  const customComponents = {
    Option: (props) => (
      <components.Option {...props}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IoPlayOutline size={20} />
          <span>{props.label}</span>
        </Box>
      </components.Option>
    ),
    Control: (props) => (
      <components.Control {...props}>
        {props.children}
        {isPlaying ? (
          <IconButton
            aria-label="Pause"
            // onClick={pauseAudio}
            sx={{ pr: "5px" }}
          >
            <IoPauseOutline size={20} />
          </IconButton>
        ) : (
          <IconButton aria-label="Play" 
          // onClick={playAudio} 
          sx={{ pr: "5px" }}>
            <IoPlayOutline size={20} />
          </IconButton>
        )}
      </components.Control>
    ),
  };



  return (
    <Box>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
          marginBottom: "5px",
        }}
      >
        <LuMusic2 size={15} />
        <label htmlFor="repeat" style={{ fontSize: "0.9rem" }}>
          Alarm Chime
        </label>
        <br />
      </div>

      <Box display="flex" gap="5px" alignItems="center">
        <Controller
          name="chime"
          control={control}
          defaultValue={chime || CHIME[0]}
          render={({ field }) => (
            <Select
              {...field}
              options={CHIME}
              styles={CUSTOM_STYLES('1px solid #666')}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: "#666",
                  primary: "#444",
                },
              })}
              components={customComponents}
              // onChange={(e) => playAudio(e.value)}
            />
          )}
        />
    
        <IconButton aria-label="Upload Ringtone" onClick={() => hiddenFileInput.current.click()} sx={{ p: '0'}}>
          <input
            type="file"
            accept="audio/*"
            // onChange={handleFileChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
            id="customChimeInput"
          />
          <GrFormUpload
            size={30}
            style={{ cursor: "pointer", color: "white"}}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AlarmChime;
