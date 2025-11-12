import React from 'react'
import useDutyStore from '../../store/useDutyStore'

const PersonalList = () => {
  // zustand store
  const dutyStore = useDutyStore((state)=> {
    return state.personal
  });
  console.log(dutyStore);
  return (
    <div className='w-80 bg-gray-200 overflow-y-auto'>
      Personal
    </div>
  )
}

export default PersonalList
