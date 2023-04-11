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
        setHasil({mulai,jam:setJam, menit:setMenit, detik:setDetik, jamS:setJamS, menitS:setMenitS,detikS: setDetikS,date:setDay,month:setMonth, year:setYear ,opt })    
    }
    function clear() {
            setJamVal('')
            setMenitVal('')
            setDetikVal('')
            setJamValS('')
            setMenitValS('')
            setDetikValS('')

            setHasil({jam:'', menit:'', detik:'', jamS:'', menitS:'',detikS:'', mulai:''})            
        }

    // loop
    const tm = ["Jam","Menit","Detik"]
    const tS = ["JamS","MenitS","DetikS"]
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
        <div className="cont-inp">
            <h3>{"Mulai Dari"}</h3>
            <div className="inputan">
                <div className="inp date">
                    <label htmlFor="Mulai"></label>
                    <input type="date" name="Mulai" id="Mulai" value={mulai} onChange={(e) => setMulai(e.target.value)}/>
                </div>
                <div className="inp-time">
                    {tm.map((e,i) => (
                        <div className="input-tm" key={i}>
                            <label htmlFor={e}>{e}</label>
                            <input type="number" name={e} id={e} value={cekJam(cekJamM[i],e)} onChange={(z) => handle(z.target.value,e)} min={minM[i]} max={maxM[i]}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="btn-skg">
            
            <button onClick={cekValMulai}>Sekarang</button>
            </div>
        </div> 
        <div className="choose">
            <div className="inp-input">
                <div className="inp-cont inp-clock">
                            {tS.map((el,i) => (
                <div className="inp">       
                    <input type="number" name={el} id={el} min={minM[i]} max={maxM[i]} value={cekJam(cekJamMS[i],el)} onChange={(e) => handle(e.target.value,el)} required/>
                    <label htmlFor={el}>{tm[i]}</label>
                </div>                    
                    ))}
                </div>
                <div className="inp-cont inp-date">
                    {dayDate.map((el,i) => (
                <div className="inp">       
                    <input type="number" name={el} id={el} min={minDate[i]} max={maxDate[i]} value={cekDate(cekDaten[i],el)} onChange={(e) => handle(e.target.value,el)} required/>
                    <label htmlFor={el}>{el}</label>
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
    .choose{
        display:flex;
        align-items:center;
            .inp-input{
        display:flex;
        flex-direction:column;
        .inp-cont{
            display:flex;
        .inp{
            display:flex;
            flex-direction:column;
            flex-direction:column;
            align-items:center;
            justify-content: center;            
        }
        input{
            width:60px;
            text-align:center;
        }
        }
    }
    }
}

`

