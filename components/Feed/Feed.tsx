import { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FlatList, ScrollView } from "react-native";
import { styles } from "./FeedStyles";
// import data
import { CollectibleData } from "../../Data/FakeCollections";
import { FilterButtons } from "../../constants/FilterButtonData";
import { RootTabScreenProps } from "../../types";
import IData from "../../constants/interfaces/data.interface";
import { TouchableOpacity } from "react-native-gesture-handler";

const App = ({ navigation }: RootTabScreenProps<"Feed">) => {
  const [filter, setFilter] = useState("All");

  // Each collections picture
  const renderItem = (item: any) => {
    return (
      <View key={item.id}>
        <TouchableOpacity onPress={() => navigation.navigate("SinglePage")}>
        <Image style={styles.imageitem} source={item.img} />
        </TouchableOpacity>
      </View>
    );
  };

  const filterData = (data: IData[]) => {
    const newArray = data;
    return newArray.filter((item) => {
      if (filter === "All") return true;
      return item.type === filter;
    });
  };

  // Filter Buttons
  const renderButtons = (item: any) => {
    return (
      <View key={item.id}>
        <TouchableOpacity
          style={{
            backgroundColor: filter === item.title ? "#084F6D" : "white",
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 30,
            paddingRight: 10,
            paddingLeft: 10,
            margin: 5,
          }}
          onPress={() => {
            setFilter(item.title);
          }}
        >
          <Text
            style={
              (styles.sortCatText,
              {
                color: filter === item.title ? "white" : "black",
                fontSize: 20,
              })
            }
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.collectionsContainer}>
        <Text style={styles.headerText}> Featured Collections </Text>
      </View>

      <View style={styles.featuredCollections}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filterData(CollectibleData).map((item) => renderItem(item))}
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
