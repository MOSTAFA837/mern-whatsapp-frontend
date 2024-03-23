import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect } from "react";
import { getConversations } from "../app/reducers/chatSlice";
import WhatsappHome from "../components/chat/welcome/WhatsappHome";
import ChatContainer from "../components/chat/ChatContainer";

export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);

  // get conversations
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token));
    }
  }, [dispatch, user]);

  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      <div className="container min-h-screen flex py-[19px]">
        <Sidebar />

        {activeConversation._id ? <ChatContainer /> : <WhatsappHome />}
      </div>
    </div>
  );
}
