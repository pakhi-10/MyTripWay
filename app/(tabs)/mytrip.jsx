import { Colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Text, View } from 'react-native';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

export default function MyTrip () {

  const [userTrips, setUserTrips] = useState([]);


  return (
    <View style ={{
      padding: 25,
      paddintTop: 55,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <View style = {{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between' 
      }}>
        <Text style={{
          fontFamily: 'sans_bold',
          fontSize: 35
        }}
        >MyTrips</Text>
        <Ionicons name="add-circle" size={50} color="black" 
        style = {{
          paddingTop: 10
        }}/>
      </View>
      

      {userTrips?.length==0?
        <StartNewTripCard/>
        :null
      }
    </View>
  )
}