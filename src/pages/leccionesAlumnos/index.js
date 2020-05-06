import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Loading from '../../globalComponents/loading'
import Leccion from './componentes/leccion'

const OBTENER_LECCIONES_POR_MODULO = gql`
    query obtenerLeccionesPorModulo($id:ID!){
  obtenerLeccionesPorModulo(id:$id){
    nombre
    imagen
    creado
    teoria{
      nombre
      video
      link
      descripcion
    }
    recursos{
      nombre
      link
      descripcion
    }
    tareas{
      nombre
      link
      descripcion
    }
  }
}
`

const LeccionesAlumnos = (props) => {
    const id = props.match.params.idmodulo
    console.log(id)
    const { data, loading, error } = useQuery(OBTENER_LECCIONES_POR_MODULO, { variables: { id } })
    console.log(error)
    if (loading || error) return <Loading />
    const { obtenerLeccionesPorModulo } = data
    console.log('obtenerLeccionesPorModulo:',obtenerLeccionesPorModulo)
    if (obtenerLeccionesPorModulo.length > 0) {
        return (
            <div className='container'>
                <h1 className='text-center my-2 mb-2'>Lecciones</h1>
                <div className="row">
                    {
                        obtenerLeccionesPorModulo.map((e,i) => <Leccion {...e} key={i} />)
                    }


                </div>
            </div>
        )
    } else {
        return (
            <div className='container'>
                <h1 className='text-center my-2 mb-2'>Éste módulo aún no contiene lecciones</h1>
            </div>
        )
    }
}

export default LeccionesAlumnos
