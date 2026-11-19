import type { Message } from '../types'

type MessageBubbleProps = {
  message: Message
}

function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user'

  return (
    <div className={isUser ? 'flex justify-end' : 'flex justify-start'}>
      <p
        className={`max-w-xl rounded-2xl px-4 py-2 ${
          isUser ? 'bg-blue-600 text-white' : 'bg-white shadow-sm'
        }`}
      >
        {message.content}
      </p>
    </div>
  )
}

export default MessageBubble
