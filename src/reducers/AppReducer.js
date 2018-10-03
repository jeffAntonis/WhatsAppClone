import { MODIFICA_ADICIONA_CONTATO_EMAIL, ADICIONA_CONTATO_ERRO, ADICIONA_CONTATO_SUCESSO, MODIFICA_MENSAGEM, ENVIA_MENSAGEM_SUCESSO } from "../actions/types";

const INITIAL_STATE = {
    adiciona_contato_email: '',
    cadastro_resultado_txt_erro: '',
    cadastro_resultado_inclusao: false,
    mensagem: ''
};

export default (state = INITIAL_STATE, actions) => {
    switch(actions.type){
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return { ...state, adiciona_contato_email: actions.payload }

        case ADICIONA_CONTATO_ERRO:
            return { ...state, cadastro_resultado_txt_erro: actions.payload }
        
        case ADICIONA_CONTATO_SUCESSO:
            return { ...state, cadastro_resultado_inclusao: actions.payload, adiciona_contato_email: '' }
        
        case MODIFICA_MENSAGEM:
            return { ...state, mensagem: actions.payload };

        case ENVIA_MENSAGEM_SUCESSO:
            return { ...state, mensagem: '' };
        
        default:
            return state;
    }
}