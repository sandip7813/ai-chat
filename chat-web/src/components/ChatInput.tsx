import { useState } from 'react'

type ChatInputProps = {
  placeholder?: string
  onSend: (content: string) => void
}

const MAX_MESSAGE_LENGTH = 20

function ChatInput({ placeholder = 'Type a message…', onSend }: ChatInputProps) {
  const [text, setText] = useState('')
  const isEmpty = text.trim() === ''
  const isTooLong = text.trim().length > MAX_MESSAGE_LENGTH

  function sendMessage() {
    if (isEmpty || isTooLong) {
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

      <span className={`self-center text-sm ${isTooLong ? 'text-red-600' : 'text-gray-500'}`}>{ text.length } / { MAX_MESSAGE_LENGTH }</span>

      <button
        type="submit"
        disabled={isEmpty || isTooLong}
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Send
      </button>
    </form>
  )
}

export default ChatInput
