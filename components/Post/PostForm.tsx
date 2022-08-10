import React, { useState } from "react";
import { Text, View, TextInput, Button, Touchable } from "react-native";
import { Form, Formik } from "formik";
import { IForm } from "../../constants/interfaces/form.interface";
import { styles } from "./PostStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableHighlight } from "@gorhom/bottom-sheet";

export default function PostForm(props: any) {
  console.log(props.image);
  const initialValues: IForm = {
    estimatedValue: "",
    title: "",
    description: "",
    img: `data:image/gif;base64,${props.image}`,
  };

  return (
    <View>
      <View>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm({ values: initialValues });
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
              <TextInput
                style={styles.formFieldTitle}
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
                placeholder={"Title"}
                placeholderTextColor={"#d3d3d3"}
              />
              <TextInput
                style={styles.formFieldDescription}
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
                multiline={true}
                placeholder={"Description"}
                placeholderTextColor={"#d3d3d3"}
              />

              <TouchableHighlight onPress={handleSubmit} underlayColor="white">
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
              {/* <Button onPress={handleSubmit} title="Submit" /> */}
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
