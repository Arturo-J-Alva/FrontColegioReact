import React from 'react'
import Card2 from '../../globalComponents/cards/card2'
import { useQuery, gql } from '@apollo/client'
import Loading from '../../globalComponents/loading'

const OBTENER_MODULO_POR_CURSO = gql`
    query obtenerModulosPorCurso($id:ID!){
  obtenerModulosPorCurso(id:$id){
    id
    nombre
    curso{
      nombre
      imagen
    }
    creado
  }
}
`

const ModulosAlumnos = (props) => {
    const id = props.match.params.idcurso
    console.log(id)
    const { data, loading, error } = useQuery(OBTENER_MODULO_POR_CURSO, { variables: { id } })
    console.log(error)
    if (loading || error) return <Loading />
    const { obtenerModulosPorCurso } = data
    console.log('obtenerModulosPorCurso:', obtenerModulosPorCurso)
    if (obtenerModulosPorCurso.length > 0) {
        return (
            <div className='container'>
                <h1 className='text-center my-2 mb-2'>Módulos del curso {obtenerModulosPorCurso[0].curso.nombre} </h1>
                <div className='text-center d-none d-md-block'>
                    <img src={obtenerModulosPorCurso[0].curso.imagen} alt={obtenerModulosPorCurso[0].curso.nombre}
                        className='w-25 ' />
                </div>
                <div className='d-md-none text-center'>
                    <img src={obtenerModulosPorCurso[0].curso.imagen} alt={obtenerModulosPorCurso[0].curso.nombre}
                        className='w-75' />
                </div>
                <div className="row">
                    {
                        obtenerModulosPorCurso.map(e => <Card2 {...e} key={e.id} />)
                    }


                </div>
            </div>
        )
    } else {
        return (
            <div className='container'>
                <h1 className='text-center my-2 mb-2'>Éste curso no contiene módulos</h1>
            </div>
        )
    }
}

export default ModulosAlumnos
