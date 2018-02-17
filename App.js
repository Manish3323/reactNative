/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import { View,Text, StyleSheet } from 'react-native';
import  LoginForm  from './src/components/LoginForm';
import { Card} from './src/components/Card';
import { Spinner } from './src/components/spinner';
import { Button } from './src/components/Button';
import { Header } from './src/components/Header';

class App extends Component<Props> {
  state= {
      loggedIn:null,
      email:'',
      password:'',
   }

  componentWillMount() {
        var config = {
          apiKey: "AIzaSyDuMWWsXCJ9yVMdjLPoN6h9KYAL6mTtDiU",
          authDomain: "bet18-9fada.firebaseapp.com",
          databaseURL: "https://bet18-9fada.firebaseio.com",
          projectId: "bet18-9fada",
          storageBucket: "bet18-9fada.appspot.com",
          messagingSenderId: "170655201334"
        };
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true});
            }else{
                this.setState({loggedIn:false});
            }
    });
  }

  render() {
    return (
        <View style={styles.container}>
            <Header showLogOut={ () => firebase.auth().signOut() } headerText='Predict it' />
            <View style={styles.bodyStyle}>
              <LoginForm />
            </View>
      </View>
    )
  }
}

const styles =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF'
  },
  bodyStyle:{
    flex:1,
    backgroundColor:'#F5FCFF'
  }
});

export default App;