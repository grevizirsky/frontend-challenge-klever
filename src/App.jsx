import { useState } from 'react'
import './App.css'

function App() {
  

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
    </div>
    </>
  )
}

export default App
