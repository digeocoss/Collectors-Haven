import { Camera } from "expo-camera";
import * as MediaLibary from "expo-media-library";
import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackgroundComponent, Image  } from 'react-native';
import { useState, useRef, useEffect } from "react";
import { shareAsync } from "expo-sharing";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

export default function CameraUse () {
    let cameraRef = useRef();
    const [ AllowCamera, setAllowCamera ] = useState();
    const [ AllowMedia, setAllowMedia ] = useState();
    const [ photo, setPhoto ] = useState();
    
    useEffect(()=>{
        (async ()=>{
            const cameraPer = await Camera.requestCameraPermissionsAsync();
            const mediaPer = await MediaLibary.requestPermissionsAsync();
            setAllowCamera (cameraPer.status == "granted");
            setAllowMedia ( mediaPer.status == "granted");
        })();
    }, []);

    if (AllowCamera === undefined ) {
        return <Text> Requesting permision </Text>
    } else if(!AllowCamera) {
        return <Text>Permision pr camera not granted please change settings</Text>
    }
    
    let TakePicture = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        }

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto );
    };
        if (photo) {
            let sharePicture = () => {
                shareAsync(photo.uri).then(() => {
                    setPhoto(undefined);
                   
                })
            };

            let savePhoto = () => {
                MediaLibary.saveToLibraryAsync(photo.uri).then(() =>{
                    setPhoto(undefined)
                })
            };

            return(
                <SafeAreaView style={styles.container}>
                    <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64}} />
                    <Button title="share" onPress={sharePicture } /> 
                    {AllowMedia ? <Button title="save" onPress={savePhoto } /> : undefined }
                    <Button title="discard" onPress={()=> setPhoto(undefined ) } />
                </SafeAreaView>
            );
        }
    
    return (
        <Camera style={styles.container} ref={cameraRef }>
            <View style={styles.topSet} >
            <TouchableOpacity style={styles.flash} activeOpacity={0.5} onPress={TakePicture}>
            <Ionicons name="flash-outline" size={50} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.antiFlash} activeOpacity={0.5} onPress={TakePicture}>
            <Ionicons name="flash-off-outline" size={50} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.swichCam} activeOpacity={0.5} onPress={TakePicture}>
            <Ionicons name="md-camera-reverse-outline" size={75} color="white" />
            </TouchableOpacity>
            </View>
    <View style={styles.SeparatorLine} />

        <View style={ styles.buttonContainer }>
          {/* <Button color="green" title="Take picture" onPress={TakePicture}/> */}
          <TouchableOpacity style={styles.circleBut} activeOpacity={0.5} onPress={TakePicture}>
        <Entypo name="circle" size={100} color="white" />
        <View style={styles.SeparatorLine} />
        </TouchableOpacity> 
        </View>
        </Camera>
      );
}



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    BackgroundColor: '#fff',
    alingSelf: 'flex-end',
    color: "red",
},
preview: {
    alignSelf: 'stretch',
    flex: 1
},
TextStyle: {
    color : "white"
},
circleBut: {
    // position: "absolute",
    marginTop: 0,
    marginBottom: 0,
    alignSelf: "center",
},
topSet: {
    padding: "4%",
    backgroundColor: "#084F6D",
    width: 400,
    height: 120,
     marginBottom: 525,
    //  marginTop: 150,
    flexDirection: "row"
},
flash: {
    marginRight: 10,
},
antiFlash: {
    // marginRight: 30
},
swichCam: {
    marginLeft: 35
},

})


