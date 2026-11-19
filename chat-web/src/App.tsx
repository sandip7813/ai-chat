import ChatInput from "./components/ChatInput"
import MessageList from "./components/MessageList"
import Sidebar from "./components/Sidebar"
import type { Conversation, Message } from "./types"

const conversations: Conversation[] = [
  { id: 1, title: 'Learning React' },
  { id: 2, title: 'Laravel tips' },
  { id: 3, title: 'MongoDB basics' },
]

const messages: Message[] = [
  { id: 1, role: 'user', content: 'What is React?' },
  {
    id: 2,
    role: 'assistant',
    content: 'React is a JavaScript library for building user interfaces.',
  },
]

function App() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <Sidebar conversations={conversations} activeConversationId={2} />
      
      <main className="flex flex-1 flex-col">
        <MessageList messages={messages} />
        <ChatInput placeholder="Ask anything…" />
      </main>
    </div>
  )
}

export default App
