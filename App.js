import React, { Component } from "react";
import { View, Text } from "react-native";
import SignupScreen from "./SignupScreen";

class App extends Component {
     constructor(props) {
          super(props);
     }

     render() {
          return (
               <View>
                    <SignupScreen />
               </View>
          );
     }
}

export default App;
