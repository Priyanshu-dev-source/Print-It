import React from 'react'

const Description = () => {
  return (
    <div className='description-body-wrapper'>
      <div className='descp-body-about-part'>
          <div className='descp-heading'>
              Create and sell<br/>
              custom products
          </div>
          <div className='descp-list'>
              <ul type="disc" className='list'>
                <li>100% Free to use</li>
                <li>900+ High-Quality Products</li>
                <li>Largest global print network</li>
              </ul>
          </div>
          <div className='descp-body-button'>
              <button>Start for free</button>
              <button>How it works</button>
          </div>
          <div className='descp-body-info'>
              Trusted by 8M seller around the world
          </div>
      </div>
      <div className='descp-body-photo-part'>
          <div className='shirt-photo-part'>
            <img src="https://printify.com/pfh/assets/animations/images/img_5.png" alt="" srcset="" height="350px"/>
            <div className='photo-design'>
                <img src="https://printify.com/pfh/assets/animations/images/img_4.png" alt="" srcset="" height="180px"/>
            </div>
          </div>
      </div>
      <div className='descp-design'>

      </div>
    </div>
  )
}

export default Description
