import React from "react";
import { Box } from "@mui/material";
import Select from "react-select";
import { MdSnooze } from "react-icons/md";
import { CUSTOM_STYLES, SNOOZE } from "../../data/data";
import { Controller } from "react-hook-form";

const AlarmSnooze = ({ control, snooze }) => (
  <Box>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.8rem",
        marginBottom: "5px",
      }}
    >
      <MdSnooze size={20} />
      <label htmlFor="snooze" style={{ fontSize: "0.9rem" }}>
        Snooze Time
      </label>
      <br />
    </div>
    <Controller
      name="snooze" // The name of your input field
      control={control}
      defaultValue={snooze || SNOOZE[0]}
      render={({ field }) => (
        <Select
          {...field}
          options={SNOOZE}
          styles={CUSTOM_STYLES("1px solid #666")}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#666",
              primary: "#444",
            },
          })}
        />
      )}
    />
  </Box>
);

export default AlarmSnooze;
