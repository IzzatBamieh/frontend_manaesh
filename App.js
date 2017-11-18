import React from 'react';
import { AppRegistry, Text, Button, TextInput, View, Alert } from 'react-native';

export default class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {email: ''};
    this.state = {password: ''};
  }
  sendData() {
    //let test = "gjhghj"
    //return console.log(this.state.email)
    //console.log(this.state.password)
    return fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      firstParam: this.state.email,
      secondParam: this.state.password,
      })
    })
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="email"
          onChangeText={(email) => this.setState({email})}
        />

        <TextInput
          style={{height: 40}}
          placeholder="password"
          onChangeText={(password) => this.setState({password})}
        />

        <Button
          onPress={() => this.sendData() }
          title="Sign up"
        />
      </View>
    );
  }
}
