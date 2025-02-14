import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import  FontAwesome  from '@expo/vector-icons/FontAwesome'

type Props = {
    lable: string,
    theme?: 'primary',
    onPress: () => void
}

const Button = ({lable, theme, onPress} : Props) => {
    if(theme === 'primary'){
  return (
    <View style={[styles.buttonContainer, {borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18}]}>
      <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
        <FontAwesome name='picture-o' size={18} color="#25292e" style={styles.buttonIcon} /> 
        <Text style={[styles.buttonLabel, { color: '#2529e' }]}>{lable}</Text>
      </Pressable>
    </View>
  )
}

return(
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => alert("Button is pressed")}>
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
    buttonIcon: {
        paddingRight: 8
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });