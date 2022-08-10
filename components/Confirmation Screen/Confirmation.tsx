import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { RootStackScreenProps } from "../../types";
import { styles } from "./ConfirmationStyles";

export default function Confirmation({
  navigation,
  route,
}: RootStackScreenProps<"ConfirmationPage">) {
  const submission: any = route.params;
  console.log(submission);

  return (
    <View style={styles.container}>
      <View style={styles.mainContentContainer}>
        <View style={styles.confirmedContainer}>
          <View>
            <AntDesign name="checkcircleo" size={200} color="white" />
          </View>
          <View>
            <Text style={styles.confirmedText}>Posted!</Text>
          </View>
          <View>
            <Image
              source={{ uri: submission.data.img }}
              style={{ height: 176, width: 178, borderRadius: 10 }}
            />
          </View>
        </View>
        <View style={styles.itemDescriptionContainer}>
          <View>
            <Text style={styles.itemTitle}>{submission.data.title}</Text>
          </View>
          <View>
            <Text style={styles.itemDescription}>
              {submission.data.description}
            </Text>
          </View>
        </View>
        <View style={styles.backHome}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              width: 150,
              height: 25,
            }}
            onPress={() => {
              navigation.navigate("Feed");
            }}
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}> Go Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
