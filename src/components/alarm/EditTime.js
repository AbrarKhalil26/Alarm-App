import React, { useState } from 'react'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { Grid, Stack, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { TimePicker } from '@mui/x-date-pickers';

const EditTime = ({ control, time, page, chooseTypeTime }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  return (
    <>
      {
        page === 'alarm' ? (
          <Controller
            name="time-alarm"
            control={control}
            defaultValue={time === null ? dayjs() : dayjs(time)}
            render={({ field }) => (
              <Stack mt='10px'>
                <style>
                  {`
                    .css-knqc4i-MuiDialogActions-root {
                      display: none;
                    }
                    .analog .css-16b5y55-MuiPickersLayout-contentWrapper{
                      padding-bottom: 1rem; 
                    }
                  `}
                </style>
                {
                  chooseTypeTime === 'digital' ? 
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker {...field}/>
                  </LocalizationProvider>
                  :
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticTimePicker {...field} className='analog'/>
                  </LocalizationProvider>

                }
              </Stack>
      
                )}
              />
        ): (
          <Controller
            name="time-timer"
            control={control}
            defaultValue={dayjs(time) || dayjs()}
            render={({ field }) => (
              <Stack mt='10px'>
                <style>
                  {`
                    .css-knqc4i-MuiDialogActions-root {
                      display: none;
                    }
                    .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root{
                      color: white;
                      background: #333;
                    }
                    .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root{
                      border: 1px solid #eee;
                    }
                    .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input{
                      color: white;
                    }
                    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input{
                      width: 70px;
                      color: white;
                      border: 1px solid white;
                      border-radius: 5px;
                    }
                  `}
                </style>
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="Enter Time" defaultValue={dayjs()} {...field}/>
                </LocalizationProvider> */}
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      label="Hours"
                      type="number"
                      variant="outlined"
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      label="Minutes"
                      type="number"
                      variant="outlined"
                      value={minutes}
                      onChange={(e) => setMinutes(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      label="Seconds"
                      type="number"
                      variant="outlined"
                      value={seconds}
                      onChange={(e) => setSeconds(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Stack>
      
                )}
              />
        )
      }
    </>
  )
}

export default EditTime
