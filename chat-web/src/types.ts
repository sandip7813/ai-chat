export type Role = 'user' | 'assistant'

export type Message = {
  id: number
  role: Role
  content: string
}

export type Conversation = {
  id: number
  title: string
}
