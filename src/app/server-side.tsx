'use client'

import { useEffect, useState } from "react"

export function ClientSideCallingServer() {
  const [inputText, setInputText] = useState('')

  function handleCall() {
    fetch(`/api?msg=${inputText}`, {
      method: "GET",
      // mode: "no-cors",
    }).then(response => console.log(response))
      // .then((data) => console.log(data))
      .catch(error => {
        console.error('Erro ao fazer a solicitação:', error);
    });
  }

  return (
    <div >
      <h1 className="text-white">Calling server side</h1>
      <div className="w-80 h-96 bg-slate-400">
        <p>{}</p>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button disabled={!inputText} onClick={handleCall} className="disabled:opacity-50">Enviar</button>
      </div>
    </div>
  )
}
