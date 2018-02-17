import React, { Component } from 'react';
import {  Text, View,StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Input } from './Input';
import { Card} from './Card';
import { Spinner } from './spinner';
import { Button } from './Button';

class LoginForm extends Component {
    state={
        email: '',
        password: '',
        err:'',
        loading:false,
    };
    onButtonPress(){
        const { email, password } = this.state;
        this.setState({err:'',loading:true});
        console.log(email,password);
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this));
        });
    }
    
    onLoginSuccess(){
        this.setState({email:'',password:'',err:false,loading:false});
    }

    onLoginFailed(){
        this.setState({err:'Authentication Failed',loading:false});
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small"/>
        }
        return <Button onPress={this.onButtonPress.bind(this)} buttontext="Log In" /> 
    }

    render() {
        return (
                
                    <Card style={styles.cardSectionStyle}>
                        <Input  placeholder="user@gmail.com" label="Email" value={ this.state.email }  onChangeText={ text => this.setState({ email: text}) } />
                    </Card>
                
        );
    }
}

const styles=StyleSheet.create({
    errorStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    },
    cardStyle:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    cardSectionStyle:{
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'
    }
});
export default LoginForm;