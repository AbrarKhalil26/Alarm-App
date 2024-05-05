import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { SNOOZE } from '../data/data';

const Test = () => {
    const { control, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="snooze" // The name of your input field
        control={control}
        defaultValue={null} // Set the default value
        render={({ field }) => (
          <Select
            {...field}
            options={SNOOZE}
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Test
