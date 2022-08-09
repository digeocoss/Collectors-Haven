import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084F6D",
  },
  header: {
    marginTop: "20%",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: "10%",
    marginLeft: "3%",
  },
  backIcon: {
    alignSelf: "flex-start",
  },
  pictureUploadContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
  },
  uploadedPicture: {
    backgroundColor: "blue",
    marginRight: 10,
  },
  addAnotherPicture: { backgroundColor: "green", marginLeft: 10 },
  formContainer: {
    backgroundColor: "red",
    width: 350,
    height: 400,
    alignSelf: "center",
    marginTop: "5%",
  },
  formHeaderContainer: { backgroundColor: "pink" },
  formHeader: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
