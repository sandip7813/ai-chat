import { useEffect, useState } from 'react'

type HealthStatus = {
  mongo: string
  ollama: string
}

function App() {
  const [health, setHealth] = useState<HealthStatus | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/health`)
      .then((response) => response.json())
      .then((data: HealthStatus) => setHealth(data))
      .catch((err: Error) => setError(err.message))
  }, [])

  if (error) {
    return <p>Could not reach the API: {error}</p>
  }

  if (health === null) {
    return <p>Checking…</p>
  }

  return (
    <main>
      <h1>AI Chat</h1>
      <p>Mongo {health.mongo === 'ok' ? 'OK' : health.mongo}</p>
      <p>Ollama {health.ollama === 'ok' ? 'OK' : health.ollama}</p>
    </main>
  )
}

export default App
