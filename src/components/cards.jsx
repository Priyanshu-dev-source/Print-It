import React from 'react'

const Cards = () => {
  return (
    <>
        <div className='cards-part-first'>
            <div className='cards-photo-part'>
                <img src="https://printify.com/pfh/assets/legacy/higher-profits.svg" alt="" height="110px"/>
            </div>
            <div className='cards-heading-part'>
                Higher Profits
            </div>
            <div className='cards-info-part'>
                We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
            </div>
        </div>
        <div className='cards-part-second'>
            <div className='cards-photo-part'>
                <img src="https://printify.com/pfh/assets/legacy/robust-scaling.svg" alt="" height="110px"/>
            </div>
            <div className='cards-heading-part'>
                Best Selection
            </div>
            <div className='cards-info-part'>
                Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
            </div>
        </div>
        <div className='cards-part-third'>
            <div className='cards-photo-part'>
                <img src="https://printify.com/pfh/assets/legacy/best-selection.svg" alt="" height="110px"/>
            </div>
            <div className='cards-heading-part'>
                Robust Scaling
            </div>
            <div className='cards-info-part'>
                With 900+ products and top quality brands, you can choose the best products for your business.
            </div>
        </div>
    </>
  )
}

export default Cards
