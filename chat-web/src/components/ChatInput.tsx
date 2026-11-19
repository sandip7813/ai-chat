import { useState } from 'react'

type ChatInputProps = {
  placeholder?: string
  onSend: (content: string) => void
}

function ChatInput({ placeholder = 'Type a message…', onSend }: ChatInputProps) {
  const [text, setText] = useState('')
  const isEmpty = text.trim() === ''

  function sendMessage() {
    if (isEmpty) {
      return
    }

    onSend(text.trim())
    setText('')
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        sendMessage()
      }}
      className="flex gap-2 border-t border-gray-200 bg-white p-4"
    >
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={placeholder}
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        disabled={isEmpty}
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Send
      </button>
    </form>
  )
}

export default ChatInput
