import React from 'react'
import styled from 'styled-components'
import HslJam from './hslJam'
import { useState } from 'react'

 export default function JamBrp(props) {
        // register
        const [setJam, setJamVal] = useState('')
        const [setMenit, setMenitVal] = useState('')
        const [setDetik, setDetikVal] = useState('')
        // untuk sampainya
        const [setJamS, setJamValS] = useState('')
        const [setMenitS, setMenitValS] = useState('')
        const [setDetikS, setDetikValS] = useState('')
        // untuk value yang akan datang dan yang lalu
        const [opt, setOpt] = useState('datang')

        //untuk hasil yang akan di kirimkan
        const [hasil, setHasil] = useState({})
        // untuk functionnya
        function mintaDat(e) {
            setHasil({jam:setJam, menit:setMenit, detik:setDetik, jamS:setJamS, menitS:setMenitS,detikS: setDetikS, option:opt})
        }
        function cleanDat(){
            setJamVal('')
            setMenitVal('')
            setDetikVal('')
            setJamValS('')
            setMenitValS('')
            setDetikValS('')

            setHasil({jam:0, menit:0, detik:0, jamS:0, menitS:0,detikS:0, option:opt})
        }
    // Handle untuk select
    function handleOpt(e) {
        setOpt(e.target.value)
    }
    // HANDLE NYA
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

    // function untuk yang Mulai Dari
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
    // console.log(hasil)
  return (
    <Mycontain>
        <h1>selisih jam</h1>

            <div className="Sls mulai">
                <h2>Mulai dari :</h2>
                <div className="inp">
                <label htmlFor="Jam">Jam</label>
                <input type="number" name="Jam" id="Jam" value={cekJam(setJam)} min="0" max="24" required onChange={handleJ} />
                </div>
                <div className="inp">
                <label htmlFor="Menit">Menit</label>
                <input type="number" name="Menit" id="Menit" value={cekMenit(setMenit)} min="0" max="59" required onChange={handleM}/>
                </div>
                <div className="inp">
                <label htmlFor="Detik">Detik</label>
                <input type="number" name="Detik" id="Detik" value={cekDetik(setDetik)} min="0" max="59" required onChange={handleD}/>
                </div>
            </div>
        {/*  SAMPAI  */}
            <div className="Sls sampai">
                <div className="inp">
                <input type="number" name="JamS" id="JamS" value={cekJamS(setJamS)} min="0" max="24" required onChange={handleJs}/>
                <label htmlFor="JamS">Jam</label>
                </div>
                <div className="inp">
                <input type="number" name="MenitS" id="MenitS" value={cekMenitS(setMenitS)} min="0" max="59" required onChange={handleMs}/>
                <label htmlFor="MenitS">Menit</label>
                </div>
                <div className="inp">
                <input type="number" name="DetikS" id="DetikS" value={cekDetikS(setDetikS)} min="0" max="59" required onChange={handleDs}/>
                <label htmlFor="DetikS">Detik</label>
                </div>
                <div>
                    <label htmlFor="">
                        <select name="" id="" value={opt} onChange={handleOpt}>
                            <option value="datang" >Akan datang</option>
                            <option value="lalu">Yang Lalu</option>
                        </select>
                    </label>
                </div>
            </div>
                <button onClick={mintaDat}>Hitung</button>
                <button onClick={cleanDat}>Bersihkan</button>

        
        <HslJam wkt={hasil}/>
    </Mycontain>
  )
}

const Mycontain = styled.div`
.Sls{
    h2{
        margin-right:30px;
    }
    display:flex;
    align-items:center;
    gap:10px;
    .inp{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        input{
            width:60px;
            text-align:center;
        }
    }
}
`