import type { Message } from '../types'
import MessageBubble from './MessageBubble'

type MessageListProps = {
  messages: Message[]
}

function MessageList({ messages }: MessageListProps) {
  // if (messages.length === 0) {
  //   return (
  //     <div className="flex flex-1 items-center justify-center text-gray-400">
  //       Start a conversation
  //     </div>
  //   )
  // }
  
  return (
    <div className="flex-1 space-y-4 overflow-y-auto p-6">
      {
        messages.length === 0 ? (
          <p className="text-center text-gray-400">Start a conversation</p>
        ) : (
        messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))
      )}
    </div>
  )
}

export default MessageList
