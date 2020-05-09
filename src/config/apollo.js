import { ApolloClient, /* createHttpLink, */ InMemoryCache } from '@apollo/client'
import fetch from 'node-fetch'
import { setContext } from 'apollo-link-context'
import { createUploadLink } from "apollo-upload-client" // Reemplaza a createHttpLink, y habilita el envío de archivos al resolver de apollo-server

const httpLink = createUploadLink({
    uri: 'http://52.15.80.244:3100/',
    fetch
})

const authLink = setContext((_,{headers}) => {
    //leer el storage alamcenado
    const token = localStorage.getItem('TOKEN')
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
}) 

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link:  authLink.concat(httpLink)
})
export default client