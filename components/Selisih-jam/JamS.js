
import JamBrp from "./JamBrp"
import styled from "styled-components"
import { useState } from "react"




 export default function JamS() {
        // register
        const [setJam, setJamVal] = useState('')
        const [setMenit, setMenitVal] = useState('')
        const [setDetik, setDetikVal] = useState('')
        // untuk sampainya
        const [setJamS, setJamValS] = useState('')
        const [setMenitS, setMenitValS] = useState('')
        const [setDetikS, setDetikValS] = useState('')

        //untuk hasil yang akan di kirimkan
        const [hasil, setHasil] = useState({})
        // untuk functionnya
        function mintaDat(e) {
            setHasil({jam:setJam, menit:setMenit, detik:setDetik, jamS:setJamS, menitS:setMenitS,detikS: setDetikS, sbuka:0})

        }
        function cleanDat(){
            setJamVal('')
            setMenitVal('')
            setDetikVal('')
            setJamValS('')
            setMenitValS('')
            setDetikValS('')

            setHasil({jam:0, menit:0, detik:0, jamS:0, menitS:0,detikS:0,sbuka:1})
        }
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
    function cekValSampai(){
        const date = new Date()
        let [hour,minute,second] = [date.getHours(),date.getMinutes(),date.getSeconds()]

         if(hour < 10){
            const newHour = `0${hour}`
            setJamValS(newHour)
        }else{
            setJamValS(hour)
        }
        if(minute < 10){
        const newMinute = `0${minute}`
        setMenitValS(newMinute)
        }else{
            setMenitValS(minute)
        }
        if(second < 10){
            const newSecond = `0${second}`
            setDetikValS(newSecond)
        }else{
            setDetikValS(second)
        }        
    }
  return (
    <Mycontain>
        <div className="hitung">

        
            <h1>Selisih jam</h1>
                <div className="Sls mulai">
                    <h2>Mulai</h2>
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
                <div className="btn-skg">
                <button onClick={cekValMulai}>Sekarang</button>
                </div>
                </div>
                <hr />
                <div className="Sls sampai">
                    <h2>Sampai </h2>
                    <div className="inp">
                    <label htmlFor="JamS">Jam</label>
                    <input type="number" name="JamS" id="JamS" value={cekJamS(setJamS)} min="0" max="24" required onChange={handleJs}/>
                    </div>
                    <div className="inp">
                    <label htmlFor="MenitS">Menit</label>
                    <input type="number" name="MenitS" id="MenitS" value={cekMenitS(setMenitS)} min="0" max="59" required onChange={handleMs}/>
                    </div>
                    <div className="inp">
                    <label htmlFor="DetikS">Detik</label>
                    <input type="number" name="DetikS" id="DetikS" value={cekDetikS(setDetikS)} min="0" max="59" required onChange={handleDs}/>
                    </div>
                <div className="btn-skg">
                    <button onClick={cekValSampai}>Sekarang</button>
                </div>
                </div>
                <div className="btn">
                    <button onClick={mintaDat}>Hitung</button>
                    <button onClick={cleanDat}>Bersihkan</button>
                </div>
        </div>
        <JamBrp data={hasil} />
    </Mycontain>
  )
}

const Mycontain = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    max-width: 1300px;
    align-items:center;
h1{
    text-align:center;
    margin-bottom:30px;
}
hr{display:none;}
.hitung{
display:flex;
flex-direction: column;
border-radius: 20px;
width: 500px;
box-sizing: border-box;
padding: 40px 20px 50px 20px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0,0,0,0.25);
.btn{
    display: flex;
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
        button:first-child{
            background:#11D9F2;
        }
        button:last-child{
            background: #4AE688;
        }
}
.Sls{
    h2{
        margin-top:18px;
        width: 86px;
    }
    display:flex;
    align-items:center;
    gap:10px;
    justify-content: center;
    .inp{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        label{
            margin-bottom:5px;
            font-size:16px;
        }
        input{
            width:61px;
            height:34px;
            font-size:20px;
            font-weight:500;
            text-align:center;
        }
    }
    .btn-skg{
        margin-top:18px;
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
}
.Sls.sampai {
    margin:20px 0px;
}
}

@media only screen and (min-width:932px) and (max-width:1280px) {
gap:20px;
max-width:932px;
h1{
    margin-bottom: 20px;
    font-size: 24px; 
}
.hitung{
    width: 440px;
    padding: 40px 20px 50px 20px;  

    .Sls {
        gap:10px;
        h2{
            margin-top:18px;
        }
        .inp {
            label{
                margin-bottom:5px;
                font-size:14px;
            }
            input{
                width: 50px;
                height: 29px;
                font-size: 15px;
                font-weight: 500;
            }
        }
        .btn-skg button {
                font-size: 12px;
                padding: 6px 12px 6px 12px;
        }
    }  
    .Sls.sampai {
        margin: 20px 0px;
    }
    .btn button {
        font-size: 12px;
        padding: 8px 18px 8px 18px;
    }

}
}
@media only screen and (max-width:932px) and (min-width:640px) {
gap: 30px;
max-width: 640px;
flex-direction: column-reverse;    
align-items:center;
h1{
    margin-bottom: 20px;
    font-size: 24px; 
}
.hitung{
    width: 450px;
    padding: 40px 20px 50px 20px;  

    .Sls {
        gap:10px;
        h2{
            margin-top:18px;
        }
        .inp {
            label{
                margin-bottom:5px;
                font-size:14px;
            }
            input{
                width: 50px;
                height: 29px;
                font-size: 15px;
                font-weight: 500;
            }
        }
        .btn-skg button {
                font-size: 12px;
                padding: 6px 12px 6px 12px;
        }
    }  
    .Sls.sampai {
        margin: 20px 0px;
    }
    .btn button {
        font-size: 12px;
        padding: 8px 18px 8px 18px;
    }

}

}
@media only screen and (max-width:640px) and (min-width:260px){
gap: 10px;
max-width: 360px;
flex-direction: column-reverse;
.hitung{
    width: 360px;
    padding: 20px 20px 20px 20px;
    .Sls{
        gap: 8px;
        h2{
            margin-top: 5px;
            width: 70px;
            font-size: 16px;
        }
        .inp{
            label{  
                margin-bottom: 5px;
                font-size: 13px;
            }
            input{
                width: 45px;
                height: 26px;
                font-size: 16px;
            }
        }
        .btn-skg{
            margin-top: 18px;
            button{
                font-size: 13px;
                padding: 8px 11px 8px 11px;
            }

        }

    }
    .Sls.sampai{
        margin: 0px 0px 20px;
    }
    hr {
        display:block;
        margin: 20px 0px;
        opacity:.5;
    
}
h1{
    margin-bottom: 6px;
    font-size: 22px;
}
}
}
@media only screen and (max-width:400px) {
max-width: 275px;
.hitung {
    width: 275px;
    padding: 20px 10px 20px 10px;
    h1 {
        margin-bottom: 6px;
        font-size: 20px;
    }
    .Sls {
        gap: 8px;
        h2 {
            margin-top: 0;
            width: 70px;
            font-size: 16px;
            width: 26px;
            font-size: 16px;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
        }
        .inp input {
            width: 45px;
            height: 26px;
            font-size: 16px;
        }
        .inp label {
            margin-bottom: 5px;
            font-size: 13px;
        }
        .btn-skg {
            margin-top: 18px;
            button {
                font-size: 11px;
                padding: 6px 4px 6px 4px;
            }
        }
    }
    .btn button {
        font-size: 12px;
        padding: 6px 12px 6px 12px;
    }

}


}



`

