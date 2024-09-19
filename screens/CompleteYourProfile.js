import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Image,
  Button
} from "react-native";
import { useRef, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary } from "react-native-image-picker";
import { Picker } from "@react-native-picker/picker";

const CompleteYourProfile = () => {
  const navigation = useNavigation();

  const [createProfile, setCreateprofile] = useState({
    email: "",
    username: "",
    city: "",
    street: "",
    help: "",
  });
  const [imgUrl, setImgUrl] = useState("");
  const [selectHelp, setSelectHelp] = useState();

  // const openImageLibrary = () => {
  //   launchImageLibrary({ mediaType: "photo" }, (response) => {
  //     if (!response.didCancel) {
  //       setImgUrl(response.uri);
  //     }
  //   });
  //   console.log("clicked");
  // };

  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickerRef = useRef();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.back}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require("../assets/angleleft.png")} />
          </Pressable>
          <Text style={styles.backtitle}>Back</Text>
        </View>
        <Text style={styles.title}>Profile</Text>
        {/* <View style={styles.container}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View> */}
        <View style={styles.imgbutton}>
          <Pressable onPress={pickImage}>
            <Image source={require("../assets/camicon.jpeg")} style={styles.upload}/>
          </Pressable>
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={createProfile.username}
          onChangeText={(e) =>
            setCreateprofile({ ...createProfile, username: e })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Street"
          value={createProfile.street}
          onChangeText={(e) =>
            setCreateprofile({ ...createProfile, street: e })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={createProfile.city}
          onChangeText={(e) => setCreateprofile({ ...createProfile, city: e })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={createProfile.email}
          onChangeText={(e) => setCreateprofile({ ...createProfile, email: e })}
        />
        <View style={styles.pickerContainer}>
          <Picker
            ref={pickerRef}
            style={styles.picker}
            selectedValue={selectHelp}
            onValueChange={(itemValue, itemIndex) => setSelectHelp(itemValue)}
          >
            <Picker.Item
              style={styles.picker}
              label="medical"
              value="medical"
            />
            <Picker.Item
              style={styles.picker}
              label="technical"
              value="technical"
            />
            <Picker.Item
              style={styles.picker}
              label="educational"
              value="educational"
            />
            <Picker.Item
              style={styles.picker}
              label="financial"
              value="financial"
            />
          </Picker>
        </View>
        <View style={styles.btncont}>
          <Pressable
            style={styles.cancelbutton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelbuttonText}>Cancel</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("MainContainer")}
            // onPress={()=>{console.log(createProfile)}}
          >
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 200,
  },
  backtitle: {
    fontSize: 16,
  },
  pickerContainer: {
    width: "100%",
    height: "7%",
    borderWidth: 2,
    borderColor: "#cccccc",
    borderRadius: 5,
    paddingHorizontal: "auto",
    marginBottom: 20,
    justifyContent: "center",
  },
  picker: {
    fontSize: 16,
    height: 40,
    color: "black",
  },
  upload: {
    height:100,
    width:100,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  imgbutton: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    borderRadius: 100,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    overflow: "hidden",
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 20,
  },
  back: {
    textAlign: "left",
    width: "100%",
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  backicon: {
    fontSize: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "black",
  },
  avatarimg: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: "7%",
    borderWidth: 2,
    paddingStart: 10,
    borderColor: "#cccccc",
    borderRadius: 5,
    paddingHorizontal: "auto",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "green",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
  },
  cancelbutton: {
    backgroundColor: "transparent",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 2,
    shadowColor: "green",
    borderColor: "green",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelbuttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  btncont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 30,
  },
});

export default CompleteYourProfile;
