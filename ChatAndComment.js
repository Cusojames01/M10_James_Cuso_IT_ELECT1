import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";

export default function ChatAndComment() {
  const [chatInput, setChatInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [chats, setChats] = useState([]);
  const [comments, setComments] = useState([]);

  const sendChat = () => {
    if (chatInput.trim() !== "") {
      setChats([...chats, { id: Date.now().toString(), text: chatInput }]);
      setChatInput("");
    }
  };

  const addComment = () => {
    if (commentInput.trim() !== "") {
      setComments([...comments, { id: Date.now().toString(), text: commentInput }]);
      setCommentInput("");
    }
  };

  return (
    <View style={styles.container}>
    
      <Text style={styles.header}> Chat Box</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.message}>• {item.text}</Text>
        )}
      />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={chatInput}
          onChangeText={setChatInput}
        />
      
        
                <TouchableOpacity style={styles.button} onPress={sendChat}>
  <Text style={styles.button}>Send</Text>
</TouchableOpacity>
      </View>


      <Text style={styles.header}> Comment Section</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.message}>- {item.text}</Text>
        )}
      />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Write a comment..."
          value={commentInput}
          onChangeText={setCommentInput}
        />
      
        
                <TouchableOpacity style={styles.button} onPress={addComment}>
  <Text style={styles.button}>Post</Text>
</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 30,
    width: 300,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  message: {
    fontSize: 16,
    paddingVertical: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginRight: 8,
    marginBottom: 100,
    borderRadius: 5,
    backgroundColor: "#fff",
  },button:{
    marginBottom:100,
    borderRadius: 4,
    height:35,
    width: 50,

    textAlign: 'center',
    backgroundColor: 'skyblue',
  },
});