import { useState } from "react"
export default function TfDat({jam, func}) {
  const [data, setData] = useState({})
  function ambil(){
    setData({jamn:jam.jam, menit:jam.menit})
  }
  const{jamn,menit} = data
  return (
    <div>
        <button onClick={ambil}>ambil</button>
        <h3>{console.log(data)} {jamn}: {menit}</h3>
    </div>
  )
}
