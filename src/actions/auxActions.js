//import axios from 'axios'
import { OCULTAR_HEADER_FOOTER, MOSTRAR_HEADER_FOOTER, STATUS_BUY_BOOK, CONT_SDK_BUTTON } from './types'

export const ocultarHeaderFooter = () => async (dispatch) => {
    dispatch({
        type: OCULTAR_HEADER_FOOTER
    })
}

export const mostrarHeaderFooter = () => async (dispatch) => {
    dispatch({
        type: MOSTRAR_HEADER_FOOTER
    })
}

export const stateBuyBook = (status) => async (dispatch) => {
    let message = 'no message'
    console.log('status redux:', status)
    switch (status) {
        case 'rejected':
            message = 'Hubo un error en el pago, vuelva a intentarlo'
            break
        case 'approved':
            message = 'Su compra fue exitosa'
            break
        case 'in_process':
            message = 'Su pago está en proceso, pronto le mandaremos un mensaje'
            break
        case 'internalError':
            message = 'Hay un error en el servidor, inténtelo más tarde'
            break
        case 'cleardata':
            message = null
            break
        default:
            message = null
    }
    dispatch({
        type: STATUS_BUY_BOOK,
        payload: message
    })
}

export const contSDKbutton = () => async (dispatch, getState) => {
    const { contSDK } = getState().auxReducer
    let cont = contSDK
    cont = cont + 1
    dispatch({
        type: CONT_SDK_BUTTON,
        payload: cont
    })
}

export const ResetContSDKbutton = () => async (dispatch, ) => {
    dispatch({
        type: CONT_SDK_BUTTON,
        payload: 0
    })
}