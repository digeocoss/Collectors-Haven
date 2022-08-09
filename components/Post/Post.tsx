import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { RootStackScreenProps, RootTabScreenProps } from "../../types";
import { styles } from "./PostStyles";
import { Ionicons } from "@expo/vector-icons";
import PostForm from "./PostForm";

export default function Post({ navigation, route }: RootStackScreenProps<"Post">) {
  const [test, setTest] = useState();
  console.log(route.params);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="ios-chevron-back" size={50} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Item Information</Text>
      </View>
      <View style={styles.pictureUploadContainer}>
        <View style={styles.uploadedPicture}>
          <Text> Uploaded Picture here</Text>
        </View>
        <View style={styles.addAnotherPicture}>
          <Text>option to add more pictures here</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formHeaderContainer}>
          <Text style={styles.formHeader}>Estimated Worth: </Text>
          <View>
            <PostForm />
          </View>
        </View>
      </View>
    </View>
  );
}
