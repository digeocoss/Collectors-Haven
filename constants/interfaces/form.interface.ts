import { ImageProps } from "react-native";

export interface IForm {
  estimatedValue: string;
  title: string;
  description: string;
  img: string;
}

export interface INFTForm {
  yearBought: string;
  collectibleName: string;
  serialNumber: string;
  otherInformation: string;
}
