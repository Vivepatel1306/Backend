import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [Jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      }).catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>Welcome to the Community</h1>
      <h1>Joke length : {Jokes.length}    </h1>
      {
        Jokes.map((joke,index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
