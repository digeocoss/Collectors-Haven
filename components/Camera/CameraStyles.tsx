import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    BackgroundColor: "#fff",
    alingSelf: "flex-end",
    color: "red",
  },
  preview: {
    height: winHeight,
    width: winWidth,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  TextStyle: {
    color: "white",
  },
  circleButton: {
    textAlign: "center",
  },
  topSet: {
    padding: "4%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: 400,
    height: 120,
    marginBottom: 525,
    flexDirection: "row",
  },
  cancel: {
    alignItems: "center",
    marginLeft: 20,
  },
  toolBarOptContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  optionItems: { flexDirection: "row", justifyContent: "space-between" },
  switchCam: { marginRight: 30 },
  antiFlash: { marginRight: 10 },
  topToolbar: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    top: 0,
    width: winWidth,
    position: "absolute",
    paddingTop: 50,
  },
  bottomToolbar: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    flexDirection: "row",
    justifyContent: "center",
    width: winWidth,
    position: "absolute",
    bottom: 0,
    padding: 20,
    paddingBottom: 40,
  },
  postButton: {},
  postButtonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 40,
    paddingRight: 20,
    paddingLeft: 20,
  },
  optionsContainer: {},
  postViewContainer: {
    flex: 1,
  },
});
