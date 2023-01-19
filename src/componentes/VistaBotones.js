import React from 'react'
import styled from 'styled-components'
import { useFiltroContexto } from '../contextos/filtro_contexto'


import { BsFillGridFill, BsList} from 'react-icons/bs'

const VistaBotones = () => {
    const {productos_filtrados: productos, 
            v_cuadricula, 
            setVistaCuadricula, 
            setVistaLista} = useFiltroContexto();
    return (
    <Contenedor_VistaBotones>
        <div className='contenedor-botones'>
            <button type='button' className={`${v_cuadricula?'active':null}`} onClick={setVistaCuadricula}>
                <BsFillGridFill />
            </button>
            <button type='button' className={`${!v_cuadricula?'active':null}`} onClick={setVistaLista}>
                <BsList />
            </button>
        </div>
        <p className='centrar-v'>{productos.length} Productos Encontrados </p>
        <div><hr /></div>
        <form>
            <label htmlFor='ordenar' id='ordenar'>Ordenar por: </label>
            <select name='ordenar' id='ordenar' className='orden-seleccionado'>
                <option value='precio-mas-bajo'>Precio (más bajo)</option>
                <option value='precio-mas-alto'>Precio (más alto)</option>
                <option value='nombre-a'>Nombre (A-Z)</option>
                <option value='nombre-z'>Nombre (Z-A)</option>
            </select>
        </form>
    </Contenedor_VistaBotones>
  )
}

const Contenedor_VistaBotones = styled.section`
display: grid;
grid-template-columns: auto auto 1fr auto;
align-items: center;
margin-bottom: 2rem;
column-gap: 2rem;

@media (max-width: 576px) {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.75rem;
  .contenedor-botones {
    width: 50px;
  }
  label {
    display: inline-block;
    margin-right: 0.5rem;
  }
}
@media (min-width: 850px) {
  column-gap: 2rem;
}
p {
  text-transform: capitalize;
  margin-bottom: 0;
}
.contenedor-botones {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
  button {
    background: transparent;
    border: 1px solid black;
    color: black;
    width: 1.5rem;
    border-radius: 0.25rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      font-size: 1rem;
    }
  }
  .active {
    background: black !important;
    color: white;
  }
}
.sort-input {
  border-color: transparent;
  font-size: 1rem;
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
}
label {
  font-size: 1rem;
  text-transform: capitalize;
}
.centrar-v{
  margin-bottom: 1rem;
}
`

export default VistaBotones