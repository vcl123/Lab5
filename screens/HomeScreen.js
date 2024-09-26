import React from "react";
import { View, StyleSheet, Button } from "react-native";
import {auth} from '../firebaseConfig'
import { signOut } from "firebase/auth";
export const HomeScreen = ({navigation}) => {
  const handleLogout = () => {
    // auth()
    //   .
      signOut(auth)
      .then(
        () => navigation.natigate('Login')
      )
      .catch((error) => console.log("Error logging out: ", error));
  };
  return (
    <View style={styles.container}>
      <Button title="Quay lại đăng nhập" onPress={handleLogout} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});