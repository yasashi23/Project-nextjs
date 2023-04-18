import React from 'react'
import styled from 'styled-components'
import HslJam from './hslJam'
import { useState } from 'react'

 export default function JamBrp() {
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
        // untuk animasinya

        //untuk hasil yang akan di kirimkan
        const [hasil, setHasil] = useState({})
        // untuk functionnya
        function mintaDat(e) {
            setHasil({jam:setJam, menit:setMenit, detik:setDetik, jamS:setJamS, menitS:setMenitS,detikS: setDetikS, option:opt,buka:0})
        }
        function cleanDat(){
            setJamVal('')
            setMenitVal('')
            setDetikVal('')
            setJamValS('')
            setMenitValS('')
            setDetikValS('')
            setHasil({jam:"", menit:"", detik:"", jamS:"", menitS:"",detikS:"", option:opt,buka:1})
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
    
            function cekValMulai(){
        const date = new Date()
        const [hour,minute,second,dateC] = [date.getHours(),date.getMinutes(),date.getSeconds()]

        if(hour < 10){
            const newHour = `0${hour}`
            setJamVal(newHour)
        }else{
            setJamVal(hour)
        }
        if(minute < 10){
        const newMinute = `0${minute}`
        setMenitVal(newMinute)
        }else{
            setMenitVal(minute)
        }
        if(second < 10){
            const newSecond = `0${second}`
            setDetikVal(newSecond)
        }else{
            setDetikVal(second)
        }    
    }
  return (
    <Mycontain>
        <div className="jam-brp">        
            <h1>Jam berapa</h1>
                <div className="Sls mulai">
                    <h2>Mulai</h2>
                    <div className="inp">
                    <label htmlFor="JamBrp">Jam</label>
                    <input type="number" name="JamBrp" id="JamBrp" value={cekJam(setJam)} min="0" max="24" required onChange={handleJ} />
                    </div>
                    <div className="inp">
                    <label htmlFor="MenitBrp">Menit</label>
                    <input type="number" name="MenitBrp" id="MenitBrp" value={cekMenit(setMenit)} min="0" max="59" required onChange={handleM}/>
                    </div>
                    <div className="inp">
                    <label htmlFor="DetikBrp">Detik</label>
                    <input type="number" name="DetikBrp" id="DetikBrp" value={cekDetik(setDetik)} min="0" max="59" required onChange={handleD}/>
                    </div>
                <div className="btn-skg">
                <button onClick={cekValMulai}>Sekarang</button>
                </div>
                </div>
            {/*  SAMPAI  */}
                <div className="Sls sampai">
                    <div className="inp">
                    <input type="number" name="JamSbrp" id="JamSbrp" value={cekJamS(setJamS)} min="0" max="24" required onChange={handleJs}/>
                    <label htmlFor="JamSbrp">Jam</label>
                    </div>
                    <div className="inp">
                    <input type="number" name="MenitSbrp" id="MenitSbrp" value={cekMenitS(setMenitS)} min="0" max="59" required onChange={handleMs}/>
                    <label htmlFor="MenitSbrp">Menit</label>
                    </div>
                    <div className="inp">
                    <input type="number" name="DetikSbrp" id="DetikSbrp" value={cekDetikS(setDetikS)} min="0" max="59" required onChange={handleDs}/>
                    <label htmlFor="DetikSbrp">Detik</label>
                    </div>
                    <div className='pls-choose'>
                        <label htmlFor="">
                            <select name="" id="" value={opt} onChange={handleOpt}>
                                <option value="datang" >Akan datang</option>
                                <option value="lalu">Yang Lalu</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="btn">
                    <button onClick={mintaDat}>Hitung</button>
                    <button onClick={cleanDat}>Bersihkan</button>

                </div>

        </div>

        <HslJam wkt={hasil}/>
    </Mycontain>
  )
}

const Mycontain = styled.div`
    max-width: 1300px;
    justify-content: center;
    display: flex;
    gap: 50px;
.jam-brp{
    width: 500px;
    height: 350px;
    box-sizing: border-box;
    padding: 40px 20px 50px 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.25);
    border-radius: 20px;
    h1 {
        text-align: center;
        margin-bottom: 20px;
    }
    select {
    height: 34px;
    margin-bottom: 20px;
    }
    .btn {
        display:flex;
        justify-content:center;
        gap:20px;
        button{
            font-size: 14px;
            padding: 8px 18px 8px 18px;
            border-radius: 4px;
            border: none;
            color: white;
            font-weight: 600;
            cursor: pointer;

        }
        button:first-child {
            background: #11D9F2;
        }
    button:last-child {
    background: #4AE688;
        }
    }
}
.Sls.sampai {
    justify-content: center;
    margin-left: 115px;
    align-items: center;
    margin: 20px 0px 20px 0px;
}
.Sls{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    gap: 10px;
    .btn-skg{
        margin-top:24px;
        button{
            font-size: 14px;
            padding: 8px 18px 8px 18px;
            border-radius: 4px;
            border: none;
            color: white;
            font-weight: 600;
            cursor: pointer;
            background-color: #6b6b6b;
        }
}        
    
    h2{
    width: 140px;
    margin-top: 18px;
    }
    .inp{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        label{
        margin-bottom: 5px;
        font-size: 16px;            
        }
        input{
        width: 61px;
        height: 34px;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        }
    }
}
.Sls.sampai{
    label{
        margin-top:5px;
        margin-bottom:0px;
    }

}
@media only screen and (min-width:932px) and (max-width:1280px) {
max-width: 932px;
gap: 20px;
align-items:center;
.jam-brp {
    width: 440px;
    padding: 40px 20px 50px 20px;
    h1{
    margin-bottom: 20px;
    font-size: 24px;
    }
    select {
    margin-bottom: 22px;
    font-size: 12px        
    }
    .btn button {
    font-size:14px;
    }
    }
}
.Sls{
    h2{
        width: 90px;
        margin-top: 18px;
    }
    .inp {
        label {
         margin-bottom: 5px;
         font-size: 13px   
        }
        input{
            width: 50px;
            height: 29px;
            font-size: 15px
        }
    }
    .btn-skg{
        button {
            font-size: 12px;
            padding: 6px 12px 6px 12px; 
        }
    }
}
@media only screen and (max-width:931px) and (min-width:640px) {




gap: 30px;
max-width: 640px;
flex-direction: column-reverse;    
align-items:center;
.jam-brp {
    width: 440px;
    padding: 40px 20px 50px 20px;
    h1{
    margin-bottom: 20px;
    font-size: 24px;
    }
    select {
    margin-bottom: 22px;
    font-size: 12px        
    }
    .btn button {
    font-size:14px;
    }
    }
}
.Sls {
    h2{
        width: 107px;
        margin-top: 18px;
    }
    .inp {
        label {
         margin-bottom: 5px;
         font-size: 13px;   
        input{
            width: 50px;
            height: 29px;
            font-size: 15px
        }
    }
    .btn-skg{
        button {
            font-size: 12px;
            padding: 6px 12px 6px 12px; 
        }
    }
    }

}
@media only screen and (max-width:640px) and (min-width:260px){
max-width: 360px;
gap: 10px;
flex-direction: column-reverse;
    .jam-brp{
        width: 360px;
        height: 308px;
        box-sizing: border-box;
        padding: 31px 20px 39px 20px;
        h1{
            margin-bottom: 12px;
            font-size: 24px;
        }

    }
    .Sls{
        gap: 7px;
        h2{
            width: 80px;
            margin-top: 18px;
            font-size: 16px;
        }
        .inp{
            label{
                margin-bottom: 3px;
                font-size: 12px;
            }
            input{
                width: 46px;
                height: 29px;
                font-size: 15px;
            }
        }
        .btn-skg button{
                font-size: 13px;
                padding: 6px 10px 6px 10px;
        }
    }
    .Sls.sampai{
        margin: 20px 0px 20px 0px;
        
    }
}
@media only screen and (max-width:400px){
max-width: 275px;
.jam-brp {
    width: 275px;
    height: 293px;
    box-sizing: border-box;
    padding: 31px 5px 27px 5px;
    h1 {
        font-size: 22px;
    }
    select {
        height: 26px;
        margin-bottom: 20px;
        font-size: 12px;
    }
    .btn button {
        font-size: 12px;
        padding: 6px 12px 6px 12px;
    }

    }
    .Sls {
    gap: 7px;
        h2 {
            width: 20px;
            font-size: 16px;
            transform: rotate(180deg);
            writing-mode: vertical-lr;
        }   
        .inp input {
            width: 40px;
            height: 23px;
            font-size: 14px;
        }
        .inp label {
            font-size: 12px;
        }
        .btn-skg {
            margin-top: 16px;
        }
        .btn-skg button {
            font-size: 11px;
            padding: 6px 4px 6px 4px;
        }


    }      

}

`