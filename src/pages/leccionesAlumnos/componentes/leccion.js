import React, { useState } from 'react'
import ReprodVideo1 from '../../../globalComponents/reprodVideo/ReprodVideo1'
import { Form, Button } from 'react-bootstrap'
import { useMutation, gql } from '@apollo/client'
import axios from 'axios'

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
     uploadFile(file: $file) {
     filename
   }
}
`

const UPLOAD_FILES = gql`
  mutation uploadFiles($files: [Upload]!) {
     uploadFiles(files: $files) {
       filename
     }
   }
`

const Leccion = ({ creado, imagen, nombre, recursos, tareas, teoria,id }) => {
    console.log('teoria:', teoria)
    const [file, selectFile] = useState(null)
    const [files, selectFiles] = useState(null)
    const [uploadFile] = useMutation(UPLOAD_FILE)
    const [uploadFiles] = useMutation(UPLOAD_FILES)
    const [tareaFile, settareaFile] = useState(null)

    //console.log(file)
    console.log('tareaFile:',tareaFile)
    const FilePost1 = async (e) => {
        e.preventDefault()
        console.log('enviando...')
        try {
            const { data } = await uploadFile({ variables: { file } })
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }
    console.log(files)
    const FilePost2 = async (e) => {
        e.preventDefault()
        console.log('enviando...')
        try {
            const { data } = await uploadFiles({ variables: { files } })
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }
    const FilePostRest = async (e) => {
        e.preventDefault()
        try{
            const formData = new FormData();
        formData.append(
            "file0",
            tareaFile,
            tareaFile.name
        )
        formData.append(
            "id",
            id
        )
        console.log('formData:',formData)
        const resI = await axios.post("http://localhost:3300/api/upload-tarea/", formData/* , { headers: { 'x-access-token': this.JWT } } */)
        console.log('res img:', resI)
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
                <Form onSubmit={FilePostRest}>
                    <Form.Group controlId="formGroupEmail1">
                        <Form.Label>Upload File Rest</Form.Label>
                        <Form.Control
                            type="file"
                            name='file1'
                            required
                            onChange={(e)=>settareaFile(e.target.files[0])} />
                    </Form.Group>
                    <Button type='submit' className=''>Enviar archivo</Button>
                </Form>
                <Form onSubmit={FilePost1}>
                    <Form.Group controlId="formGroupEmail1">
                        <Form.Label>Upload 1File</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            onChange={({ target: { validity, files: [file] } }) =>
                                validity.valid && selectFile(file)} />
                    </Form.Group>
                    <Button type='submit' className=''>Enviar archivo</Button>
                </Form>
                <Form onSubmit={FilePost2}>
                    <Form.Group controlId="formGroupEmail2">
                        <Form.Label>Upload Files</Form.Label>
                        <Form.Control
                            type="file"
                            multiple
                            required
                            onChange={({ target: { validity, files } }) =>
                                validity.valid && selectFiles(files)
                            } />
                    </Form.Group>
                    <Button type='submit' className=''>Enviar archivo</Button>
                </Form>
            </div>
            <h4 className='text-center'>-----FIN DE LECCIÓN-----</h4>
        </div>
    )
}

export default Leccion
