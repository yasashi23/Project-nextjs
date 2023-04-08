import styled from "styled-components"
import TglHsl from "./tglHsl"
import { useState } from "react"


export default function TglS() {
    const [mulai,setMulai] = useState('')
    const [sampai,setSampai]= useState('')
    const [hasil, setHasil] = useState('')


    // HANDLE
    function handleM(e){
        const dat = e.target.value
        setMulai(dat)
    }
    function handleS(e){
        const dat = e.target.value
        setSampai(dat)
    }
    // function 
    function mintaDat() {
    setHasil({mulai,sampai})        

    }
    function cleanDat() {
        console.log('aman')
    }
    // LOOP
    const sls = ["Mulai Dari", "Sampai"]
    const val = [mulai,sampai]
    const setVal = [handleM,handleS]
    

  return (
    <Mycontain>
        <h1>Selisih Tanggal</h1>
        <div className="form">
            {sls.map((e,i) => (
                <div className="inp">
                    <label htmlFor="" className="lbl">{e}</label>
                    <input type="datetime-local" name="" id="" value={val[i]} onChange={setVal[i]}/>
                </div>
            ))}
        </div>
        <button onClick={mintaDat}>klik</button>
        <button onClick={cleanDat}>Bersihkan</button>
        <TglHsl data={hasil}/>
    </Mycontain>
  )
}

const Mycontain = styled.div``
