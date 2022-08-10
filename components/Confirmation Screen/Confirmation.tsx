import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { RootStackScreenProps } from "../../types";
import { styles } from "./ConfirmationStyles";

export default function Confirmation({
  navigation,
}: RootStackScreenProps<"ConfirmationPage">) {
  return (
    <View style={styles.container}>
      <Text>Hello from Confirmation</Text>;
    </View>
  );
}
