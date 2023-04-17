import React,{useState} from 'react'
import styled from 'styled-components'
import JadinyaTgl from './Jadinya-tgl'


export default function TanggalBrp() {
    const [mulai,setMulai] = useState('')
    const [setJam, setJamVal] = useState('')
    const [setMenit, setMenitVal] = useState('')
    const [setDetik, setDetikVal] = useState('')
    const [hasil, setHasil] = useState('')
    // yang lalu dan akan datang
    const [setJamS, setJamValS] = useState('')
    const [setMenitS, setMenitValS] = useState('')
    const [setDetikS, setDetikValS] = useState('')
    // tahun tanggal bulan
    const [setDay, setDayVal] = useState('')
    const [setMonth, setMonthVal] = useState('')
    const [setYear, setYearVal] = useState('')
    // opt
    const [opt, setOpt] = useState('datang')

    // function
    function handle(j,l){
    if(l=='Jam'){
        setJamVal(j)
    }
    if(l=='Menit'){
        setMenitVal(j)
    }
    if(l=='Detik'){
        setDetikVal(j)
    }
    if(l == 'JamS'){
        setJamValS(j)
    }
    if(l == 'MenitS'){
        setMenitValS(j)
    }  
    if(l == 'DetikS'){
        setDetikValS(j)
    }
    if(l == 'Hari'){
        setDayVal(j)
    }   
    if( l == 'Bulan'){
        setMonthVal(j)
    }
    if(l =='Tahun'){
        setYearVal(j)
    }
    }

    function cekJam(i,l) {
        if(l === 'Jam' || l === 'JamS'){
            if(i > 23 || i.length > 2) {
                if(l === 'JamS'){
                    setJamValS("23"); 
                    return "23"
                }else{
                setJamVal("23")
                return "23"}
            }else{
                return i
            }
        }
        if(l === 'Menit' || l === 'MenitS') {
            if(i > 59 || i.length > 2) {
                if(l === 'MenitS'){
                    setMenitValS("59"); 
                    return "59"
                }else{
                setMenitVal("59")
                return "59"}            
            }else{
                return i
            }
        }if(l === 'Detik' || l === 'DetikS') {
            if(i > 59 || i.length > 2) {
                if(l === 'DetikS'){
                    setDetikValS("59"); 
                    return "59"
                }else{
                setDetikVal("59")
                return "59"}

            }else{
                return i
            }
        }
    }  
        function cekDate(i,l) {
        if(l === 'Hari' ){
            if(i > 1000 || i.length > 5) {
                setDayVal("1000")
                return "1000"
            }else{
                return i
            }
        }
        if(l === 'Bulan' ){
            if(i > 1001 || i.length > 4) {
                setMonthVal("1000")
                return "1000"
            }else{
                return i
            }
        }
        if(l === 'Tahun' ){
            if(i > 1000 || i.length > 4) {
                setYearVal("1000")
                return "1000"
            }else{
                return i
            }
        }                    
    } 
    function cekValMulai(){
        const date = new Date()
        const [hour,minute,second,dateC] = [date.getHours(),date.getMinutes(),date.getSeconds(),date.toISOString().substr(0, 10)]

        setJamVal(hour)
        setMenitVal(minute)
        setDetikVal(second)
        setMulai(dateC)
    }   
    
    // function btnDat
    function btnDat(k) {

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
        if(setMenitS.length === 1 && setMenitS < 10) {
            setMenitValS(`0${setMenitS}`)
        }   
        if(setDetikS.length === 1 && setDetikS < 10) {
            setDetikValS(`0${setDetikS}`)
        }                           
        setHasil({mulai,jam:setJam, menit:setMenit, detik:setDetik, jamS:setJamS, menitS:setMenitS,detikS: setDetikS,date:setDay,month:setMonth, year:setYear,opt,buka:0 })    
    }
    function clear() {
            setJamVal('')
            setMenitVal('')
            setDetikVal('')
            setJamValS('')
            setMenitValS('')
            setDetikValS('')
            setDayVal('')
            setMonthVal('')
            setYearVal('')
            setMulai('')

            setHasil({jam:'', menit:'', detik:'', jamS:'', menitS:'',detikS:'', mulai:'',date:'',month:'', year:'',buka:1})            
        }

    // loop
    const tm = ["Jam","Menit","Detik"]
    const tmTglbrp = ["JamTglbrp2","MenitTglbrp2","DetikTglbrp2"]
    const tS = ["JamS","MenitS","DetikS"]
    const tmTgl = ["JamTglbrp","MenitTglbrp","DetikTglbrp"]
    const tmTgls = ["HariTglbrp","BulanTglbrp","TahunTglbrp"]
    const minM = ["0","0","0"]
    const maxM = ["24","59","59"]
    const cekJamM = [setJam,setMenit,setDetik]
    const cekJamMS = [setJamS,setMenitS,setDetikS]
    // 
    const dayDate = ["Hari","Bulan","Tahun"]
    const minDate = ["1000","1000","1000"]
    const maxDate = ["24","59","59"]
    const cekDaten = [setDay,setMonth,setYear]
  return (
    <MyCont>
    <div className="form">
        <h1>Tanggal Berapa?</h1>
        <div className="cont-inp">
            <h2>Mulai</h2>
            <div className="inputan">
                <div className="inp date">
                    <label htmlFor="MulaiTglbrp"></label>
                    <input type="date" name="MulaiTglbrp" id="MulaiTglbrp" value={mulai} onChange={(e) => setMulai(e.target.value)} placeholder='dd/mm/yyyy'/>
                </div>
                <div className="inp-time">
                    {tm.map((e,i) => (
                        <div className="input-tm" key={i}>
                            <label htmlFor={tmTgl[i]}>{e}</label>
                            <input type="number" name={tmTgl[i]} id={tmTgl[i]} value={cekJam(cekJamM[i],e)} onChange={(z) => handle(z.target.value,e)} min={minM[i]} max={maxM[i]}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="btn-skg">
            
            <button onClick={cekValMulai}>Sekarang</button>
            </div>
        </div> 
     <div className="line"></div>   
        <div className="choose">
            <div className="inp-input">
                <div className="inp-cont inp-clock">
                            {tS.map((el,i) => (
                <div className="inp" key={i}>       
                    <input type="number" name={tmTglbrp[i]} id={tmTglbrp[i]} min={minM[i]} max={maxM[i]} value={cekJam(cekJamMS[i],el)} onChange={(e) => handle(e.target.value,el)} required/>
                    <label htmlFor={tmTglbrp[i]}>{tm[i]}</label>
                </div>                    
                    ))}
                </div>
                <div className="inp-cont inp-date">
                    {dayDate.map((el,i) => (
                <div className="inp" key={i}>       
                    <input type="number" name={tmTgls[i]} id={tmTgls[i]} min={minDate[i]} max={maxDate[i]} value={cekDate(cekDaten[i],el)} onChange={(e) => handle(e.target.value,el)} required/>
                    <label htmlFor={tmTgls[i]}>{el}</label>
                </div>                    
                    ))}
                </div>

            </div>
                <div className='pls-choose'>
                    <label htmlFor="">
                        <select name="" id="" value={opt} onChange={(k) => setOpt(k.target.value)}>
                            <option value="datang" >Akan datang</option>
                            <option value="lalu">Yang Lalu</option>
                        </select>
                    </label>
                </div>
        </div>
        <div className="btn">
            <button onClick={btnDat}>Hitung</button>
            <button onClick={clear}>Bersihkan</button>
        </div>       
    </div>
        <JadinyaTgl data={hasil}/>
    </MyCont>
  )
}

const MyCont = styled.div`

position:relative;
top:50px;
display: flex;
max-width: 1300px;
gap: 50px;
justify-content: center;
.form{
    .line{
    width:480px;
    height:0.5px;
    background-color:black;
    opacity:.2;
    margin:20px 0px;
    ${'' /* margin: 20px 0px; */}
}
    h1{
        text-align:center;
        margin-bottom:20px;
    }
    width: 500px;
 height: 450px;
    gap: 0px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.25);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    -webkit-flex-direction: column;
    ${'' /* padding: 40px 20px 50px 20px; */}
    align-items:center;
    .cont-inp{
        display:flex;
        justify-content:center;
        gap:20px;
        h2{
        margin-top: 18px;
        width: 115px;
        }
        label {
            margin-bottom: 5px;
            font-size: 16px;
        }        
        .inputan {
            display:flex;
            flex-direction:column;
            align-items:center;
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
                display:flex;
                gap:10px;
                margin-top:5px;
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
                    .btn-skg{
                        button{
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
                    }            
        }
    
    .choose{
        display:flex;
    align-items: center;
    gap: 25px;
    margin:0px 0px 20px 0px;
    justify-content: center;
            .inp-input{
        display:flex;
        flex-direction:column;
        .inp-cont{
            display:flex;
            gap:10px;
            label{
                margin-top:5px;
                margin-bottom:0px;
            }
            .inp{
                display:flex;
                flex-direction:column;
                flex-direction:column;
                align-items:center;
                justify-content: center;            
            }
            input{
                width: 56px;
                height: 32px;
                font-size: 18px;
                font-weight: 500;
                text-align: center;
            }
        }
        .inp-date{
            margin:15px 0px 5px;
        }
    }
    select {
    height: 34px;
    margin-bottom: 20px;
}
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
gap: 20px;
.form {
    width: 440px;
    h1 {
        font-size: 25px;
        margin-bottom: 20px;
    }

    .cont-inp {
        gap:18px;
        h2 {
        width: 95px;
        font-size: 17px;
        }
        label {
            margin-bottom: 5px;
            font-size: 14px;
        }
        .inputan {
            .inp-time{
                gap:8px;
                .input-tm {
                    input{

                    width: 46px;
                    height: 27px;
                    font-size: 16px;
                    }
                }
            }
            .inp.date {
                input {
                    width: 135px;
                    height: 22px;
                    font-size: 15px;
                }
            }
        }

        .btn-skg button {
            margin-top: 21px;
            font-size: 12px;
            padding: 6px 14px 6px 14px;  
        }
    }
    .line {
        width: 90%;
    }
    .choose {
        gap: 15px;
        .inp-input {
            .inp-cont {
                gap: 8px; 
                input {
                    width: 46px;
                    height: 27px;
                    font-size: 16px;
                }
                label {
                    font-size: 13px;
                    margin-top: 5px;
                    margin-bottom: 0px;
                }
            }
            .inp-date {
                margin: 15px 0px 5px;
            }
        }
        select {
            height: 26px;
            margin-bottom: 20px;
            font-size: 12px;
        }
    }

    .form {
        .btn {
            button {
                font-size: 12px;
                padding: 8px 18px 8px 18px;
            }
        }
    }

}
}

@media only screen and (max-width:931px) and (min-width:640px) {
gap: 30px;
max-width: 640px;
flex-direction: column-reverse;    
align-items:center;
gap: 20px;
.form {
    width: 440px;
    height: 390px;
    h1 {
        font-size: 25px;
        margin-bottom: 20px;
    }

    .cont-inp {
        gap:18px;
        h2 {
        width: 95px;
        font-size: 17px;
        }
        label {
            margin-bottom: 5px;
            font-size: 14px;
        }
        .inputan {
            .inp-time{
                gap:8px;
                .input-tm {
                    input{

                    width: 46px;
                    height: 27px;
                    font-size: 16px;
                    }
                }
            }
            .inp.date {
                input {
                    width: 135px;
                    height: 22px;
                    font-size: 15px;
                }
            }
        }

        .btn-skg button {
            margin-top: 21px;
            font-size: 12px;
            padding: 6px 14px 6px 14px;  
        }
    }
    .line {
        width: 90%;
    }
    .choose {
        gap: 15px;
        .inp-input {
            .inp-cont {
                gap: 8px; 
                input {
                    width: 46px;
                    height: 27px;
                    font-size: 16px;
                }
                label {
                    font-size: 13px;
                    margin-top: 5px;
                    margin-bottom: 0px;
                }
            }
            .inp-date {
                margin: 15px 0px 5px;
            }
        }
        select {
            height: 26px;
            margin-bottom: 20px;
            font-size: 12px;
        }
    }

    .form {
        .btn {
            button {
                font-size: 12px;
                padding: 8px 18px 8px 18px;
            }
        }
    }

}

}

@media only screen and (max-width:639px) and (min-width:400px) {
top: 20px;
max-width: 360px;
gap: 10px;
padding-top:110px;
padding-bottom:115px;
flex-direction: column-reverse;
.form {
    width: 360px;
    height: 392px;
    gap: 0px;   
    h1{
        margin-bottom: 10px;
        font-size: 24px;
    } 
    .cont-inp{
        gap: 10px;
        h2 {
        ${'' /* margin-top: 18px; */}
        margin-bottom: 16px;
                    width: 26px;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            font-size: 18px;
        }
        label{
        margin-bottom: 5px;
        font-size: 14px;
        }
        .inputan .inp.date input {
        width: 140px;
        height: 28px;
        font-size: 17px;
        }
        .inputan .inp-time {
        gap: 5px;
        margin-top: 5px;
            .input-tm input{
                width: 46px;
                height: 26px;
                font-size: 16px;
            }
        }

        .btn-skg button {
            margin-top: 36px;
            font-size: 14px;
            padding: 8px 7px 8px 7px;
        }

    }

    .line{
        width: 90%;
    }
    .choose{
        gap: 25px;
        margin: 0px 0px 5px 0px;

        .inp-input .inp-cont{
            label{
                margin-bottom: 0px;
                font-size: 14px;
            }
            gap: 6px;
        }
        .inp-input .inp-cont input{
            width: 46px;
            height: 26px;
            font-size: 16px;
        }
        .inp-input .inp-date{
            margin: 15px 0px 5px;
        }
        select{
            height: 26px;
            margin-bottom: 20px;
        }

    }

}




}

`

