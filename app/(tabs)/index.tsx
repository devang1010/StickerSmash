import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceHolderImage = require('@/assets/images/background-image.png')

export default function Index() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.imgContainer}>
        <ImageViewer imgSource={PlaceHolderImage} />
      </View>
      <View style={style.footerContainer}>
        <Button lable="Choose the Photo" />
        <Button lable="Use this Photo" />
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
