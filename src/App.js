import { useState } from 'react'
import axios from 'axios'

function App() {
  const [clubs, setClubs] = useState([])
  const [diamonds, setDiamonds] = useState([])
  const [hearts, setHearts] = useState([])
  const [spades, setSpades] = useState([])

  const getCards = async () => {
    let data = await axios.get('https://deckofcardsapi.com/api/deck/27pq5t0o5ptb/draw/?count=1')
    return data
  }
  const arrangingCards = async () => {
    let card = await getCards()
    let [myCard] = card.data.cards
    if (myCard.suit === 'CLUBS') {
      setClubs((current) => [...current, myCard])
      console.log('clubs => ', clubs, clubs.length)
    }
    if (myCard.suit === 'DIAMONDS') {
      setDiamonds((current) => [...current, myCard])
      console.log('diamantes =>', diamonds, diamonds.length)
    }
    if (myCard.suit === 'HEARTS') {
      setHearts((current) => [...current, myCard])
      console.log('hearts =>', hearts, hearts.length)
    }
    if (myCard.suit === 'SPADES') {
      setSpades((current) => [...current, myCard])
      console.log('spades =>', spades, spades.length)
    }
  }

  return (
    <div className="App">
      <button onClick={arrangingCards}>clickme</button>
      <ol>
        <li>Clubs</li>
        <ul>
          {clubs.map((item, i) => (
            <li key={i}>{item.value}</li>
          ))}
        </ul>
        <li>Diamonds</li>
        <ul>
          {diamonds.map((item, i) => (
            <li key={i}>{item.value}</li>
          ))}
        </ul>
        <li>Hearts</li>
        <ul>
          {hearts.map((item, i) => (
            <li key={i}>{item.value}</li>
          ))}
        </ul>
        <li>Spades</li>
        <ul>
          {spades.map((item, i) => (
            <li key={i}>{item.value}</li>
          ))}
        </ul>
      </ol>
    </div>
  )
}

export default App
