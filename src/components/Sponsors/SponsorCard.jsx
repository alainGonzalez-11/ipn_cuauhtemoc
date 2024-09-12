import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Modal, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import info from '@/assets/Sponsors/info.json'

const schema = yup
  .object({
    firstName: yup.string().required('Es necesario ingresar tu nombre'),
    compName: yup.string().required('Es necesario ingresar el nombre'),
    email: yup.string().required('Ingesa un email para contactarte'),
    message: yup.string().required('Escribe tu mensaje')
  })
  .required()

const SponsorCard = () => {
  const [showModal, setShowModal] = useState(false)
  const form = useRef()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(schema) })

  const handleCloseModal = () => setShowModal(false)

  const whenSubmit = data => {
    emailjs
      .sendForm('contact_service', 'contact_form', form.current, {
        publicKey: 'ZbCsu0DS45Vozgnve'
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        error => {
          console.log('FAILED...', error.text)
        }
      )

    const result = { firstName: '', lastName: '', email: '', message: '' }
    reset(result)
    setShowModal(true)
  }

  const card = (sponsor, index) => (
    <div
      key={index}
      className='d-flex justify-content-center align-items-center my-5 col-11 col-sm-10 col-md-6 col-lg-4'
    >
      <div className='card mx-auto col-10 col-sm-9 col-lg-10'>
        <div className='border-bottom'>
          <a href={sponsor.page} className='ratio ratio-4x3' target='blank'>
            <img
              src={sponsor.content.find(item => item.type === 'image').value}
              className='card-img object-fit-contain p-2'
              alt={sponsor.name}
            />
          </a>
        </div>
        <div className='ratio ratio-4x3'>
          <div className='card-body'>
            <div className='overflow-auto h-75'>
              <h5 className='card-title'>{sponsor.name}</h5>
              <p className='card-text text-justify'>
                {sponsor.content.find(item => item.type === 'text').value}
              </p>
            </div>
            <div className='d-flex justify-content-center'>
              <a
                href={sponsor.page}
                className='btn btn-outline-dark btn-md'
                target='blank'
              >
                Ir al sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div className='container-lg bg-dark bg-opacity-75 px-0 pb-4'>
      <div className='row justify-content-center align-items-center px-0 mx-0'>
        {info.data.map((sponsor, index) => card(sponsor, index))}
      </div>
      <div className='justify-content-center border-bottom border-4 border-primary mx-auto mb-5 col-7 col-sm-5 col-md-8 col-xl-7'>
        <h3 className='text-center text-primary display-5 fw-bold'>
          Conviérte en patrocinador
        </h3>
      </div>
      <div className='row justify-content-center align-items-center mx-0'>
        <div className='d-flex text-light px-5 mb-4 mb-lg-0 col-12 col-md-11 col-lg-6'>
          <p className='lead-lg text-justify'>
            ¿Te apasiona la innovación aeroespacial? ¿Buscas una forma de ser
            parte de un futuro emocionante? Nuestro equipo está buscando
            patrocinadores que compartan nuestra visión de impulsar la
            ingeniería aeroespacial. Somos un equipo de estudiantes apasionados
            y talentosos que están listos para revolucionar la industria.
            ¿Quieres saber más? Rellena el formulario para que podamos compartir
            nuestra visión y las oportunidades de patrocinio. ¡Únete a nosotros
            y prepárate para despegar hacia el futuro de la aeroespacial!
          </p>
        </div>
        <div className='contact-container px-5 col-12 col-md-11 col-lg-6'>
          <form
            onSubmit={handleSubmit(whenSubmit)}
            ref={form}
            className='d-block'
            name='contact'
          >
            <div className='d-flex flex-column col-12'>
              <label htmlFor='firstName' className='text-light'>
                Tu nombre
              </label>
              <input
                type='text'
                name='firstName'
                placeholder='Nombre'
                id='firstName'
                {...register('firstName', { required: true, maxlength: 40 })}
                className='rounded-3 my-2 p-2 border border-0'
              />
              <p className='text-gray text-center'>
                {errors.firstName?.message}
              </p>
            </div>

            <div className='d-flex flex-column col-12'>
              <label htmlFor='compName' className='text-light'>
                Nombre de la Empresa u Organización
              </label>
              <input
                type='text'
                name='compName'
                placeholder='Nombre de Empresa'
                id='compName'
                {...register('compName', { required: true, maxlength: 40 })}
                className='rounded-3 my-2 p-2 border border-0'
              />
              <p className='text-gray text-center'>
                {errors.compName?.message}
              </p>
            </div>

            <div className='d-flex flex-column col-12'>
              <label htmlFor='email' className='text-light'>
                Email de la empresa
              </label>
              <input
                type='text'
                name='email'
                placeholder='correo@mail.com'
                id='email'
                {...register('email')}
                className='rounded-3 my-2 p-2 border border-0'
              />
              <p className='text-gray text-center'>{errors.email?.message}</p>
            </div>

            <div className='d-flex flex-column col-12'>
              <label htmlFor='phone' className='text-light'>
                Número de contacto (opcional)
              </label>
              <input
                type='text'
                name='phone'
                placeholder='Teléfono'
                id='phone'
                {...register('phone')}
                className='rounded-3 my-2 p-2 border border-0'
              />
              <p />
            </div>

            <div className='d-flex flex-column col-12'>
              <label htmlFor='message' className='text-light'>
                Mensaje
              </label>
              <textarea
                name='message'
                placeholder='Escribe tu mensaje'
                id='message'
                {...register('message')}
                className='rounded-3 my-2 p-2 border border-0'
                rows='3'
              />
              <p className='text-gray text-center'>{errors.message?.message}</p>
            </div>

            <button
              type='submit'
              className='btn btn-outline-light btn-lg px-5 py-1 col-12 my-3'
            >
              Enviar
            </button>
          </form>

          <Modal
            show={showModal}
            onHide={handleCloseModal}
            className='align-self-center'
            centered
          >
            <Modal.Body className='rounded'>
              <h2 className='text-center'>Gracias por contactarnos</h2>
              <p className='text-center'>Nos comunicaremos pronto contigo</p>

              <div className='text-center mt-4'>
                <Button variant='dark' onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default SponsorCard
