import React from 'react'
import data from '../data'
import Card from './Card'
import '../css/dashboard.css'

export const Dashboard = () => {
  return (
    <div className='dashboard'>
    {
    data.map(ele =>{

       return <Card title={ele.title} completion_rate={ele.completion_rate} total_plays={ele.total_plays}
        unique_plays={ele.unique_plays} image={ele.image}

         />

    })
}
    </div>
  )
}
