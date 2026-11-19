import { useState } from 'react'
import ChatInput from './components/ChatInput'
import MessageList from './components/MessageList'
import Sidebar from './components/Sidebar'
import type { Conversation, Message } from './types'

const conversations: Conversation[] = [
  { id: 1, title: 'Learning React' },
  { id: 2, title: 'Laravel tips' },
  { id: 3, title: 'MongoDB basics' },
]

const initialMessages: Message[] = [
  { id: 1, role: 'user', content: 'What is React?' },
  {
    id: 2,
    role: 'assistant',
    content: 'React is a JavaScript library for building user interfaces.',
  },
]

function App() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  function handleSend(content: string) {
    const newMessage: Message = {
      id: Date.now(),
      role: 'user',
      content,
    }

    setMessages([...messages, newMessage])
  }

  function handleClear() {
    const isConfirmed = window.confirm('Clear all messages?')

    if (!isConfirmed) {
      return
    }
    
    setMessages([])
  }

  const messageCount = messages.length

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <Sidebar conversations={conversations} activeConversationId={1} />

      <main className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
          <button
            type="button"
            onClick={handleClear}
            disabled={messageCount === 0}
            className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Clear chat
          </button>

          <span className="ml-2 self-center text-sm text-gray-500">{ messageCount } { messageCount === 1 ? 'message' : 'messages'}</span>
        </div>

        <MessageList messages={messages} />
        <ChatInput placeholder="Ask anything…" onSend={handleSend} />
      </main>
    </div>
  )
}

export default App
