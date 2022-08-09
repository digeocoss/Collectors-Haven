import { ImageProps } from "react-native";

export interface IForm {
  estimatedValue: number;
  title: string;
  description: string;
  img: ImageProps["source"] | null;
}
