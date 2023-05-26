import React from 'react'
import '../css/card.css'
import { CChart } from '@coreui/react-chartjs';

const Card = ({completion_rate,image,title,total_plays,unique_plays}) => {
    total_plays = parseInt(total_plays)
    unique_plays = parseInt(unique_plays)
    let data = [total_plays,unique_plays]
  return (
    <>
    <div className="card" style={{maxHeight:'40%'}}>
  <div className="card-border-top">
  </div>
  <div className="img" >
    <img src={image} alt="..." style={{width:'100%',height:'100%', borderRadius:"5px" }} />
  </div>
  <span className='span'> {title}</span>
  <div className='progress-bar-container'>
    
    <div className='progress-bar' style={{width:`${completion_rate}%`}}>{completion_rate}</div>
  </div>
  {/* <p className="job"> Job Title</p> */}
  <CChart
  type="bar"
//   height={250}
  data={{
    labels: ['total plays','unique plays'],
    
    backgroundColor:'white',
    datasets: [
      {
        
        
        label: 'play details',
        // fill:false,
        color:'white',

        backgroundColor: ['green'],
        data: data,
        
      }
      
    ],
    
  }}
  options={
    {indexAxis:'y'}
  }
  labels="plays"
/>
  {/* <dl>

  <dd class="percentage">
    <span class="text">Total Views
  </span>

  <div className='percent-value' style={{background:"green", width:"20%"}}></div>

  </dd>
  <dd class="percentage">
    <span class="text">Unique Views
  </span>
  <div className='percent-value' style={{background:"green", width:"20%"}}></div>

  </dd>
  
</dl> */}
  
  
</div>

    </>
  )
}

export default Card;