import React from 'react'
import ProfileHero from '../components/profile-components/ProfileHero'
import ProfileNavbar from '../components/profile-components/ProfileNavbar'
import ProfileInfo from '../components/profile-components/ProfileInfo'
import EditProfile from '../components/profile-components/EditProfile'
import Appointments from '../components/profile-components/Appointments'
import { Route, Routes } from 'react-router-dom'
import Orders from '../components/profile-components/Orders'

const Profile = () => {
  
  return (
    <div>
      <ProfileHero />
      <ProfileNavbar />
      <Routes>
        <Route path='profile/info' element={<ProfileInfo />}/>
        <Route path='profile/orders' element={<Orders />}/>
        <Route path='profile/appointments' element={<Appointments />}/>
      </Routes>
      <EditProfile />
    </div>
  )
}

export default Profile
