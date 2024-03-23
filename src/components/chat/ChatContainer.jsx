import { useDispatch, useSelector } from "react-redux";
import ChatHeader from "./header/ChatHeader.jsx";
import ChatMessages from "./messages/ChatMessages.jsx";
import { useEffect } from "react";
import { getConversationMessages } from "../../app/reducers/chatSlice.js";
import ChatActions from "./actions/ChatActions.jsx";

export default function ChatContainer() {
  const dispatch = useDispatch();
  const { activeConversation, messages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { token } = user;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const values = {
    token,
    convo_id: activeConversation?._id,
  };

  useEffect(() => {
    if (activeConversation?._id) {
      dispatch(getConversationMessages(values));
    }
  }, [activeConversation, dispatch, values]);

  return (
    <div className="relative rounded-tr-lg w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      <div>
        <ChatHeader />

        <ChatMessages />

        <ChatActions />
      </div>
    </div>
  );
}
