import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Pressable,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";
import GmailComponent from "../components/gmail";

const SignUp = ({ navigation }) => {
  const [signupdata, setSignupdata] = useState({
    Username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  // const [Username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmpassword, setconfirmPassword] = useState("");
  // const [email, setEmail] = useState("");
  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("everything is ok");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot");
  };
  const onSignUpPressed = () => {
    console.warn("Create account");
  };
  const onSignInFacebook = () => {
    console.warn("Facebook");
  };

  const sendData = async() =>{
    console.log(signupdata)    
    let result = await fetch('link of backend ',{
        method: "POST",
        body: JSON.stringify(signupdata),
        headers:{
            "Content-Type": "application/json"
        }
    })
    setRegdata({
      Username:'',
      email:'',
      password:'',
      confirmpassword:''
    })
}

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.signIn, styles.parentFlexBox]}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sign Up with your email</Text>
        </View>
        <CustomInput
          placeholder="Username"
          value={signupdata.Username}
          setValue={(e) => setSignupdata({ ...signupdata, Username: e })}
        />
        <CustomInput
          placeholder="Enter your Email"
          value={signupdata.email}
          setValue={(e) => setSignupdata({ ...signupdata, email: e })}
        />
        <CustomInput
          placeholder="Enter your password"
          value={signupdata.password}
          setValue={(e) => setSignupdata({ ...signupdata, password: e })}
        />
        <CustomInput
          placeholder="Confirm your password"
          value={signupdata.confirmpassword}
          setValue={(e) => setSignupdata({ ...signupdata, confirmpassword: e })}
        />

        <TouchableHighlight
          style={[styles.ctaprimary, styles.titleFlexBox]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => {
            console.log(signupdata);
          }}

        >
          <Text style={[styles.createAnAccount, styles.title1Typo]}>
            Sign Up
          </Text>
        </TouchableHighlight>

        <View style={styles.orParent}>
          <Text style={[styles.or, styles.orTypo]}>or</Text>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
        </View>
        <GmailComponent />
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.orTypo}>
            <Text style={styles.dontHaveAn}>{`Already have an account? `}</Text>
            <Text style={styles.signUp}>Sign In</Text>
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign:'center',
    justifyContent:'center',
    flex: 1,
    marginTop:30,
    alignItems: "center",
    padding: 20,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "transparent",
  },
  backButtonText: {
    color: "#414141",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  header: {
    display:'flex',
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    marginBottom: 20,
  },
  title: {
    top: 20,
    margin: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    fontFamily: FontFamily.subheadLgSHLgMedium,
  },
  or: {
    color: Color.baseColorInfoColor,
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    width: 157,
    borderTopWidth: 1,
    backgroundColor: Color.baseColorInfoColor,
    borderColor: Color.baseColorInfoColor,
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 187,
  },
  orParent: {
    width: 343,
    height: 24,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  orTypo: {
    lineHeight: 24,
    fontSize: 16, // Adjust the font size as needed
    fontWeight: "500",
  },
  orTypo: {
    top: 15,
    lineHeight: 24,
    textAlign: "center",
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  dontHaveAn: {
    color: Color.textAndIconContentTertiary,
  },
  signUp: {
    color: Color.primary700,
  },
  ctaprimary: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primary700,
    width: 340,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    zIndex: 1,
    flexDirection: "row",
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUp;
