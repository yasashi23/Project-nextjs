import { useEffect, useState } from "react"
import styled from "styled-components"


export default function JamBrp({data}) {

  const{jam,menit,detik,jamS,menitS,detikS} = data

  function hitungjam() {
    const mulai = (jam*3600) + (menit*60) + (detik*1)
    const sampai = (jamS*3600) + (menitS*60) + (detikS*1)
    if(Number.isNaN(mulai) && Number.isNaN(sampai)) {
      return " "
    }
    else{
      if(mulai > sampai){
      const sls = mulai - sampai
      const hJam = (sls - (sls%3600))/3600
      const hMenit = ((sls%3600)-((sls%3600)%60))/60
      const hDetik = (sls%3600)%60
      return `${hJam} Jam ${hMenit} Menit ${hDetik} Detik`
      }
      else{
        const sls2 = sampai - mulai
        const hJam2 = (sls2-(sls2%3600))/3600
        const hMenit2 = ((sls2%3600)-((sls2%3600)%60))/60
        const hDetik2 = (sls2%3600)%60
        return `${hJam2} Jam ${hMenit2} Menit ${hDetik2} Detik`
      }
  }
  }

  function hitungMenit(){
        const mulai = (jam*3600) + (menit*60) + (detik*1)
    const sampai = (jamS*3600) + (menitS*60) + (detikS*1)
    if(Number.isNaN(mulai) && Number.isNaN(sampai)) {
      return " "
    }
    else {
      if(mulai > sampai){
      const sls = mulai - sampai
      const hMenit = (sls-(sls%60))/60
      const hDetik = (sls%60)
      return `${hMenit} Menit ${hDetik} Detik`
      }
      else{
        const sls2 = sampai - mulai
      const hMenit2 = (sls2-(sls2%60))/60
      const hDetik2 = (sls2%60)
      return `${hMenit2} Menit ${hDetik2} Detik`
      }
    }
  }


    function hitungDetik(){
        const mulai = (jam*3600) + (menit*60) + (detik*1)
    const sampai = (jamS*3600) + (menitS*60) + (detikS*1)
    if(Number.isNaN(mulai) && Number.isNaN(sampai)) {
      return " "
    }
    else {
      if(mulai > sampai){
      const sls = mulai - sampai
      return `${sls} Detik`
      }
      else{
        const sls2 = sampai - mulai
      return `${sls2} Detik`
      }
    }
  }



  return (
    <Mycontain>
    
      <h1 id="main">HASIL SELISIHNYA</h1>
      <div className="detail">
        <div className="per">
        <p>Kalau Jam Jadi</p><h4>{hitungjam()}</h4>
        </div>
        <div className="per">
          <p>Kalau Menit Jadi</p>
          <h4>{hitungMenit()}</h4>
        </div>
        <div className="per">
          <p>Kalau Detik Jadi</p>
          <h4>{hitungDetik()}</h4>
        </div>
      </div>
    </Mycontain>
  )
}
const Mycontain = styled.div`

`