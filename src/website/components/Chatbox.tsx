import React, { useState } from "react";
import Draggable from "react-draggable";

const colorsWithComplementaryPairs = {
  white: "black",
  black: "white",
  red: "green",
  green: "red",
  blue: "orange",
  orange: "blue",
  yellow: "purple",
  purple: "yellow",
  pink: "gray",
  gray: "pink",
  cyan: "maroon",
  maroon: "cyan",
  teal: "brown",
  brown: "teal",
  navy: "beige",
  beige: "navy",
  coral: "olive",
  olive: "coral",
  lime: "violet",
  violet: "lime",
  gold: "silver",
  silver: "gold",
};

const fashionCategories = [
  "Streetwear",
  "Old Money",
  "Summer",
  "Winter",
  "All Items",
];

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ user?: string; bot?: string }[]>([]);
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState<string | null>(null);

  const handleToggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { user: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    let botMessage: { bot?: string } = { bot: "Could you provide more details?" };

    // User name greeting
    if (!userName) {
      setUserName(input);
      botMessage = {
        bot: `Hi ${input}, welcome! You can ask me about:\n1. Fashion categories (${fashionCategories.join(
          ", "
        )}).\n2. Outfit ideas.\n3. Color matching for your outfits.`,
      };
    }
    // Handle fashion categories
    else if (fashionCategories.some((cat) => input.toLowerCase().includes(cat.toLowerCase()))) {
      botMessage = { bot: `The ${input} collection is amazing! Would you like to explore more items in this category?` };
    }
    // Color matching
    else if (Object.keys(colorsWithComplementaryPairs).some((color) => input.toLowerCase().includes(color))) {
      const color = Object.keys(colorsWithComplementaryPairs).find((color) =>
        input.toLowerCase().includes(color)
      );
      const complementary = colorsWithComplementaryPairs[color!];
      botMessage = { bot: `${color} goes well with ${complementary}. A perfect choice for your outfit!` };
    }
    // Generic outfit suggestions
    else if (input.toLowerCase().includes("suggest outfit")) {
      botMessage = { bot: "How about pairing a white shirt with navy pants and brown loafers? It's a timeless combination!" };
    }
    // Greetings
    else if (input.toLowerCase().includes("hello") || input.toLowerCase().includes("hi")) {
      botMessage = { bot: `Hello, ${userName || "Fashion Lover"}! How can I assist you today?` };
    }

    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setInput("");
  };

  return (
    <Draggable>
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: isOpen ? "300px" : "60px",
          height: isOpen ? "400px" : "60px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
          overflow: "hidden",
        }}
      >
        {isOpen ? (
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div
              style={{
                backgroundColor: "#003153",
                color: "#fff",
                padding: "5px 10px",
                fontWeight: "bold",
                textAlign: "center",
                userSelect: "none",
              }}
            >
              Chat with us
              <button
                onClick={handleToggleChat}
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "none",
                  float: "right",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
            <div style={{ flex: 1, padding: 10, overflowY: "auto" }}>
              {messages.map((msg, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  {msg.user && (
                    <div style={{ textAlign: "right", color: "#333" }}>
                      <strong>You:</strong> {msg.user}
                    </div>
                  )}
                  {msg.bot && (
                    <div style={{ textAlign: "left", color: "#003153" }}>
                      <strong>Bot:</strong> {msg.bot}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", borderTop: "1px solid #ccc" }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={userName ? "Type a message..." : "What's your name?"}
                style={{ flex: 1, padding: "8px", border: "none", outline: "none" }}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                style={{
                  padding: "8px",
                  backgroundColor: "#003153",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleToggleChat}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#003153",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              fontSize: "1.5em",
            }}
          >
            💬
          </button>
        )}
      </div>
    </Draggable>
  );
};

export default ChatBox;
