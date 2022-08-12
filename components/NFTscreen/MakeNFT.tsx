import { Ionicons, AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { ExampleProfile } from "../../Data/Profile_Data";
import { RootStackScreenProps } from "../../types";
import { Formik } from "formik";
import { styles } from "./MakeNFTStyles";
import { INFTForm } from "../../constants/interfaces/form.interface";

export default function MakeNFT({
  navigation,
}: RootStackScreenProps<"SinglePage">) {
  const [loading, setLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const initialValues: INFTForm = {
    yearBought: "2022",
    collectibleName: "Chainsawman Vol. 1 - 5",
    serialNumber: "96YC6",
    otherInformation: "Limited edition from Japan.",
  };

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsFinished(true);
    }, 3000);
  };

  const submitData = () => {};

  const form = () => (
    <View style={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          resetForm({ values: initialValues });
          // navigation.navigate("ConfirmationPage", { data: values });
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Year</Text>
              </View>
              <TextInput
                style={styles.formFieldTitle}
                onChangeText={handleChange("yearBought")}
                onBlur={handleBlur("yearBought")}
                value={values.yearBought}
                placeholder={"Year Bought"}
                placeholderTextColor={"#d3d3d3"}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Name of Collectible</Text>
              </View>
              <TextInput
                style={styles.formFieldTitle}
                onChangeText={handleChange("collectibleName")}
                onBlur={handleBlur("collectibleName")}
                value={values.collectibleName}
                placeholder={"Name of Collectible"}
                placeholderTextColor={"#d3d3d3"}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Serial Number</Text>
              </View>
              <TextInput
                style={styles.formFieldDescription}
                onChangeText={handleChange("serialNumber")}
                onBlur={handleBlur("serialNumber")}
                value={values.serialNumber}
                placeholder={"Serial #"}
                placeholderTextColor={"#d3d3d3"}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Other Information</Text>
              </View>
              <TextInput
                style={styles.formFieldDescription}
                onChangeText={handleChange("otherInformation")}
                onBlur={handleBlur("otherInformation")}
                value={values.otherInformation}
                placeholder={"Information"}
                placeholderTextColor={"#d3d3d3"}
              />
            </View>
            <TouchableHighlight
              onPress={() => {
                startLoading();
              }}
              underlayColor="white"
            >
              <View style={styles.submitButton}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontSize: 25,
                  }}
                >
                  Mint
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        )}
      </Formik>
    </View>
  );

  if (loading) {
    return (
      <>
        <ActivityIndicator
          style={{
            backgroundColor: "#084F6D",
            opacity: 0.6,
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
          size="large"
          color="#fff"
        />
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 200,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 25 }}>Minting NFT...</Text>
        </View>
      </>
    );
  }

  if (isFinished) {
    return (
      <View
        style={{
          backgroundColor: "#084F6D",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <View style={{backgroundColor: 'red', width: 10, height: '100%', zIndex: 3, position: 'absolute'}}></View> */}
        <Ionicons name="checkmark-circle" size={200} color="white" />
        <Text style={{ color: "white", fontSize: 25, marginBottom: 30 }}>
          Collectible Minted
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: "white", padding: 10, borderRadius: 10 }}
          onPress={() => {
            navigation.navigate("TradeTemp");
          }}
        >
          <Text style={{ textAlign: "center", color: "black", fontSize: 20 }}>
            Go To Profile
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="ios-chevron-back" size={40} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>NFT Creation</Text>
      </View>
      <View style={styles.pictureContainer}>
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
            size={50}
            color="white"
          />
          <AntDesign name="rightcircle" size={50} color="white" />
        </View>
      </View>
      {form()}
    </View>
  );
}
