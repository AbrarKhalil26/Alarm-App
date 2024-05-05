import React, { useState } from 'react';
import { CardAlarm, AddAlarm } from '../components';
import { useSelector } from 'react-redux';

const Alarm = () => {
  const [showEdit, setShowEdit] = useState({ addAlarm: false, editAlarm: null});  
  const storedAlarms = useSelector(state => state.alarm.alarms)
  
  return (
    <>
      {showEdit.addAlarm && (<AddAlarm showEdit={showEdit} setShowEdit={setShowEdit}/>)}
      <div className='flex justify-between items-center'>
        <p className="text-4xl font-bold">Alarm</p>
        <button
          className='contained-btn'
          type="button"
          onClick={() => {
            setShowEdit({ addAlarm: true, editAlarm: null });
          }}
        >
          Add Alarm
        </button>
      </div>
      <div className='my-12'>
        <div className='grid grid-cols-3 gap-3 justify-center' spacing={4} justifyContent='center'>
          {storedAlarms.map((item) => (
            <div key={item.id}>
              <CardAlarm
                data={item}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Alarm;
