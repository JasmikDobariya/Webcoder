import React from 'react'
import Card from './Card'
import Cardarray from './Cardarray'

function Service() {
  return (
    <section>
      <div className='mt-5 text-center'>
        <h1>Welcome To Our Service</h1>
      </div>
      <div className='container-fluid ' >
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row '>
              
              {
                Cardarray.map((el , idx) => {
                  return <Card key={idx} imgsrc={el.imgsrc} title={el.title} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Service