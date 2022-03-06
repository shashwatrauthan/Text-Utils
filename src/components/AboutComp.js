import React from 'react'

export default function AboutComp(props) {
  return (
      <>
        <div className='container my-4'>
            <p className='d-flex align-item-center justify-content-center' style={{color: props.mode==="dark"?"white":"#343a40"}}>This is developed by Shashwat Rauthan.</p>
        </div>
      </>
    )
}
