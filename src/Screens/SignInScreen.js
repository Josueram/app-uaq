import React, { useState, useContext} from 'react'
import { Button, TextInput, View } from 'react-native'
import AppContext from '../context/AppContext';

function SignInScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 
  const { signIn } = useContext(AppContext);

  return (
    <View style={{flex:1,alignItems:'center',marginTop:50}}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
}

export default SignInScreen