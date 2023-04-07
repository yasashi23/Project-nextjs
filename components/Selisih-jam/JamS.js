import TfDat from "./tfDat"
import styled from "styled-components"
import { useState } from "react"
import { useForm } from "react-hook-form"



export default function JamS(props) {
        // register
        const {register, handleSubmit} = useForm()
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
        function mintaDat() {

        }
    // HANDLE NYA
    function handleJ(e) {
        let dat = e.target.value
            setJamVal(dat)
            setHasil({ ...hasil, [e.target.name]: dat})
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

    // function for submit
    const onSUbmit = (event) => {
        event.preventDefault()
        // fetch('/api/jam', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type' : 'application/json',
        //     },
        //     body:JSON.stringify({jam:setJam, menit:setMenit, detik:setDetik, jamS:setJamS, menitS:setMenitS ,detikS:setDetikS })
        // })
        // .then((res) => res.json())
        // .then((dat) => {
        //     console.log(dat)
        // }).catch((err) => {
        //     console.error(err)
        // })
        props.onSubmit(hasil)
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
    console.log(hasil)
  return (
    <Mycontain>
        <h1>selisih jam</h1>
        <form action="" method="post" className="frm" onSubmit={(e) => onSUbmit(e)}>
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
                <h2>Sampai :</h2>
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
            </div>
                <button type="submit">klik</button>
        </form>
        <TfDat jam={hasil} />
    </Mycontain>
  )
}

const Mycontain = styled.div`
.frm{
display:flex;
flex-direction:column;
gap: 50px;
button{
    width: 60px;
}
}
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