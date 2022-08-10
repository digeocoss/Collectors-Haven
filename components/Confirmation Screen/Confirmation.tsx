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
  route,
}: RootStackScreenProps<"ConfirmationPage">) {
  const submission: any = route.params;

  return (
    <View style={styles.container}>
      <View >
        <View >
          <Image
            source={{ uri: submission.data.img }}
            style={{ height: 176, width: 178, borderRadius: 10 }}
          />
        </View>
      </View>
    </View>
  );
}
