import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084F6D",
    justifyContent: "center",
  },
  mainContentContainer: {
    marginTop: "10%",
  },
  confirmedContainer: {
    alignItems: "center",
  },
  confirmedText: {
    color: "#fff",
    fontSize: 55,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  itemDescriptionContainer: {
    paddingTop: 15,
    alignItems: "center",
  },
  itemTitle: {
    color: "#fff",
    paddingBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  itemDescription: { color: "#fff", fontSize: 20 },
  backHome: {
    alignItems: "center",
    marginTop: 40,
    justifyContent: "center",
  },
});

export { styles };
