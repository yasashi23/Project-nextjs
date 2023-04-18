import React from 'react'
import styled from 'styled-components'

export default function HslJam({wkt}) {
let {jam,menit,detik,jamS,menitS,detikS,option,buka} = wkt


    function addZ(x){
      if(x < 10){
        const ne = `0${x}`
        return ne
      }else{
        return x
      }
    }

  function hitungjam() {
    const mulai = (jam*3600) + (menit*60) + (detik*1)
    const sampai = (jamS*3600) + (menitS*60) + (detikS*1)
    if(Number.isNaN(mulai) && Number.isNaN(sampai)) {
      return " "
    }
    else{
    if(option === 'lalu'){
        const sls = Math.abs(mulai - sampai)
        const hJam = (sls - (sls%3600))/3600
        const hMenit = ((sls%3600)-((sls%3600)%60))/60
        const hDetik = (sls%3600)%60
        return `${addZ(hJam)} : ${addZ(hMenit)} : ${addZ(hDetik)} `
    }
    else{
        const sls = mulai + sampai
        const hJam = (sls - (sls%3600))/3600
        const hMenit = ((sls%3600)-((sls%3600)%60))/60
        const hDetik = (sls%3600)%60
        if(hJam > 23) {
        return `${addZ(hJam%23)} : ${addZ(hMenit)} : ${addZ(hDetik)} besoknya`
        }else {
            return `${addZ(hJam%23)} : ${addZ(hMenit)} : ${addZ(hDetik)} `
        }
    }
  }
  }


  

  return (
    <Mycontain>
      <div className={`cont ${buka == 0 ? "buka" : "tutup"}`}>
        <h1 >Jadinya Jam</h1>
        <h3>{hitungjam()}</h3>
      </div>
    </Mycontain>
  )
}

const Mycontain = styled.div`
    display: flex;
    width: 500px;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 40px 10px 50px 10px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.25);
    flex-direction: column;
    align-items: center;
    h1,h3{
      text-align:center;
    }
    .cont.buka{
      display:flex;
      flex-direction: column;
      h1{
      transition:.7s;
      margin-top:0%;
      margin-bottom:50px;
      }
      h3{
        height:100%;
        opacity:10;
        transition:1s;
        delay:2s;
        
      }
    }
    .cont.tutup{
      h1{
      margin-top:50%;
      transition:.7s;
      margin-bottom:0;
      }
    h3 {
      overflow:hidden;
      height:0;
      opacity:0;
      transition:.3s;
      delay:2s;
    }
    }
    h3{
      font-size: 32px;
      font-weight:500;
    }
@media only screen and (min-width:932px) and (max-width:1280px) {
    width: 440px;
    height: 200px;
    .cont.tutup h1 {
      margin-top:30%;
      margin-bottom: 0;
      font-size: 24px;
    }
    .cont.buka h1 {
      margin-bottom: 22px;
      font-size: 24px
    }
    

}
@media only screen and (max-width:931px) and (min-width:640px) {
    width: 440px;
    height: 200px;
    .cont.tutup h1 {
      margin-top:25%;
      margin-bottom: 0;
      font-size: 24px;
    }
    .cont.buka h1 {
      margin-bottom: 20px;
      font-size: 24px
    }
}
@media only screen and (max-width:640px) and (min-width:260px){
width: 360px;
height: 160px;  
padding: 40px 10px 50px 10px;
h3{
  font-size:24px;
}
.cont.tutup h1{
    margin-top: 10%;
    margin-bottom: 0;
    font-size:24px;
}
.cont.buka h1{
    margin-top: 0%;
    margin-bottom: 15px;
    font-size: 16px;
}
}
@media only screen and (max-width:400px) {
width: 275px;
height: 160px;
padding: 40px 10px 50px 10px;


}


`
