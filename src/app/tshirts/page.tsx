"use client";
import { useState, useEffect } from "react";

interface Message {
  id: number;
  message: string;
}

export default function Index() {
  let [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/shop")
      .then((res) => res.json())
      .then((data: Message[]) => {
        setMessages(data);
      });
  }, []);

  return (
    <ul>
      {messages &&
        messages.map((message) => <li key={message.id}>{message.message}</li>)}
    </ul>
  );
}
