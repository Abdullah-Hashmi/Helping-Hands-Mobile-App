import * as React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { Title } from "react-native-paper";

const Event1 = () => {
  const navigation = useNavigation();
  const [showFullEvent, setShowFullEvent] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const toggleShowFullEvent = (index) => {
    setSelectedEvent(events[index]);
    setShowFullEvent((prev) => !prev);
  };

  const events = [
    {
      id: "1",
      name: "Birthday Party",
      location: "123 Main Street",
      time: "2024-05",
      description: "Celebrating John's 30th birthday with friends and family.",
    },
    {
      id: "2",
      name: "Conference",
      location: "Convention Center",
      time: "2024-06",
      description:
        "Tech conference featuring talks and workshops on AI and machine learning.",
    },
    {
      id: "3",
      name: "Concert",
      location: "Arena Stadium",
      time: "2024-07",
      description: "Live performance by your favorite band.",
    },
    {
      id: "4",
      name: "Art Exhibition",
      location: "Art Gallery",
      time: "2024-08",
      description: "Display of contemporary art pieces from local artists.",
    },
    {
      id: "5",
      name: "Food Festival",
      location: "City Park",
      time: "2024-09",
      description: "Explore a variety of cuisines from around the world.",
    },
    {
      id: "6",
      name: "Movie Premiere",
      location: "Cinema Plaza",
      time: "2024-10",
      description: "Exclusive screening of the latest blockbuster movie.",
    },
    {
      id: "4",
      name: "Art Exhibition",
      location: "Art Gallery",
      time: "2024-08",
      description: "Display of contemporary art pieces from local artists.",
    },
    {
      id: "5",
      name: "Food Festival",
      location: "City Park",
      time: "2024-09",
      description: "Explore a variety of cuisines from around the world.",
    },
    {
      id: "6",
      name: "Movie Premiere",
      location: "Cinema Plaza",
      time: "2024-10",
      description: "Exclusive screening of the latest blockbuster movie.",
    },
  ];

  return (
    <ScrollView
      style={styles.event}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.eventScrollViewContent}
    >
      <View style={styles.Title}>
        <View style={styles.back}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require("../assets/angleleft.png")} />
          </Pressable>
          <Text style={styles.backtitle}>Back</Text>
        </View>
        <View style={styles.TitleHeading}>
          <Text style={styles.TitleText}>Events</Text>
        </View>
      </View>
      {events.map((events, index) => {
        return (
          <View style={styles.Event} key={index}>
            <View style={styles.Upper}>
              <View style={styles.Upperleft}>
                <View style={styles.circle}>
                  <Text style={styles.EventNum}>{events.id}</Text>
                </View>
                <View style={styles.leftsec}>
                  <Text style={styles.TitleEvent}>{events.name}</Text>
                  <View style={styles.location}>
                    <Text>📍{events.location}</Text>
                    <Pressable onPress={() => console.log("time")}>
                      <Text>(📅 {events.time} )</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
              <View>
                <Pressable
                  onPress={() => toggleShowFullEvent(index)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>
                    {showFullEvent ? "↑↓" : "↓↑"}
                  </Text>
                </Pressable>
              </View>
            </View>
            {showFullEvent &&
              selectedEvent &&
              selectedEvent.id === events.id && (
                <View style={styles.Lower}>
                  <Text style={styles.Text}>{selectedEvent.description}</Text>
                </View>
              )}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  leftsec: {
    display: "flex",
    flexDirection: "column",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  event: {
    backgroundColor: Color.shadesWhite,
    flex: 1,
  },
  back: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  TitleHeading: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },
  Title: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
  },
  TitleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  TitleTextBack: {
    fontSize: 36,
  },
  TitleEvent: {
    fontSize: 18,
    fontWeight: "bold",
  },
  Upper: {
    width: "100%",
    justifyContent: "space-between",
    gap: 10,
    borderRadius: 20,
    flexDirection: "row",
    padding: 3,
    alignItems: "center",
  },
  Upperleft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  Lower: {
    width: "100%",
    paddingLeft: "15%",
  },
  Event: {
    backgroundColor: "#DFEFEF",
    margin: 5,
    borderWidth: 2,
    borderColor: "#DFEFEF",
    borderRadius: 20,
    flexDirection: "col",
    padding: 10,
    marginHorizontal: 20,
    alignItems: "center",
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#BDFAE2",
    justifyContent: "center",
    alignItems: "center",
  },
  EventNum: {
    fontSize: 18,
    fontWeight: "bold",
  },
  EventName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  Text: {
    fontSize: 16,
  },
});

export default Event1;
