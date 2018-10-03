import React, {Component} from 'react';
import { View, Text, TextInput, Button, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { 
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastraUsuario 
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {

    _cadastraUsuario(){
        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }
    
    renderBtnCadastro(){
        if(this.props.loadingCadastro){
            return (
                <ActivityIndicator size="large" />
            );
        }
        return (
            <Button
                title="Cadastrar"
                color="#115E54"
                onPress={() => this._cadastraUsuario()}
            />
        );
    }

    render(){
        return (
            <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput 
                            value={this.props.nome} 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder="Nome" 
                            placeholderTextColor="#fff" 
                            onChangeText={texto => this.props.modificaNome(texto)} 
                        />
                        <TextInput 
                            value={this.props.email} 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder="E-mail" 
                            placeholderTextColor="#fff" 
                            onChangeText={texto => this.props.modificaEmail(texto)} 
                        />
                        <TextInput 
                            secureTextEntry={true} 
                            value={this.props.senha} 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder="Senha" 
                            placeholderTextColor="#fff" 
                            onChangeText={texto => this.props.modificaSenha(texto)} 
                        />

                        <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.erroCadastro}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderBtnCadastro()}
                    </View>                    
                </View>
            </Image>
        );
    }    
}

const mapSateToProps = state => (
    {
        nome:   state.AutenticacaoReducer.nome,   
        email:  state.AutenticacaoReducer.email,
        senha:  state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loadingCadastro: state.AutenticacaoReducer.loadingCadastro
    }
)

export default connect(
    mapSateToProps, 
    { 
        modificaEmail,         
        modificaSenha, 
        modificaNome,
        cadastraUsuario
    }
)(formCadastro);

