import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const NotFoundScreen = () => {
  return (
    <>
        <Stack.Screen options={{ title: "Oops! Page not found"}} />
        <View style={style.container}>
            <Link href="/" style={style.button}>Go back to Home Screen</Link>
        </View>
    </>
  )
}

export default NotFoundScreen

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center'
      },
      text: {
        color: '#fff'
      },
      button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff'
      }
})