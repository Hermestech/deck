import { useState } from 'react'
import { getDeck } from './api/getDeck'
import CardPage from './components/CardPage'

function App() {
  const [deckId, setDeckId] = useState(null)

  const handleClick = async (e) => {
    e.preventDefault()
    const deckData = await getDeck()
    const myDeckId = deckData.data.deck_id
    setDeckId(myDeckId)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>clickme</button>
      {deckId === null ? <>no hay</> : <CardPage deckId={deckId} />}
    </div>
  )
}

export default App
