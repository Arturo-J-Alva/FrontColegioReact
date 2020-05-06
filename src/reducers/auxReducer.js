import { OCULTAR_HEADER_FOOTER, MOSTRAR_HEADER_FOOTER,STATUS_BUY_BOOK,CONT_SDK_BUTTON } from '../actions/types'

const INITIAL_STATE = {
    viewHeaderFooter: true,
    stateBuyBook:null,
    contSDK:0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OCULTAR_HEADER_FOOTER:
            return { ...state, viewHeaderFooter: false }
        case MOSTRAR_HEADER_FOOTER:
            return { ...state, viewHeaderFooter: true }
        case STATUS_BUY_BOOK:
            return { ...state, stateBuyBook: action.payload  }
            case CONT_SDK_BUTTON:
            return { ...state, contSDK: action.payload  }
        default: return state
    }
}