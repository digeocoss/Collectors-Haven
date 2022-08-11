import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084F6D",
  },
  headerContainer: {
    flexDirection: "row",

    marginTop: "20%",
    alignItems: "center",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    justifyContent: "center",
    marginHorizontal: "20%",
  },
  pictureContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backIcon: {
    alignSelf: "flex-start",
  },

  TradeThingContainer: {
    marginLeft: "5%",
  },
  tradeThing: {
    width: 230,
    height: 230,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 20,
    marginBottom: 10,
  },
  arowwsty: {
    justifyContent: "center",
    marginHorizontal: 30,
    marginRight: "15%",
  },
  formContainer: {
    padding: "5%",
  },
  formFieldEstimatedWorth: {
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: 30,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 15,
    borderRadius: 4,
  },
  inputContainer: {
    flexDirection: "column",
    marginTop: 10,
  },
  labelContainer: {
    backgroundColor: "#084F6D",
    position: "absolute",
    left: 10,
    top: -9,
    zIndex: 2,
  },
  label: {
    color: "#fff",
  },
  formFieldTitle: {
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: 20,
    textAlign: "left",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 10,
    marginBottom: 20,
    borderRadius: 4,
  },
  formFieldDescription: {
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: 20,
    textAlign: "left",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 10,
    borderRadius: 4,
  },
  submitButton: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 55,
    borderWidth: 3,
    borderRadius: 30,
    padding: 15,
  },
});

export { styles };
