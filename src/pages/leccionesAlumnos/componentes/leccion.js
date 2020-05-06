import React, { useState } from 'react'
import ReprodVideo1 from '../../../globalComponents/reprodVideo/ReprodVideo1'
import { Form, Button } from 'react-bootstrap'
import { useMutation, gql } from '@apollo/client'

const UPLOAD_FILE  = gql`
  mutation uploadFile($file: Upload!) {
     uploadFile(file: $file) {
     filename
   }
}
`

const Leccion = ({ creado, imagen, nombre, recursos, tareas, teoria }) => {
    console.log('teoria:', teoria)
    const [file, selectFile] = useState(null)
    const [uploadFile] = useMutation(UPLOAD_FILE)

    console.log(file)
    const FilePost = async (e) => {
        e.preventDefault()
        console.log('enviando...')
        try{
            const { data } = await uploadFile({ variables: {file} })
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div className='col-md-12 '>
            <h2 className='text-center'>{nombre}</h2>
            {teoria.map((e, i) => {
                return (
                    <div key={i} className='border mb-4'>
                        <h4>{e.nombre}</h4>
                        <p>{e.descripcion}</p>
                        <ReprodVideo1 url={e.video} key={i} />
                    </div>
                )
            })}
            <div>
                <Form onSubmit={FilePost}> 
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Upload</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            onChange={({ target: { validity, files: [file] } }) =>
                                validity.valid && selectFile(file)} />
                    </Form.Group>
                    <Button type='submit' className=''>Enviar archivo</Button>
                </Form>
            </div>
            <h4 className='text-center'>-----FIN DE LECCIÓN-----</h4>
        </div>
    )
}

export default Leccion
