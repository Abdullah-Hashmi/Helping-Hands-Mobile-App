import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Image,
} from "react-native";

const HelpCenter = ({ navigation }) => {
  const [helpType, setHelpType] = useState("");
  const [helpDescription, setHelpDescription] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleHelpTypeChange = (text) => {
    setHelpType(text);
  };

  const handleHelpDescriptionChange = (text) => {
    setHelpDescription(text);
  };

  const handleSubmit = () => {
    console.log(helpDescription);
    console.log(helpType);
    setHelpDescription(""), setHelpType("");
    if (helpDescription && helpType) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setHelpType("");
        setHelpDescription("");
      }, 5000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../assets/angleleft.png")} />
        </Pressable>
        <Text style={styles.backtitle}>Back</Text>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingtitle}>Enter Help Information</Text>
      </View>
      <TextInput
        placeholder="Help Type"
        style={styles.input}
        value={helpType}
        onChangeText={handleHelpTypeChange}
      />
      <TextInput
        placeholder="Describe Your Help!"
        style={styles.inputDes}
        value={helpDescription}
        onChangeText={handleHelpDescriptionChange}
        multiline={true}
      />
      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
      {showPopup && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>Form submitted successfully!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  heading: {
    marginVertical: 30,
  },
  headingtitle: {
    fontSize: 24,
    color: "black",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontFamily: "Roboto",
  },
  input: {
    height: 60,
    width: "95%",
    marginTop: 30,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
  },
  inputDes: {
    height: 120,
    width: "95%",
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#55AF6E",
    width: "95%",
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
  popup: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  popupText: {
    color: "#ffffff",
    height: 20,
  },
});

export default HelpCenter;
