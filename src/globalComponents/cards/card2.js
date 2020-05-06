import React from 'react'
import { Card } from 'react-bootstrap'
import moment from 'moment'
import 'moment/locale/es'
import { Link } from 'react-router-dom'

const Card2 = ({ creado, id, nombre }) => {
    const TimeToDate = (x) => {
        const y = new Date(Number(x))
        return moment(y).format('LL')
    }
    return (
        <div className='my-4 col-md-4 d-flex justify-content-center'>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title> {nombre} </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Creado: {TimeToDate(creado)}
                        </Card.Text>
                        <div className='text-center'>
                            <button type='button' className='btn btn-outline-primary'> 
                            <Link to={'/leccionAlumnos/'+id} className='text-decoration-none text-secondary'>Ver lecciones</Link> 
                            </button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Card2
