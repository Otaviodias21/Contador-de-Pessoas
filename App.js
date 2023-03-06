import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      num: 0 
    };
  
   this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
  
  entrar(){
    this.setState({
      num: this.state.num + 1
    });
  }

  sair(){
   if(this.state.num > 0){
      this.setState({
      num: this.state.num - 1
    });
   }
  }

  render(){
    return(
      <View style={{ marginTop: 80, margin: 60}}>
        <Text style={{fontSize: 20, color: 'grey', textAlign: 'center' }}> Contador de Pessoas</Text>
        <Text style={{fontSize: 50, color: 'grey', textAlign: 'center', paddingBottom: 20}}>
          {this.state.num}
        </Text>
        
      <Button color = "green" title="+" onPress={this.entrar} />
      <Button color = "purple" title="-" onPress={this.sair} />
      </View>
        )
  }
}

export default App;
