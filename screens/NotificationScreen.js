import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const notifications = [
  {
    id: "1",
    title: "New Message",
    message: "You have received a new message.",
    timestamp: "2 minutes ago",
  },
  {
    id: "2",
    title: "Update Available",
    message: "A new update is available for download.",
    timestamp: "1 hour ago",
  },
  {
    id: "3",
    title: "Friend Request",
    message: "You have received a friend request.",
    timestamp: "3 hours ago",
  },
];

const NotificationScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.notificationItem}
      onPress={() => {
        /* Handle notification press */
      }}
    >
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.notificationList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  notificationList: {
    padding: 16,
  },
  notificationItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  notificationContent: {
    flexDirection: "column",
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 16,
    marginBottom: 5,
  },
  notificationTimestamp: {
    fontSize: 14,
    color: "#888",
  },
});

export default NotificationScreen;
