type ChatInputProps = {
  placeholder: string
}

function ChatInput({ placeholder }: ChatInputProps) {
  return (
    <form className="flex gap-2 border-t border-gray-200 bg-white p-4">
      <input
        type="text"
        placeholder={ placeholder }
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  )
}

export default ChatInput
