import React from 'react'
import detallesEventosData from '../../utils/mock/detallesEventosData'

export default function EventsDetails() {
    
  return (
    <>
    <section className='w-[90%] h-screen mx-auto flex justify-center items-center flex-row border-red-900 border-8'>
     
        <span>
            <h1>{detallesEventosData.data.title}</h1>
            <p>{detallesEventosData.data.description}</p>
        </span>
        <div>
            <img src={detallesEventosData.data.image} alt="eventos" />
        </div>
 
    </section>
    </>
  )
}
