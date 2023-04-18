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
        if(setJam.length === 1 && setJam < 10) {
            setJamVal(`0${setJam}`)
        }
        if(setMenit.length === 1 && setMenit < 10) {
            setMenitVal(`0${setMenit}`)
        }
        if(setDetik.length === 1 && setDetik < 10) {
            setDetikVal(`0${setDetik}`)
        }
        if(setJamS.length === 1 && setJamS < 10) {
            setJamValS(`0${setJamS}`)
        }
        if(setMenitS.length === 1 && setMenitS< 10) {
            setMenitValS(`0${setMenitS}`)
        }   
        if(setDetikS.length === 1 && setDetikS < 10) {
            setDetikValS(`0${setDetikS}`)
        }                           
   setHasil({mulai,sampai,jam:setJam, menit:setMenit, detik:setDetik, jamS:setJamS, menitS:setMenitS,detikS: setDetikS,buka:0 })        
    }
    function cleanDat() {
            setJamVal('')
            setMenitVal('')
            setDetikVal('')
            setJamValS('')
            setMenitValS('')
            setDetikValS('')
            setMulai('')
            setSampai('')
            setHasil({jam:'0', menit:'0', detik:'0', jamS:'0', menitS:'0',detikS:'0', mulai:'0',sampai:'0',buka:1})
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
    const tmTgl = ["JamTgl","MenitTgl","DetikTgl"]
    const tmTgls = ["JamsTgl","MenitsTgl","DetiksTgl"]
    const changeM = [handleJ,handleM,handleD]
    const changeS = [handleJs,handleMs,handleDs]
    const cekJamM = [cekJam(setJam),cekMenit(setMenit),cekDetik(setDetik)]
    const cekJamSa = [cekJamS(setJamS),cekMenitS(setMenitS),cekDetikS(setDetikS)]
    const minM = ["0","0","0"]
    const maxM = ["24","59","59"]
    
    // set sekarang value
    function cekValMulai(){
        const date = new Date()
        const [hour,minute,second,dateC] = [date.getHours(),date.getMinutes(),date.getSeconds(),date.toISOString().substr(0, 10)]

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
        setMulai(dateC)

    }
    function cekValSampai(){
        const date = new Date()
        let [hour,minute,second,dateC] = [date.getHours(),date.getMinutes(),date.getSeconds(),date.toISOString().substr(0, 10)]

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
        setSampai(dateC)
    }


  return (
    <Mycontain>
        <div className="form">
        <h1>Selisih Tanggal</h1>
        <div className="cont-inp">
            <h2>Mulai</h2>
            <div className="inputan">
                <div className="inp date">
                    <label htmlFor={sls[0]}></label>
                    <input type="date" name={sls[0]} id={sls[0]} value={val[0]} onChange={(e) => setMulai(e.target.value)}/>
                </div>
                <div className="inp-time">
                    {tm.map((e,i) => (
                        <div className="input-tm" key={i}>
                            <label htmlFor={tmTgl[i]}>{e}</label>
                            <input type="number" name={tmTgl[i]} id={tmTgl[i]} value={cekJamM[i]} onChange={changeM[i]} min={minM[i]} max={maxM[i]}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="btn-skg">
            <button onClick={cekValMulai}>Sekarang</button>
            </div>
        </div>
        <div className="line"></div>
        <div className="cont-inp bawah">
            <h2>{sls[1]}</h2>
            <div className="inputan">
                <div className="inp date">
                    <label htmlFor={sls[1]}></label>
                    <input type="date" name={sls[1]} id={sls[1]} value={val[1]} onChange={(e) => setSampai(e.target.value)}/>
                </div>            
                <div className="inp-time">
                    {tmS.map((e,i) => (
                        <div className="input-tm" key={i}>
                            <label htmlFor={tmTgls[i]}>{tm[i]}</label>
                            <input type="number" name={tmTgls[i]} id={tmTgls[i]} value={cekJamSa[i]} onChange={changeS[i]} min={minM[i]} max={maxM[i]}/>
                        </div>
                    ))}
                </div>            
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
        <TglHsl data={hasil}/>
    </Mycontain>
  )
}

const Mycontain = styled.div`
.line{
    width:100%;
    height:0.5px;
    background-color:black;
    opacity:.2;
    margin: 20px 0px;
}
align-items:center;
position:relative;
top:50px;
h1{
    text-align:center;
    margin-bottom:20px;
}
    max-width: 1300px;
    justify-content: center;
    display: flex;
    gap: 50px;
.form{
    width: 500px;
    height: 430px;
    box-sizing: border-box;
    padding: 40px 20px 50px 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.25);
    border-radius: 20px;
    .cont-inp{
        display:flex;
        justify-content:space-between;
        button {
        margin-top:36px;
        font-size: 14px;
        padding: 8px 18px 8px 18px;
        border-radius: 4px;
        border: none;
        color: white;
        font-weight: 600;
        cursor: pointer;
        background-color: #6b6b6b;
            }
        h2{
        margin-top:36px;
        width: 114px;
        }
        
        .inputan {
            display:flex;
            flex-direction:column;
            align-items:center;
            label{
            margin-bottom: 5px;
            font-size: 16px;
            }
            .inp.date{
                input{
                width: 180px;
                height: 32px;
                font-size: 21px;
                align-items: center;
                text-align: center;
                }
            }
            .inp-time{
            display: flex;
            gap: 10px;
            margin-top: 10px;
                .input-tm{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    input{
                        width: 56px;
                        height: 32px;
                        font-size: 19px;
                        font-weight: 500;
                        text-align: center;
                    }
                }
            }
        }
    }
    .cont-inp.bawah    {
        margin: 0px 0px 20px 0px;
    }
.btn{
    display: flex;
    justify-content: center;
    gap: 18px;
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

@media only screen and (min-width:932px) and (max-width:1280px) {
max-width: 932px;   
gap:20px;
h1 {
    margin-bottom: 20px;
    font-size: 25px;
}
.form{
    width: 450px;
    .cont-inp {
        h2{
            margin-top: 36px;
            width: 92px;
            font-size: 17px;
        }
        .inputan{
            label {
            margin-bottom: 4px;
            font-size: 14px;
            }
            .inp.date input {
                width: 135px;
                height: 22px;
                font-size: 15px;
            }

            .inp-time{
                gap: 9px;
                margin-top: 10px;
            .input-tm {
                input {
                font-size:16px;
                width: 46px;
                height: 27px;
                }
                font-size: 15px;
            }
            }
        }
        button {
            margin-top: 36px;
            font-size: 12px;
            padding: 6px 14px 6px 14px;
        }
    }
    .btn button {
        font-size:12px;
    }
}
}
@media only screen and (min-width:640px) and (max-width:931px) {
gap: 12px;
max-width: 640px;
flex-direction: column-reverse;    
align-items:center;
top:-10px;

h1 {
    margin-bottom: 10px;
    font-size: 22px;
}

.form{
    width: 410px;
    height:350px;
    padding: 20px 20px 16px 20px;
    .cont-inp {
        h2{
            margin-top: 36px;
            width: 92px;
            font-size: 17px;
        }
        .inputan{
            label {
            margin-bottom: 4px;
            font-size: 14px;
            }
            .inp.date input {
                width: 135px;
                height: 22px;
                font-size: 15px;
            }

            .inp-time{
                gap: 9px;
                margin-top: 10px;
            .input-tm {
                input {
                font-size:16px;
                width: 46px;
                height: 27px;
                }
                font-size: 15px;
            }
            }
        }
        button {
            margin-top: 36px;
            font-size: 12px;
            padding: 6px 14px 6px 14px;
        }
    }
    .btn button {
        font-size:12px;
    }
}
}
@media only screen and (max-width:640px) and (min-width:260px){

max-width: 360px;
gap: 20px;
top:0px;
${'' /* margin-bottom:2s00px; */}
flex-direction: column-reverse;
.form{
    width: 360px;
    height: 325px;
    padding: 13px 20px 24px 20px;
    .cont-inp{
        gap: 9px;
        h2{
            margin-top: 0px;
            width: 26px;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            font-size: 18px;
        }
        .inputan{
            label{
                margin-bottom: 5px;
                font-size: 12px;
            }
            .inp.date {
                input{
                        width: 140px;
                        height: 26px;
                        font-size: 16px;
                }
            }
            .inp-time{
                    gap: 5px;
                    margin-top: 3px;
                    .input-tm input{
                            width: 46px;
                            height: 24px;
                            font-size: 16px;
                    }
            }
        }
        button{
                margin-top: 25px;
                font-size: 13px;
                padding: 8px 10px 8px 10px;
        }
    }
    .cont-inp.bawah{
        margin: 0px 0px 20px 0px;
    }
}
.line{
    margin: 16px 0px;
}

h1{
    text-align: center;
    margin-bottom: 8px;
    font-size: 20px;
}
}
@media only screen and (max-width:400px){
max-width: 275px;
gap: 20px;
top: 0px;
.form {
    width: 275px;
    height: 305px;
    padding: 9px 6px 24px 6px;
    .cont-inp {
    gap: 9px;
    .btn-skg button{
        margin-top: 25px;
        font-size: 11px;
        padding: 6px 4px 6px 4px;
    }
    
    }
    .btn {
        button {
                font-size: 12px;
                padding: 6px 12px 6px 12px;
        }
    }
}



}



`
