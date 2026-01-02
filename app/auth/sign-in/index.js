import { auth } from '@/configs/FirebaseConfig';
import { Colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  const onSignIn = () =>{

    if(!email.trim() || !password.trim()){
      ToastAndroid.show("Please enter email and password", ToastAndroid.BOTTOM)
      return;
    }

signInWithEmailAndPassword(auth, email.trim(), password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, error.code)
    if(errorCode == 'auth/invalid-credential'){
      ToastAndroid.show("Invalid credential", ToastAndroid.LONG)
    }
  });
  }
  return (
    <View style = {{
      padding:25,
      marginTop: 10,
      backgroundColor: Colors.purple_bg,
      height: '100%'
    }}>
      <TouchableOpacity style = {{ marginTop: 20, paddingTop: 10}}
      onPress = {()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style = {{
        fontFamily: 'sans_bold',
        fontSize: 40,
        marginTop: 20
      }}>Let's Sign you In</Text>
      <Text style = {{
        fontFamily: 'sans_reg',
        fontSize: 30,
        color:Colors.GRAY,
        marginTop: -10
      }}>Welcome Back</Text>
      <Text style = {{
        fontFamily: 'sans_reg',
        fontSize: 30,
        color: Colors.GRAY,
      }}>You've been missed</Text>

      {/*Enter email text input*/}
      <View style = {{
        marginTop: 12
      }}>
        <Text style = {{
          fontFamily: 'sans_reg',
          
        }}>Email</Text>
        <TextInput style = {styles.input}
          placeholder='Enter Email'
          value={email}
          onChangeText={setEmail}></TextInput>
      </View>


        {/*Enter password text input*/}
      <View style = {{
        marginTop: 12
      }}>
        <Text style = {{
          fontFamily: 'sans_reg',
          marginBottom: 4
        }}>Password</Text>
        <TextInput 
        type = "password"
        secureTextEntry = {true}
        style = {styles.input}
          placeholder='Enter Password'
          value={password}
          onChangeText={setPassword}></TextInput>
      </View>

        {/*Sign In Button*/}
      <TouchableOpacity onPress = {onSignIn}
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

      {/*Create Account Button*/}
      <TouchableOpacity
      onPress={()=>router.replace('auth/sign-up')} 
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