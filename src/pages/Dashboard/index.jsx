import React from 'react'
import InfoCards from '../../containers/InfoCards'
import News from '../../containers/News'

const Dashboard = () => {
  return (
    <div className='w-full py-2'>
      <InfoCards />
      <News />
    </div>
  )
}

export default Dashboard