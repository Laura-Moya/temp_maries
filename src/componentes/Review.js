import React from 'react'
import styled from 'styled-components'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

const Review = ({estrellas}) => {
  const arrayEstrellas = Array.from({ length: 5 }, (_, indiceArrayEstrellas) => {
    //Siendo un array el índice irá de 0 a 4
    const aux = indiceArrayEstrellas + 0.5
    return (
      <span key={indiceArrayEstrellas}>
        {estrellas >= indiceArrayEstrellas + 1 ? (
          <BsStarFill />
        ) : estrellas >= aux ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  return (
    <Contendor_Reviews>
      {/**Las estrellitas**/}
      <div className='estrellas'>{arrayEstrellas}</div>
      {/**Aquí irían las reviews **/}
    </Contendor_Reviews>
  )
}
const Contendor_Reviews = styled.div `
  display: flex;
  align-items: center;
  span {
    color: #d4cc31;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`

export default Review