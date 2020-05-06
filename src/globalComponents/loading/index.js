import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary h-100' >
            <div className='d-flex flex-column text-center'>
            <Spinner animation="grow" variant="warning" size='xxl' style={{height:'12rem', width:'12rem'}}/>
            <span className='h5 text-white'>CARGANDO...</span>
            </div>
        </div>
    )
}

export default Loading
