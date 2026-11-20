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

const RANDOM_REPLIES = [
  'Hello! How can I help you today?',
  'Sure, I can help you with that.',
  'That\'s a great idea!',
  'Let me explain that in simple terms.',
  'Absolutely! Here is an example.',
  'You are welcome! Happy to help.',
  'I hope that makes things clearer.',
  'Interesting question! Let me break it down.',
  'Here are a few things you should consider.',
  'No problem. Take your time!',
  'That sounds like a good approach.',
  'Great! Let\'s move to the next step.',
  'Thanks for sharing that information.',
  'I would recommend starting with the basics.',
  'Glad I could help!'
];

function App() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [isThinking, setIsThinking] = useState(false)

  function handleSend(content: string) {
    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content,
    }

    setMessages((previousMessages) => [...previousMessages, userMessage])
    setIsThinking(true)

    const randomIndex = Math.floor(Math.random() * RANDOM_REPLIES.length)
    const randomDelay = (Math.random() * (5 - 0.5) + 0.5) * 1000;

    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now(),
        role: 'assistant',
        content: RANDOM_REPLIES[randomIndex],
      }

      setMessages((previousMessages) => [...previousMessages, assistantMessage])
      // setMessages([...messages, assistantMessage])
      setIsThinking(false)
    }, randomDelay)
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
            disabled={messageCount === 0 || isThinking}
            className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Clear chat
          </button>

          {messageCount > 0 && (
            <span className="text-sm text-gray-500">
                {messageCount} {messageCount === 1 ? 'message' : 'messages'}
            </span>
          )}
        </div>

        <MessageList messages={messages} isThinking={isThinking} />
        <ChatInput placeholder="Ask anything…" onSend={handleSend} isDisabled={isThinking} />
      </main>
    </div>
  )
}

export default App
