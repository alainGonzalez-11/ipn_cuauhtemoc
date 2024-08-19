/* eslint-disable no-new */
import React, { useState, useEffect, useRef } from 'react'
import { Collapse } from 'bootstrap'
import { NavLink } from 'react-router-dom'
import cap from '@/assets/cap.jpg'

const membcard = (
  <div className='d-flex justify-content-center align-items-center my-4 col-11 col-sm-10 col-md-9 col-lg-6'>
    <div className='row justify-content-center align-items-center text-light border border-2 rounded mx-0 col-10 col-sm-12 col-lg-11 col-xl-10'>
      <div className='col-10 col-sm-5 col-md-4 col-lg-5 px-0 mx-0 m-4 m-sm-0'>
        <div className='ratio ratio-1x1'>
          <img
            src={cap}
            className='card-img object-fit-cover rounded'
            alt='...'
          />
        </div>
      </div>
      <div className='mx-auto col-12 col-sm-7'>
        <h5>Nombre del integrante</h5>
        <h5>Sección</h5>
        <p className='text-justify'>
          Pequeña descripción sobre su papel en la subsección y/o en el equipo
        </p>
      </div>
    </div>
  </div>
)

const Members = () => {
  const collapseElement = useRef(null)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)

    if (collapseElement.current) {
      if (isCollapsed) {
        new Collapse(collapseElement.current).show()
      } else {
        new Collapse(collapseElement.current).hide()
      }
    }
  }

  useEffect(() => {
    if (collapseElement.current) {
      new Collapse(collapseElement.current, {
        toggle: false
      })
    }
  }, [])

  return (
    <div className='container-lg bg-dark bg-opacity-75 px-0 py-4'>
      <div className='row justify-content-center mx-0'>
        <div className='justify-content-center border-bottom border-4 border-primary mx-auto mb-5 col-7 col-sm-5 col-md-4 col-xl-3'>
          <h3 className='text-center text-primary display-5 fw-bold'>
            Integrantes
          </h3>
        </div>
        <div className='row justify-content-center align-items-center px-0 mx-0'>
          {membcard}
          {membcard}
          {membcard}
          {membcard}
          {membcard}
          {membcard}
        </div>
        {!isCollapsed && (
          <div className='text-center mt-3'>
            <button
              className='btn btn-outline-light'
              type='button'
              onClick={toggleCollapse}
              aria-expanded={isCollapsed}
              aria-controls='collapseExample'
            >
              Ver más integrantes
            </button>
          </div>
        )}
        <div className='collapse' id='collapseExample' ref={collapseElement}>
          <div className='row justify-content-center align-items-center bg-transparent'>
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
            {membcard}
          </div>
          {isCollapsed && (
            <div className='text-center mt-3'>
              <button
                className='btn btn-outline-light'
                type='button'
                onClick={toggleCollapse}
                aria-expanded={isCollapsed}
              >
                Ver menos integrantes
              </button>
            </div>
          )}
        </div>
      </div>
      <div className='row justify-content-center mx-0'>
        <div className='justify-content-center border-bottom border-4 border-primary mx-auto my-5 col-8 col-sm-6 col-md-5 col-xl-4'>
          <h3 className='text-center text-primary display-5 fw-bold'>
            Reclutamiento
          </h3>
        </div>
        <div className='row justify-content-center align-items-center mx-0'>
          <div className='d-flex text-light mb-4 mb-lg-0 col-11 col-sm-10 col-lg-5'>
            <p className='lead text-justify'>
              Si estás interesado en formar parte de nuestro equipo ¡te
              invitamos a dar click en el siguiente enlace a fin de poder
              trabajar de cerca con la tecnología aeroespacial!. Queremos que
              seas parte de un ambiente colaborativo donde se toman en cuenta
              las ganas de aprender así como la actitud con vistas al
              aprendizaje. ¡Únete a nosotros para ser pionero en el sector de la
              ingeniería aeroespacial!
            </p>
          </div>
          <div className='text-center mb-4 mb-lg-0 col-lg-6'>
            <NavLink to='/joinUs'>
              <button className='btn btn-outline-light btn-lg px-3 px-sm-5'>
                ¡Forma parte de nuestro equipo!
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members
