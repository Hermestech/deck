import { useEffect } from 'react'
import { useState, useRef } from 'react'
import { getCard } from '../api/getCard'

const cardsValue = {
  ACE: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  10: 9,
  JACK: 10,
  QUEEN: 11,
  KING: 12
}

function sortCards(array) {
  return array.sort((a, b) => cardsValue[a.value] - cardsValue[b.value])
}

const CardPage = ({ deckId }) => {
  const [allCards, setAllCards] = useState([])
  const clubs = useRef([])
  const diamonds = useRef([])
  const hearts = useRef([])
  const spades = useRef([])
  const foundQueens = useRef(0)

  const arrangeCards = async (myCard) => {
    if (myCard.suit === 'CLUBS') {
      clubs.current = sortCards([...clubs.current, myCard])
      //   setClubs((current) => sortCards([...current, myCard]))
    }
    if (myCard.suit === 'DIAMONDS') {
      diamonds.current = sortCards([...diamonds.current, myCard])
      //   setDiamonds((current) => sortCards([...current, myCard]))
    }
    if (myCard.suit === 'HEARTS') {
      hearts.current = sortCards([...hearts.current, myCard])
      //   setHearts((current) => sortCards([...current, myCard]))
    }
    if (myCard.suit === 'SPADES') {
      spades.current = sortCards([...spades.current, myCard])
      //   setSpades((current) => sortCards([...current, myCard]))
    }
    if (myCard.value === 'QUEEN') {
      const newFoundQueens = foundQueens.current + 1
      foundQueens.current = newFoundQueens
    }
    setAllCards((current) => [...current, myCard])
  }

  useEffect(() => {
    console.log('useEffect:', allCards.length, ' ', foundQueens)
    if (allCards.length < 52 && foundQueens.current < 4) {
      console.log('if')
      getCard(deckId).then((mycard) => {
        setTimeout(() => {
          console.log('dentro del setTimeout')
          arrangeCards(mycard)
        }, 1000)
      })
    }
  }, [allCards.length])
  return (
    <ol>
      <li>All Cards</li>
      {allCards.map((item, i) => (
        <ul key={i}>
          <li>
            {i + 1}) {item.value} - {item.suit}
          </li>
        </ul>
      ))}
      <li>Clubs</li>
      <ul>
        {clubs.current.map((item, i) => (
          <li key={i}>{item.value}</li>
        ))}
      </ul>
      <li>Diamonds</li>
      <ul>
        {diamonds.current.map((item, i) => (
          <li key={i}>{item.value}</li>
        ))}
      </ul>
      <li>Hearts</li>
      <ul>
        {hearts.current.map((item, i) => (
          <li key={i}>{item.value}</li>
        ))}
      </ul>
      <li>Spades</li>
      <ul>
        {spades.current.map((item, i) => (
          <li key={i}>{item.value}</li>
        ))}
      </ul>
    </ol>
  )
}

export default CardPage
