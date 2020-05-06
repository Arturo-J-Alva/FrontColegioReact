import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Loading from '../../globalComponents/loading'

const OBTENER_ALUMNOS = gql`
    query obtenerAlumnos{
  obtenerAlumnos{
    nombre
    apellido
    ndoc{
      tipo
      numero
    }
    sexo
    apoderado
    telefono
    email
    grupo{
      nombre
      nivel{
        nombre
        cronograma
      }
      seccion
			tutor{
        id
        nombre
        apellido
        sexo
        ndoc{
          tipo
          numero
        }
        email
      }
    }
    password
    domicilio
  }
}
`

const Home = () => {
    const { data, loading, error } = useQuery(OBTENER_ALUMNOS)
    if (loading||error) return <Loading />
    const { obtenerAlumnos } = data
    console.log('obtenerAlumnos:',obtenerAlumnos)
    return (
        <div>
          <h1>Home!</h1>
            {
                obtenerAlumnos.map((e,i) => {
                    return <p key={i}>{e.apellido}</p>
                })
            }
            
        </div>
    )
}

export default Home
