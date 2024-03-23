import ChatHeader from "./header/ChatHeader.jsx";

export default function ChatContainer() {
  return (
    <div className="relative rounded-tr-lg w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      <div>
        <ChatHeader />
      </div>
    </div>
  );
}
