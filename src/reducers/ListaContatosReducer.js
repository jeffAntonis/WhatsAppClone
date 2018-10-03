const INITIAL_STATE = {}

import { LISTA_CONTATO_USUARIO } from "../actions/types";


export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case LISTA_CONTATO_USUARIO: 
            return action.payload;

        default:
            return state;
    }
}