import { useState } from 'react'
import ChatInput from "./components/ChatInput"
import MessageList from "./components/MessageList"
import Sidebar from "./components/Sidebar"
import type { Conversation, Message } from "./types"

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

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <Sidebar conversations={conversations} activeConversationId={1} />

      <main className="flex flex-1 flex-col">
        <MessageList messages={messages} />
        <ChatInput placeholder="Ask anything…" onSend={handleSend} />
      </main>
    </div>
  )
}


export default App
