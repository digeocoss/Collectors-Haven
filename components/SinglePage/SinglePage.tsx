import { View, Text, Pressable, Image, FlatList } from "react-native";
import { styles } from "./SinglePageStyle";
import { ExampleProfile } from "../../Data/Profile_Data";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef, useMemo, useCallback } from "react";
import { AntDesign } from "@expo/vector-icons";
import { CollectibleData } from "../../Data/FakeCollections.js";
import {
  RootStackParamList,
  RootStackScreenProps,
  RootTabParamList,
  RootTabScreenProps,
} from "../../types";

export default function SinglePage({
  navigation,
}: RootStackScreenProps<"SinglePage">) {
  const bottomSheetRef = useRef(BottomSheet);

  const snapPoints = useMemo(() => ["1%", "75%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("HandleSheetChanges", index);
  });

  const open = () => {
    bottomSheetRef.current.snapToIndex(1);
  };

  const close = () => {
    bottomSheetRef.current.snapToIndex(0);
  };

  const render = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: "blue",
          borderRadius: 20,
          overflow: "hidden",
          width: 170,
          height: 170,
          borderStyle: "solid",
          borderColor: "red",
          margin: 10,
        }}
      >
        <Image source={item.img} />
      </View>
    );
  };

  const bottomSheet = () => (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      handleStyle={{ display: "none" }}
      backgroundStyle={{ backgroundColor: "white", top: 20 }}
      enablePanDownToClose
    >
      <View style={styles.tradeHeader}>
        <Text style={styles.yourCollection}>Your Collection</Text>
      </View>
      <View style={[styles.tradeContainer]}>
        <View style={styles.collectionItems}>
          <FlatList
            columnWrapperStyle={{ justifyContent: "space-evenly" }}
            data={ExampleProfile.collections}
            keyExtractor={(item) => item.id}
            renderItem={render}
            numColumns={2}
          />
          <Pressable style={styles.offerButton} onPress={() => close()}>
            <Text style={styles.offerButtonText}>Offer </Text>
          </Pressable>
        </View>
      </View>
    </BottomSheet>
  );
  return (
    <View style={styles.container}>
      <View style={styles.arowAli}>
        <View style={styles.TradeThingContainer}>
          <Image
            style={styles.tradeThing}
            source={ExampleProfile.tradeItem.img}
          />
        </View>
        <View style={styles.arowwsty}>
          <AntDesign
            style={{ marginBottom: 40 }}
            name="leftcircle"
            size={40}
            color="white"
          />
          <AntDesign name="rightcircle" size={40} color="white" />
        </View>
      </View>
      <Text style={styles.ooo}>ooo</Text>
      <View>
        <View style={styles.profileContainer}>
          <View style={styles.pfpImageContainer}>
            <Image
              style={styles.profilePicture}
              source={ExampleProfile.pfp.img}
            />
          </View>
          <View style={styles.userRating}>
            <Text style={styles.proText}>@user123</Text>
            <Text style={styles.rat}>4.7 Rating</Text>
          </View>
        </View>
        <Text style={styles.itemTitle}>ChainSaw Man Vol.1 manga book</Text>
        <Text style={styles.itemDis}>Fresh from barns and noble</Text>
      </View>
      <View style={styles.space}>
        <Pressable style={styles.tradeBut} onPress={() => open()}>
          <Text style={{ fontSize: 30 }}> Trade </Text>
        </Pressable>
        <Pressable style={styles.tradeBut} onPress={() => open()}>
          <Text style={{ fontSize: 30 }}> Buy </Text>
        </Pressable>
      </View>
      <Pressable style={styles.buyTradeBut} onPress={() => open()}>
        <Text style={{ fontSize: 30, marginLeft: 5, marginRight: 2 }}>
          Trade & Buy
        </Text>
      </Pressable>

      {bottomSheet()}
    </View>
  );
}
