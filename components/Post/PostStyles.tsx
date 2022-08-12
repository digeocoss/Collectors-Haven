import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084F6D",
  },
  header: {
    marginTop: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: "10%",
    marginLeft: "3%",
    marginRight: "20%",
  },
  backIcon: {
    alignSelf: "flex-start",
    marginBottom: 50,
  },
  pictureUploadContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
  },
  uploadedPicture: {
    marginRight: 10,
  },
  addAnotherPicture: {
    backgroundColor: "#084F6D",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    marginLeft: 10,
    width: 176,
    height: 178,
    justifyContent: "center",
    alignItems: "center",
  },
  plusIcon: {
    marginTop: 20,
    color: "#fff",
  },
  miniHeading: {
    flexDirection: "row",
    margin: 2,
  },
  formContainer: {
    width: 350,
    height: 400,
    alignSelf: "center",
    marginTop: "30%",
  },
  formHeaderContainer: {},
  formHeader: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  formFieldEstimatedWorth: {
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 4
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
    borderRadius: 4
  },
  formFieldDescription: {
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: 20,
    textAlign: "left",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 10,
    borderRadius: 4
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
  inputContainer: {
    flexDirection: "column",
    marginTop: 18
  },
  labelContainer: {
    backgroundColor: "#084F6D",
    position: 'absolute',
    left: 10,
    top: -9,
    zIndex: 2
  },
  label: {
    color: '#fff',
  },
});
