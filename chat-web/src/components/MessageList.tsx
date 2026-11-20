import type { Message } from '../types'
import MessageBubble from './MessageBubble'

type MessageListProps = {
  messages: Message[]
  isThinking: boolean
}

function MessageList({ messages, isThinking }: MessageListProps) {
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

      {isThinking && (
        <div className="flex justify-start">
          <p className="animate-pulse rounded-2xl bg-white px-4 py-2 text-gray-400 shadow-sm">
            Thinking…
          </p>
        </div>
      )}

    </div>
  )
}

export default MessageList
