import { Colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { auth } from './../../../configs/FirebaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[]);

  const OnCreateAccount = ()=>{

    if(!email.trim() || !password.trim() || !fullName.trim()){
      ToastAndroid.show('Please enter all details', ToastAndroid.BOTTOM)
      return;
    }

    if(password.length < 6){
      ToastAndroid.show('Password should be at least 6 characters', ToastAndroid.BOTTOM)
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode);
    // ..
  });
  }
  
  return (
    <View
    style={{
      padding: 25,
      paddingTop: 50,
      backgroundColor: Colors.purple_bg, height: '100%'
    }}>

      {/*Back Arrow*/}
      <TouchableOpacity onPress = {()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style = {{
        fontFamily: 'sans_bold',
        fontSize:30,
        marginTop: 30
      }}>Create New Account</Text>

{/*user full name*/}
<View style = {{
          marginTop: 50 
        }}>
        <Text style = {{
            fontFamily: 'sans_reg'
          }}>Full Name</Text>
            <TextInput style = {styles.input}
              placeholder='Enter full name'
              value={fullName}
              onChangeText = {setFullName}>
            </TextInput>
      </View>

      {/*Email input*/}
      <View style = {{
          marginTop: 50 
        }}>
        <Text style = {{
            fontFamily: 'sans_reg'
          }}>Email</Text>
            <TextInput style = {styles.input}
              placeholder='Enter Email'
              value={email}
              onChangeText={setEmail}>
            </TextInput>
      </View>
      
      {/*Password*/}
            <View style = {{
              marginTop: 8 
            }}>
              <Text style = {{
                fontFamily: 'sans_reg'
              }}>Password</Text>
              <TextInput 
              type = "password"
              secureTextEntry = {true}
              style = {styles.input}
                placeholder='Enter Password'
                value={password}
                onChangeText={setPassword}>
                </TextInput>
            </View>
            
                  {/*Create Account Button*/}
                  <TouchableOpacity onPress = {OnCreateAccount}
                   
                  style = {{
                    padding: 20,
                    backgroundColor: Colors.WHITE,
                    borderRadius: 15,
                    marginTop: 20,
                    borderWidth: 1
                  }}>
                    <Text style = {{
                      color: Colors.BLACK,
                      textAlign: 'center'
                    }}>Create Account</Text>
                  </TouchableOpacity>

                  {/*Sign In Button*/}
                  <TouchableOpacity
                  onPress={()=>router.replace('auth/sign-in')}
                   style = {{
                    padding: 20,
                    backgroundColor: Colors.BLACK,
                    borderRadius: 15,
                    marginTop: 20
                  }}>
                    <Text style = {{
                      color: Colors.WHITE,
                      textAlign: 'center'
                    }}>Sign In</Text>
                  </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding:15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor:Colors.BLACK,
    fontFamily: 'sans_reg'
  }
})