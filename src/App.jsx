import React from 'react'
import PersonalList from './components/people/PersonalList'
import Header from './components/layout/Header'
import MapView from './components/map/MapView'
import LocationList from './components/locations/LocationList'

function App() {
  return (
    <div className='flex h-screen bg-gray-300'>
      <PersonalList />
      <div className='flex flex-col flex-1'>
        <Header />

        <div className='flex flex-1 overflow-hidden'>
          <MapView />
          <LocationList />
        </div>
      </div>
    </div>
  )
}

export default App
