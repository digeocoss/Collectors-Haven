import {
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ExampleProfile } from "../../Data/Profile_Data";
import { styles } from "./ProfileStyles";
import { RootTabScreenProps } from "../../types";

export default function Profile({ navigation }: RootTabScreenProps<"Profile">) {
  const render = ({ item }) => {
    return (
      <View
        style={{
          borderRadius: 10,
          overflow: "hidden",
          maxWidth: 175,
          maxHeight: 175,
          marginBottom: 20,
        }}
      >
        <Image source={item.img} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#084F6D", paddingBottom: 80 }}>
      <FlatList
        columnWrapperStyle={{
          justifyContent: "space-evenly",
        }}
        ListHeaderComponent={() => (
          <View style={{ marginTop: 15, marginBottom: 15 }}>
            <View style={styles.iconHeader}>
              <Pressable
                onPress={() => {
                  console.log("open settings");
                }}
              >
                <Ionicons name="cog" size={50} color="white" />
              </Pressable>
              <Pressable
                onPress={() => {
                  console.log("open notifications");
                }}
              >
                <MaterialCommunityIcons
                  name="bell-circle-outline"
                  size={50}
                  color="white"
                />
              </Pressable>
            </View>
            {/* This will hold the Username, PFP, Follow and Message Button and Rating*/}
            <View style={styles.profileContainer}>
              {/* <Text style={styles.userName}>{ExampleProfile.userName}</Text> */}
              <Image
                style={styles.profilePicture}
                source={ExampleProfile.pfp.img}
              />
              <View>
                <Text style={styles.userName}> @user123 </Text>
                <Text style={styles.rating}> 4.7 Rating </Text>
              </View>
            </View>

            <View>
              <Text style={styles.urc}> Your Collection </Text>
            </View>
          </View>
        )}
        data={ExampleProfile.collections}
        keyExtractor={(item) => item.id}
        renderItem={render}
        numColumns={2}
      />
    </View>
  );
}
