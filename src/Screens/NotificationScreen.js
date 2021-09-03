import React, { useContext } from 'react'
import { Button, View, Text} from 'react-native'
import AppContext from '../context/AppContext';

function NotificationScreen() {
    const { signOut } = useContext(AppContext);
    return (
      <View>
        <Text>Notifications</Text>
        <Button title="Sign out" onPress={signOut} />
      </View>
    );
  }

export default NotificationScreen