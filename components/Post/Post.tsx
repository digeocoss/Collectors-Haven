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
import { AntDesign, Ionicons } from "@expo/vector-icons";
import PostForm from "./PostForm";

export default function Post({
  navigation,
  route,
}: RootStackScreenProps<"Post">) {
  const [test, setTest] = useState();
  const image = route.params;
  const base64Data = image.photo.base64;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="ios-chevron-back" size={40} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Item Information</Text>
      </View>
      <View style={styles.pictureUploadContainer}>
        <View style={styles.uploadedPicture}>
          <Image
            source={{ uri: `data:image/gif;base64,${base64Data}` }}
            style={{ height: 176, width: 178, borderRadius: 10 }}
          />
        </View>
        <TouchableOpacity activeOpacity={0.4}>
          <View style={styles.addAnotherPicture}>
            <AntDesign
              style={styles.plusIcon}
              name="plus"
              size={55}
              color="black"
            />
            <View style={styles.miniHeading}>
              <AntDesign name="picture" size={25} color="white" />
              <Text
                style={{
                  color: "white",
                  marginLeft: 10,
                  marginTop: 3,
                  fontSize: 18,
                }}
              >
                Add Photo
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formHeaderContainer}>
          <Text style={styles.formHeader}>Estimated Worth: </Text>
          <View>
            <PostForm image={base64Data} />
          </View>
        </View>
      </View>
    </View>
  );
}
