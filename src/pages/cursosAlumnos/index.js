import React from 'react'
import Card1 from '../../globalComponents/cards/card1'
import { useQuery, gql } from '@apollo/client'
import Loading from '../../globalComponents/loading'

const OBTENER_CURSOS = gql`
    query obtenerCursos{
  obtenerCursos{
      id
    nombre
    nivel{
      nombre
    }
    imagen
    profesores{
      nombre
      apellido
    }
    creado
  }
}
`

const CursosAlumnos = (props) => {
    const { data, loading, error } = useQuery(OBTENER_CURSOS)
    if (loading || error) return <Loading />
    const { obtenerCursos } = data
    console.log('obtenerCursos:', obtenerCursos)
    return (
        <div className='container'>
            <div className="row">
                <div className="d-flex flex-column">
                    <h1 className='text-center'>CURSOS</h1>
                    <div className="row d-flex justify-content-center">
                        {
                            obtenerCursos.map(e => {
                                return <div key={e.id} className='col-md-3 d-flex justify-content-center'>
                                    <div className="py-2 ">
                                        <Card1 {...e} IrAlModulo={(id)=>props.history.push('/moduloAlumnos/'+id)}/>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CursosAlumnos
