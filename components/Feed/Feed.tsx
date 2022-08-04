import { Text, View, Image, Pressable } from "react-native";
import { FlatList, ScrollView } from "react-native";
import { styles } from "./FeedStyles";
// import data
import { CollectibleData } from "../../Data/FakeCollections";
import { FilterButtons } from "../../constants/FilterButtonData";
import { RootTabScreenProps } from "../../types";

// Each collections picture
const renderItem = (item: any) => (
  <View key={item.id}>
    <Image style={styles.imageitem} source={item.img} />
  </View>
);

// Filter Buttons
const renderButtons = (item: any) => (
  <View key={item.id}>
    <Pressable style={styles.sortCat}>
      <Text style={styles.sortCatText}>{item.title}</Text>
    </Pressable>
  </View>
);

const App = ({ navigation }: RootTabScreenProps<"Feed">) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.collectionsContainer}>
        <Text style={styles.headerText}> Featured Collections </Text>
      </View>

      <View style={styles.featuredCollections}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CollectibleData.map((item) => renderItem(item))}
        </ScrollView>
      </View>
      <View style={styles.sortContainer}>
        <Text style={styles.headSort}> Sort By </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {FilterButtons.map((item) => renderButtons(item))}
        </ScrollView>
      </View>
      <View style={styles.mangaContainer}>
        <Text style={styles.headerText}> Manga </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CollectibleData.map((item) => renderItem(item))}
        </ScrollView>
      </View>

      <View style={styles.actionFiguresContainer}>
        <Text style={styles.headerText}> Action Figures </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CollectibleData.map((item) => renderItem(item))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default App;
