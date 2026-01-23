import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "../styles/ChatMessage.css";

export function ChatMessage({ sender, message }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} alt="" className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>

      {sender === "user" && (
        <img src={UserProfileImage} alt="" className="chat-message-profile" />
      )}
    </div>
  );
}
