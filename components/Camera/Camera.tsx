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

const { width: winWidth, height: winHeight } = Dimensions.get("window");

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
              {/* <Ionicons name="flash-outline" size={50} color="white" /> */}
              <Text style={{ color: "white", fontSize: 21 }}> retake </Text>
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
            {/* <Ionicons name="flash-outline" size={50} color="white" /> */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    BackgroundColor: "#fff",
    alingSelf: "flex-end",
    color: "red",
  },
  preview: {
    height: winHeight,
    width: winWidth,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  TextStyle: {
    color: "white",
  },
  circleButton: {
    textAlign: "center",
  },
  topSet: {
    padding: "4%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: 400,
    height: 120,
    marginBottom: 525,
    //  marginTop: 150,
    flexDirection: "row",
  },
  cancel: {
    alignItems: "center",
  },
  toolBarOptContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionItems: { flexDirection: "row", justifyContent: "space-between" },
  switchCam: {},
  antiFlash: {},
  topToolbar: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    top: 0,
    width: winWidth,
    position: "absolute",
    paddingTop: 40,
  },
  bottomToolbar: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    flexDirection: "row",
    justifyContent: "center",
    width: winWidth,
    position: "absolute",
    bottom: 0,
    padding: 20,
    paddingBottom: 40,
  },
  postButton: {
    color: "white",
    backgroundColor: "red",
    alignSelf: "center",
    fontSize: 40,
    paddingRight: 20,
    paddingLeft: 20,
  },
  optionsContainer: {},
  postViewContainer: {
    flex: 1,
  },
});
// {/* <Ionicons name="flash-outline" size={50} color="white" /> */}
