import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker'
import { useState } from "react";


const PlaceHolderImage = require('@/assets/images/background-image.png')

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageSync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    })

    if(!result.canceled){
      // console.log(result)
      setSelectedImage(result.assets[0].uri);
    }else{
      alert("You did not select the image");
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.imgContainer}>
        <ImageViewer imgSource={PlaceHolderImage} selectedImage={selectedImage}/>
      </View>
      <View style={style.footerContainer}>
        <Button theme="primary" lable="Choose the Photo" onPress={pickImageSync} />
        <Button lable="Use this Photo" onPress={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imgContainer: {
    flex: 1
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center'
  }
})
