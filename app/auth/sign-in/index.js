import { Colors } from '@/constants/theme';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignIn() {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])
  return (
    <View style = {{
      padding:25,
      marginTop: 10,
      backgroundColor: Colors.WHITE
    }}>
      <Text style = {{
        fontFamily: 'sans_bold',
        fontSize: 40
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

      <View style = {{
        marginTop: 50 
      }}>
        <Text style = {{
          fontFamily: 'sans_reg'
        }}>Email</Text>
        <TextInput style = {styles.input}
          placeholder='Enter Email'></TextInput>
      </View>

      <View style = {{
        marginTop: 50 
      }}>
        <Text style = {{
          fontFamily: 'sans_reg'
        }}>Password</Text>
        <TextInput 
        type = "password"
        style = {styles.input}
          placeholder='Enter Password'></TextInput>
      </View>
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