import { Colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';

export default function StartNewTripCard() {
  return (
    <View style={{
      padding: 20,
      marginTop: 50,
      display: 'flex',
      alignItems:'center',
      gap: 20
    }}>
    <Ionicons name="location-sharp" size={30} color="black" />
    <Text style={{
      fontSize: 25, 
      fontFamily: 'sans_reg',
      marginTop: 10, 
      textAlign: 'center'
    }}>
      No trips planned yet
    </Text>

    <TouchableOpacity style={{
      padding:5,
      backgroundColor: Colors.BLACK, 
      borderRadius: 15, 
      paddingHorizontal: 30
    }}>
      <Text style={{
        color: Colors.WHITE,
        fontFamily: 'sans_reg',
        fontSize: 17
      }}>Start a new trip</Text>
    </TouchableOpacity>
    </View>
  )
}