import { getAssetsAsync } from "expo-media-library";
import { View, Text, Image, Button, Pressable } from "react-native";
import { ExampleProfile } from "../../Data/Profile_Data";
// Import the stylesheet
import { styles } from "./Styles";

const Trades = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <View style={styles.userNameContainer}>
        <Image style={styles.pfp} source={ExampleProfile.pfp.img} />
        <Image
          resizeMode="strech"
          style={{ width: 270, position: "absolute", right: 0, marginTop: 10 }}
          source={require("../../assets/5card.png")}
        />
      </View>
      <Image
        style={styles.tradeImage}
        source={require("../../assets/ex6.jpeg")}
      />
      <View style={{ backgroundColor: "#f9c2ff" }}>
        <View>
          <Pressable style={styles.button}>
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 200,
                marginTop: 50,
                marginBottom: 10,
              }}
            >
              <Text style={styles.text}> Buy </Text>
            </View>
          </Pressable>
          <Image
            style={styles.tradeImage}
            source={require("../../assets/ex7.jpeg")}
          />
          <Pressable style={styles.button}>
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 200,
                marginTop: 40,
              }}
            >
              <Text style={styles.text}> Trade </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Trades;
