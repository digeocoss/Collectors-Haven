import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TextInputComponent,
} from "react-native";
import { useForm, Controller, SubmitErrorHandler } from "react-hook-form";
import { IForm } from "../../constants/interfaces/form.interface";

export default function PostForm() {
  const [formFields, setFormFields] = useState<IForm>({
    estimatedValue: 0,
    title: "",
    description: "",
    img: null,
  });

  const { handleSubmit, control } = useForm();

  const onSubmit = (data: IForm) => {
    console.log(data);
  };

  //   const onError: SubmitErrorHandler<IForm> = (errors, e) => {
  //     return console.log(errors)
  //   }

  return (
    <View>
      <Text>Hello from PostForm.tsx</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur } }) => (
            <TextInput
              value={`${formFields.estimatedValue}`}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="email"
          rules={{ required: true }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur } }) => (
            <TextInput
              value={formFields.title}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="email"
          rules={{ required: true }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur } }) => (
            <TextInput
              value={formFields.description}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="email"
          rules={{ required: true }}
        />
        <Button title="Button" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
