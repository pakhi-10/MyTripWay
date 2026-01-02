import { Colors } from '@/constants/theme';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function  () {

    const router = useRouter();
  return (
    <View>
        <Image source = {require('./../assets/images/travel.jpg')} 
        style = {{
            width: '100%',
            height: 500,
            resizeMode: 'cover',
        }}
        />
        <View style = {styles.container}>
            <Text style = {{
                fontSize: 30,
                fontFamily: 'sans_bold',
                textAlign: 'center',
                marginTop: 20
            }}>AI TRAVEL PLANNER</Text>

            <Text style = {{
                fontFamily: 'sans_reg',
                fontSize: 19,
                textAlign: 'center',
                color: Colors.GRAY,
                padding: 10,
                marginBottom: 5
            }}>Sign in to discover your next adventure!
            </Text>

            <TouchableOpacity style = {styles.button}
                onPress = {()=>router.push('auth/sign-in')}
            >
                <Text style = {{color: Colors.WHITE,
                    textAlign: 'center',
                    fontFamily: 'outfit',
                    fontSize: 17,
                }}>Get Started</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.purple_bg,
        marginTop:-20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%',
    },
    button:{
        padding: 15, 
        backgroundColor:Colors.BLACK,
        borderRadius: 99,
        marginTop: '25%',
        borderTopLeftRadius: 99,
        borderTopRightRadius: 99,
        borderBottomLeftRadius: 99,
        borderBottomRightRadius: 99,
        width: 300,
        marginLeft: 45
    }
})