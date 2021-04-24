import React, { Component } from "react";
import {
     View,
     ScrollView,
     Text,
     TextInput,
     TouchableOpacity,
     StyleSheet,
     Alert,
} from "react-native";

class SignupSceen extends Component {
     constructor(props) {
          super(props);
          this.state = {
               username: "",
               email: "",
               password: "",
               confirmPassword: "",
          };
     }

     handleChange = ({ username, password, email, confirmPassword }) => {
          this.setState({
               username,
               password,
               email,
               confirmPassword,
          });
     };

     validation = () => {
          const { username, password, email, confirmPassword } = this.state;
          if (
               username === "vasbee" &&
               email !== "" &&
               password === "123456" &&
               confirmPassword === password
          ) {
               Alert.alert("login successful");
          } else {
               console.log(username, password, email, confirmPassword);
               return Alert.alert("sorry you entered wrong login details.");
          }
     };

     render() {
          const { username, email, password, confirmPassword } = this.state;
          return (
               <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
               >
                    <View style={styles.loginTextContainer}>
                         <Text style={styles.signupText}>Sign up</Text>
                    </View>

                    <View>
                         <TextInput
                              style={styles.input}
                              placeholderTextColor='#aaaaaa'
                              placeholder='Username'
                              onChangeText={this.handleChange}
                              value={username}
                         />
                         <TextInput
                              style={styles.input}
                              placeholderTextColor='#aaaaaa'
                              placeholder='Email'
                              keyboardType='email-address'
                              onChangeText={this.handleChange}
                              value={email}
                         />
                         <TextInput
                              style={styles.input}
                              placeholderTextColor='#aaaaaa'
                              secureTextEntry={true}
                              placeholder='Password'
                              onChangeText={this.handleChange}
                              value={password}
                         />
                         <TextInput
                              style={styles.input}
                              placeholderTextColor='#aaaaaa'
                              secureTextEntry={true}
                              placeholder='Confirm Password'
                              onChangeText={this.handleChange}
                              value={confirmPassword}
                         />
                    </View>

                    <View>
                         <TouchableOpacity
                              style={styles.buttonContainer}
                              onPress={this.validation}
                         >
                              <Text style={styles.buttonText}>Sign up</Text>
                         </TouchableOpacity>
                    </View>

                    <View style={styles.noAccountContainer}>
                         <Text style={styles.noAccountText}>
                              You already have account?
                         </Text>
                         <Text style={styles.loginText}>Log in</Text>
                    </View>
               </ScrollView>
          );
     }
}

const styles = StyleSheet.create({
     container: {
          marginTop: 70,
          marginHorizontal: 50,
     },

     signupText: {
          fontSize: 45,
          color: "#5100ad",
     },

     loginTextContainer: {
          marginBottom: 30,
     },

     input: {
          borderBottomWidth: 2,
          borderBottomColor: "#5100ad",
          fontSize: 20,
          height: 50,
          marginTop: 20,
     },

     buttonContainer: {
          height: 50,
          backgroundColor: "#5100ad",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginVertical: 50,
     },

     buttonText: {
          color: "white",
          fontSize: 25,
     },

     noAccountContainer: {
          flexDirection: "row",
          justifyContent: "center",
     },

     noAccountText: {
          marginRight: 10,
          fontSize: 16,
     },

     loginText: {
          fontSize: 16,
          color: "#5100ad",
     },
});

export default SignupSceen;
