import type { Conversation } from '../types'

type SidebarProps = {
  conversations: Conversation[]
  activeConversationId: number
}

function Sidebar({ conversations, activeConversationId }: SidebarProps) {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-4">
      <button className="mb-4 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
        + New chat
      </button>

      <ul className="space-y-1">
        {conversations.map((conversation) => (
          <li
            key={conversation.id}
            className={`cursor-pointer rounded-lg px-3 py-2 text-sm ${
              conversation.id === activeConversationId
                ? 'bg-gray-100 font-medium'
                : 'hover:bg-gray-100'
            }`}
          >
            {conversation.title}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
