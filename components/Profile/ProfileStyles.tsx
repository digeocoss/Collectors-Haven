import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084F6D",
  },
  iconHeader: {
    padding: 5,
    marginTop: "13%",
    marginLeft: "2%",
    marginRight: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileContainer: {
    alignContent: "center",
    alignItems: "center",
    marginTop: -30,
    marginBottom: 30,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 200,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    color: "white",
    marginTop: "2%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  rating: {
    color: "white",
    marginTop: "2%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  // TODO: Figure out a way to make the buttons the same
  // TODO: Add font style
  messageButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    borderRadius: 30,
    textAlign: "center",
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: "10%",
  },
  messageText: {
    fontSize: 30,
    textAlign: "center",
  },
  urc: {
    color: "white",
    marginTop: "2%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 35,
  },
  // collection start
  myCollectionContainer: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  // imgSize: {
  //   height: 50,
  //   width: 50
  // }
});

export { styles };
