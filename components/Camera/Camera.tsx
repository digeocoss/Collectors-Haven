import { Camera } from "expo-camera";
import * as MediaLibary from "expo-media-library";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ImageBackgroundComponent,
  Image,
  Dimensions,
} from "react-native";
import { useState, useRef, useEffect, SetStateAction } from "react";
import { shareAsync } from "expo-sharing";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { RootTabScreenProps } from "../../types";
import { styles } from "./CameraStyles";

export default function CameraUse({
  navigation,
}: RootTabScreenProps<"Camera">) {
  let cameraRef = useRef();
  const [AllowCamera, setAllowCamera] = useState();
  const [AllowMedia, setAllowMedia] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPer = await Camera.requestCameraPermissionsAsync();
      const mediaPer = await MediaLibary.requestPermissionsAsync();
      setAllowCamera(cameraPer.status == "granted");
      setAllowMedia(mediaPer.status == "granted");
    })();
  }, []);

  if (AllowCamera === undefined) {
    return <Text> Requesting permision </Text>;
  } else if (!AllowCamera) {
    return <Text>Permision pr camera not granted please change settings</Text>;
  }

  let TakePicture = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePicture = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.postViewContainer}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <View style={styles.topToolbar}>
          <View style={styles.toolBarOptContainer}>
            <TouchableOpacity
              style={styles.cancel}
              activeOpacity={0.5}
              onPress={() => {
                setPhoto(undefined);
                navigation.navigate("Camera");
              }}
            >
              <Text style={{ color: "white", fontSize: 20, paddingTop: 25 }}>
                Retake
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomToolbar}>
          <TouchableOpacity
            style={styles.postButton}
            activeOpacity={0.5}
            onPress={() => console.log("create route where this should go")}
          >
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.topToolbar}>
        <View style={styles.toolBarOptContainer}>
          <TouchableOpacity
            style={styles.cancel}
            activeOpacity={0.5}
            onPress={() => {
              setPhoto(undefined);
              navigation.navigate("Feed");
            }}
          >
            <Text style={{ color: "white", fontSize: 21 }}> Cancel </Text>
          </TouchableOpacity>
          <View style={styles.optionsContainer}>
            <View style={styles.optionItems}>
              <TouchableOpacity
                style={styles.switchCam}
                activeOpacity={0.5}
                onPress={TakePicture}
              >
                <Ionicons
                  name="md-camera-reverse-outline"
                  size={55}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.antiFlash}
                activeOpacity={0.5}
                onPress={TakePicture}
              >
                <Ionicons name="flash-off-outline" size={50} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomToolbar}>
        <TouchableOpacity
          style={styles.circleButton}
          activeOpacity={0.5}
          onPress={TakePicture}
        >
          <Entypo name="circle" size={100} color="white" />
        </TouchableOpacity>
      </View>
    </Camera>
  );
}
