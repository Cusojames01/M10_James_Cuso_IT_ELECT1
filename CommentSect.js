import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function CommentSect() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    // Add an initial message to show the structure
    {
      id: "initial",
      text: "Hello",
      // Assuming 'Profilepic.jpg' is the correct image for the user who is being replied to
      avatar: require("./assets/Profilepic.jpg"), 
    },
  ]);

  const handleAddComment = () => {
    if (comment.trim() === "") return;

    const newComment = {
      id: Date.now().toString(),
      text: comment,
      // For the comment you add, you might want a different avatar
      avatar: require("./assets/Profilepic.jpg"), 
    };

    // New comments should appear at the top in a typical chat/comment view,
    // which the current code does, so we keep it.
    setComments([newComment, ...comments]); 
    setComment("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.commentContainer}>
      {/* Assuming the first item in the comments array is the user's avatar */}
      <Image source={item.avatar} style={styles.avatar} /> 
      <View style={styles.commentBox}>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container} // Apply flex: 1 here
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // Tweak this value if needed
    >
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        // Setting inverted so new comments appear at the bottom like a chat,
        // and the input stays at the bottom. The list content needs adjustment.
        // I will keep it non-inverted for a typical comment section where new comments are at the top.
        // contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }} // Use for chat view
        // contentContainerStyle={{ paddingBottom: 100 }} // Keep for space above input
      />

      {/* The input container is now inside the KeyboardAvoidingView, 
          and its 'position: absolute' is removed to allow KAV to manage its position. */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a comment..."
          value={comment}
          onChangeText={setComment}
          multiline={false} // Prevents multi-line input on some platforms
        />
        <TouchableOpacity onPress={handleAddComment} style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2, // Must have flex: 1 for KeyboardAvoidingView to work
    backgroundColor: "#fff",
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 6,
    marginHorizontal: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginTop: 0,
  },
  commentBox: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 10,
    maxWidth: "85%",
  },
  commentText: {
    fontSize: 15,
  },
  // Key changes here: Removed 'position: absolute' and 'marginBottom: 20'
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 8,
    // Add bottom padding to ensure it's not cut off by system navigation bar on Android
    paddingBottom: Platform.OS === 'android' ? 10 : 8, 
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    minHeight: 50, // Ensure minimum height
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});