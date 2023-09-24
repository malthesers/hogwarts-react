import { useMessages } from "../../context/"
import MessagePopup from "./MessagePopup"

export default function MessagesContainer() {
  const { messages } = useMessages()

  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full p-4 pointer-events-none">
      <div className="relative max-w-2xl mx-auto">
        { messages.map((message) =>
          <MessagePopup key={message.id} message={message} />
        )}
      </div>
    </div>
  )
}
