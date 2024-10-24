import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
        <>
          <h1>Hedy Lamarr's Todos</h1>
          <img 
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40inchristiely%2Fhow-to-produce-similar-images-or-styles-in-midjourney-style-references-vs-image-prompt-0e1457a3eb6d&psig=AOvVaw2iOTvG0CTzCt1E5qFlCyW2&ust=1729830595281000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjAr9GXpokDFQAAAAAdAAAAABAE" 
            alt="Hedy Lamarr" 
            className="photo" 
          />
          <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
          </ul>
        </>
      );
    }

export default App
