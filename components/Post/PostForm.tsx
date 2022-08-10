import React, { useState } from "react";
import { Text, View, TextInput, Button, Touchable } from "react-native";
import { Form, Formik } from "formik";
import { IForm } from "../../constants/interfaces/form.interface";
import { styles } from "./PostStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableHighlight } from "@gorhom/bottom-sheet";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function PostForm(props: any) {
  const { navigation } = props;
  const initialValues: IForm = {
    estimatedValue: "10.00",
    title: "Collection/item title",
    description: "Description of the item",
    img: `data:image/gif;base64,${props.image}`,
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          resetForm({ values: initialValues });
          navigation.navigate("ConfirmationPage", { data: values });
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              style={styles.formFieldEstimatedWorth}
              onChangeText={handleChange("estimatedValue")}
              onBlur={handleBlur("estimatedValue")}
              value={values.estimatedValue}
              placeholder={"0.00"}
              placeholderTextColor={"#d3d3d3"}
            />
            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Title</Text>
              </View>
              <TextInput
                style={styles.formFieldTitle}
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
                placeholder={"Title"}
                placeholderTextColor={"#d3d3d3"}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Description</Text>
              </View>
              <TextInput
                style={styles.formFieldDescription}
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
                multiline={true}
                placeholder={"Description"}
                placeholderTextColor={"#d3d3d3"}
              />
            </View>
            <TouchableHighlight
              onPress={() => {
                handleSubmit();
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
                  Submit
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        )}
      </Formik>
    </View>
  );
}
