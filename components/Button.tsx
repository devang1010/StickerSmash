import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

type Props = {
    lable: string
}

const Button = ({lable} : Props) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert("You have pressed the button")}>
        <Text style={styles.buttonLabel}>{lable}</Text>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });