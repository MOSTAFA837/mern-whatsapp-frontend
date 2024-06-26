import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

import { sendMessage } from "../../../app/reducers/chatSlice.js";
import { SendIcon } from "../../../svg/index.js";
import Attachments from "./Attachments.jsx";
import Input from "./Input.jsx";
import EmojiPickerApp from "./EmojiPicker.jsx";

export default function ChatActions() {
  const dispatch = useDispatch();
  const { activeConversation, status } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { token } = user;

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);

  const textRef = useRef();

  const values = {
    message,
    convo_id: activeConversation._id,
    files: [],
    token,
  };

  const SendMessageHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(sendMessage(values));
    setMessage("");
    setLoading(false);
  };
  return (
    <form
      onSubmit={(e) => SendMessageHandler(e)}
      className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none"
    >
      {/*Container*/}
      <div className="w-full flex items-center gap-x-2">
        {/*Emojis and attachpments*/}
        <ul className="flex gap-x-2">
          <EmojiPickerApp
            textRef={textRef}
            message={message}
            setMessage={setMessage}
            showPicker={showPicker}
            setShowPicker={setShowPicker}
            setShowAttachments={setShowAttachments}
          />

          <Attachments
            showAttachments={showAttachments}
            setShowAttachments={setShowAttachments}
            setShowPicker={setShowPicker}
          />
        </ul>
        {/*Input*/}
        <Input textRef={textRef} message={message} setMessage={setMessage} />
        {/*Send button*/}
        <button type="submit" className="btn">
          {status === "loading" && loading ? (
            <ClipLoader color="#E9EDEF" size={25} />
          ) : (
            <SendIcon className="dark:fill-dark_svg_1" />
          )}
        </button>
      </div>
    </form>
  );
}
