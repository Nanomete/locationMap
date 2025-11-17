import React, { useEffect, useState } from 'react'
import PersonalList from './components/people/PersonalList'
import Header from './components/layout/Header'
import MapView from './components/map/MapView'
import LocationList from './components/locations/LocationList'
// import axios from 'axios'
import useDutyStore from './store/useDutyStore'

function App() {
  // js
  const [adding, setAdding] = useState(false)

  // นำเข้ามาเพื่อโหลดข้อมูลให้ component ลูกแสดงข้อมูลจาก API ได้
  const fetchAll = useDutyStore((state)=> {
    return state.fetchAll
  })
  useEffect(()=> {
    // fn body
    fetchAll();
  },[])

  // html
  return (
    <div className='flex h-screen bg-gray-300'>
      <PersonalList />
      <div className='flex flex-col flex-1'>
        <Header 
        adding={adding} setAdding={setAdding}
        />

        <div className='flex flex-1 overflow-hidden'>
          <MapView />
          <LocationList />
        </div>
      </div>
    </div>
  )
}

export default App
