import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=9653da13-a311-45e4-9c9f-fdfde5dc49e4'

function App() {

  const [crypto, setCrypto] = useState("")
  const [data, setData] = useState([])
  const [error, setError] = useState("")



  const fetchCrypto = async () => {
    const response = await axios.get(URL)
    setData(response.data.data) // Definine todos os dados, não apenas um elemento específico
    }

    useEffect(() => {
        fetchCrypto()
    }, [])

  
  

  return (
    <>
      <div>
      <h1 className="text-center">Desafio Frontend - Klever</h1>
      <form className="">
        <input
          placeholder="Digite o nome do ativo cripto. Ex: BTC "
          className=""
        />
        <button
          type="submit"
          className=" border rounded border-purple-500 py-1 px-3  hover:border-purple-900 hover:opacity-80 transition"
        >
          Buscar
        </button>
      </form>
      {data.map((crypto, index) => (
        <div key={index}>
          <p>{crypto.name}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
