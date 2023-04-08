import styled from "styled-components"
import TglHsl from "./tglHsl"
import { useState } from "react"


export default function TglS() {
    const [mulai,setMulai] = useState('')
    const [sampai,setSampai]= useState('')
    const [hasil, setHasil] = useState('')

    const [setJam, setJamVal] = useState('')
    const [setMenit, setMenitVal] = useState('')
    const [setDetik, setDetikVal] = useState('')
        // untuk sampainya
    const [setJamS, setJamValS] = useState('')
    const [setMenitS, setMenitValS] = useState('')
    const [setDetikS, setDetikValS] = useState('')    


    // HANDLE
    function handleMu(e){
        const dat = e.target.value
        setMulai(dat)
    }
    function handleS(e){
        const dat = e.target.value
        setSampai(dat)
    }
    // function send and delete
    function mintaDat() {
    setHasil({mulai,sampai,jam:setJam, menit:setMenit, detik:setDetik, jamS:setJamS, menitS:setMenitS,detikS: setDetikS })        
    }
    function cleanDat() {
            setJamVal('')
            setMenitVal('')
            setDetikVal('')
            setJamValS('')
            setMenitValS('')
            setDetikValS('')

            setHasil({jam:0, menit:0, detik:0, jamS:0, menitS:0,detikS:0, mulai:'',sampai:''})
    }
    // FUNCTION FOR HANDLE JAM
        // HANDLE untuk mmulai
        function handleJ(e) {
            let dat = e.target.value
                setJamVal(dat)
        }
        function handleM(e){
            setMenitVal(e.target.value)
        }
        function handleD(e){
            setDetikVal(e.target.value)
        }

        // HANDLE untuk yang sampai
        function handleJs(e) {
            let dat = e.target.value
                setJamValS(dat)
        }
        function handleMs(e){
            setMenitValS(e.target.value)
        }
        function handleDs(e){
            setDetikValS(e.target.value)
        }
    // FUNCTION FOR CEK
         function cekJam(i) {
        if(i > 23 || i.length > 2) {
            setJamVal("23")
            return "23"
        }else{
            return i
        }
    }

    function cekMenit(i) {
        if(i > 59 || i.length > 2) {
            setMenitVal("59")
            return "59"
        }else{
            return i
        }
    }

    function cekDetik(i){
        if(i > 59 || i.length > 2) {
            setDetikVal("59")
            return "59"
        }else{
            return i
        }
    }

    // FUNCTION UNTUK YANG SAMPAI
    function cekJamS(i) {
        if(i > 23 || i.length > 2) {
            setJamValS("23")
            return "23"
        }else{
            return i
        }
    }

    function cekMenitS(i) {
        if(i > 59 || i.length > 2) {
            setMenitValS("59")
            return "59"
        }else{
            return i
        }
    }

    function cekDetikS(i){
        if(i > 59 || i.length > 2) {
            setDetikValS("59")
            return "59"
        }else{
            return i
        }
    }


    // LOOP date
    const sls = ["Mulai Dari", "Sampai"]
    const val = [mulai,sampai]
    const setVal = [handleMu,handleS]
    // loop name time
    const tm = ["Jam","Menit","Detik",]
    const tmS = ["JamS","MenitS","DetikS"]
    const changeM = [handleJ,handleM,handleD]
    const changeS = [handleJs,handleMs,handleDs]
    const cekJamM = [cekJam(setJam),cekMenit(setMenit),cekDetik(setDetik)]
    const cekJamSa = [cekJamS(setJamS),cekMenitS(setMenitS),cekDetikS(setDetikS)]
    const setM = [setJam,setMenit,setDetik]
    const setMS = [setJamS,setMenitS,setDetikS]
    const minM = ["0","0","0"]
    const maxM = ["24","59","59"]
    // 

  return (
    <Mycontain>
        <h1>Selisih Tanggal</h1>
        <div className="form">
        <div className="cont-inp">
            <h3>{sls[0]}</h3>
            <div className="inputan">
                <div className="inp date">
                    <label htmlFor={sls[0]}></label>
                    <input type="date" name={sls[0]} id={sls[0]} value={val[0]} onChange={setVal[0]}/>
                </div>
                <div className="inp-time">
                    {tm.map((e,i) => (
                        <div className="input-tm">
                            <label htmlFor={e}>{e}</label>
                            <input type="number" name={e} id={e} value={cekJamM[i]} onChange={changeM[i]} min={minM[i]} max={maxM[i]}/>
                        </div>
                    ))}
                </div>

            </div>
        </div>
        <div className="cont-inp">
            <h3>{sls[1]}</h3>
            <div className="inputan">
                <div className="inp date">
                    <label htmlFor={sls[1]}></label>
                    <input type="date" name={sls[1]} id={sls[1]} value={val[1]} onChange={setVal[1]}/>
                </div>            
                <div className="inp-time">
                    {tmS.map((e,i) => (
                        <div className="input-tm">
                            <label htmlFor={e}>{tm[i]}</label>
                            <input type="number" name={e} id={e} value={cekJamSa[i]} onChange={changeS[i]} min={minM[i]} max={maxM[i]}/>
                        </div>
                    ))}
                </div>            
            </div>
        </div>
        <div className="btn">
        <button onClick={mintaDat}>klik</button>
        <button onClick={cleanDat}>Bersihkan</button>

        </div>
        </div>
        <TglHsl data={hasil}/>
    </Mycontain>
  )
}

const Mycontain = styled.div`
.form{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:30px;
    border:1px solid red;
    width:300px;
    button{
        width:71px;
    }
    .cont-inp{
        display:flex;
        justify-content:space-between;
        .inputan {
            display:flex;
            flex-direction:column;
            align-items:center;
            .inp-time{
                display:flex;
                .input-tm{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }
            }
        }
    }
}

`
