import React from 'react'
import useDutyStore from '../../store/useDutyStore'

const PersonalList = () => {
  // zustand store
  const personnel = useDutyStore((state)=> {
    return state.personnel
  });
  console.log(personnel);
  return (
    <div className='w-80 bg-gray-200 overflow-y-auto'>
      Personal
    </div>
  )
}

export default PersonalList
