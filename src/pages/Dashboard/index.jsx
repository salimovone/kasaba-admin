import React from 'react'
import InfoCards from '../../containers/InfoCards'
import News from '../../containers/News'
import { useSignOut } from 'react-auth-kit'


const Dashboard = () => {
  const signOut = useSignOut()
  return (
    <div className='w-full py-2'>
      <InfoCards />
      <News />
      <button onClick={signOut} className='bg-red-500 border border-red-700 text-white font-bold py-2 px-4 rounded float-right mt-8 mr-4'>SIGN OUT</button>
    </div>
  )
}

export default Dashboard