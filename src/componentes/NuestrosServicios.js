import React from 'react'
import styled from 'styled-components'

//Importaciones propias
import {FaTruckMoving, FaCalendarCheck} from 'react-icons/fa';
import {MdPhone} from 'react-icons/md';


//Array con nuestros servicios
const servicios = [
    {
        id: 1, 
        icono: <FaTruckMoving/>,
        titulo: 'Envío Gratis 24/48 Horas',
        texto: 'Para pedidos desde 70€ de compra'
    },

    {
        id: 2, 
        icono: <FaCalendarCheck/>,
        titulo: 'Devoluciones gratis',
        texto: 'Tienes hasta 14 días para devolver'
    },

    {
        id: 3,
        icono: <MdPhone/>,
        titulo: 'Te asesoramos',
        texto: 'Llámanos gratis al 917 37 77 32. '+
               'Horario: De lunes a viernes: 8.00 a 21.00. '+
               'Sábados, domingos y festivos: 8.00 a 15.00'
    },
]


const NuestrosServicios = () => {
  return (
    <Contenedor_NuestrosServicios>
        <div className='section-centrada'>
            <article>
                <h3></h3>
            </article>
            <div className='servicios-centrado'>
                {servicios.map((item) => {
                    const {id, icono, titulo, texto} = item;
                    return <article key={id} className='servicio'>
                        <span className='icono'>{icono}</span>
                        <h4>{titulo}</h4>
                        <p>{texto}</p>
                    </article>
                })}
            </div>
        </div>        
    </Contenedor_NuestrosServicios>
  )
}

const Contenedor_NuestrosServicios = styled.section`
  
  padding: 5rem 0;
  background: #e5c4a7;
  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .servicios-centrado {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .servicio {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 850px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .servicios-centrado {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`

export default NuestrosServicios