import * as React from 'react'
import { Pokemon } from './Pokemon'

export default function App() {
  const [pokemon, setPokemon] = React.useState<string[]>(['pikachu'])

  React.useEffect(() => {
    setTimeout(() => {
      setPokemon((prev) => [...prev, 'bulbasaur'])
    }, 1500)

    setTimeout(() => {
      setPokemon((prev) => [...prev, 'pikachu'])
    }, 2000)
  }, [])

  return (
    <div className="App">
      <div>
        <button onClick={() => setPokemon((prev) => [...prev, 'bulbasaur'])}>
          Add bulbasaur
        </button>
      </div>
      {pokemon.map((name, index) => (
        <Pokemon key={index} name={name} />
      ))}
    </div>
  )
}
