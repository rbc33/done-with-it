import React, { useState } from "react";
import { FlatList, ImageSourcePropType } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import logger from "../utility/logger";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/richard.jpg"),
  },
  {
    id: 2,
    title: "T1",
    description: "D1",
    image: require("../assets/richard.jpg"),
  },
];
const refreshMessages = [
  ...initialMessages,
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/richard.jpg"),
  },
];
export interface Message {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}
interface Props {
  messages: Message[];
}
const MessagesScreem = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [refreshing] = useState(false);
  const handleDelete = (message: Message) => {
    // Delete Message from Messages const newMessages = messages.filter(m => m.id !== message.id); setMessages(newMessages);
    setMessages(messages.filter((m) => m.id !== message.id));
    // Call the server
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => logger.log("tap", item)}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRighhtActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          console.log("Callling BackEnd...");
          setMessages(refreshMessages);
        }}
      />
    </Screen>
  );
};

export default MessagesScreem;
