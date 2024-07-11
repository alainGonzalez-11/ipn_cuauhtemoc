/* eslint-disable react/prop-types */
import React from 'react'

const ProjectCard = ({ data }) => {
  return (
    <div className='mx-sm-auto mx-lg-0 col-sm-10 col-md-6 col-lg-6 col-xl-6 mb-5'>
      <div className='card border-0'>
        <img
          src={data.src}
          className='card-img-top mx-auto d-block'
          alt='IPN Cuauhtemoc image'
        />
        <div className='card-body bg-light'>
          <h4 className='card-title'>{data.title}</h4>
          <p>
            {data.text.length > 255
              ? data.text.slice(0, 255) + '...'
              : data.text}
          </p>
          <div className='text-center'>
            <button className='btn bg-dark text-light'>Ver más</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
