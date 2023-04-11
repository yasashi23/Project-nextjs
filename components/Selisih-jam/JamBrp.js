
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
      const sls = Math.abs(mulai - sampai)
      const hJam = (sls - (sls%3600))/3600
      const hMenit = ((sls%3600)-((sls%3600)%60))/60
      const hDetik = (sls%3600)%60
      return `${hJam} Jam ${hMenit} Menit ${hDetik} Detik`
  }
  }

  function hitungMenit(){
        const mulai = (jam*3600) + (menit*60) + (detik*1)
    const sampai = (jamS*3600) + (menitS*60) + (detikS*1)
    if(Number.isNaN(mulai) && Number.isNaN(sampai)) {
      return " "
    }
    else {
      const sls = Math.abs(mulai - sampai)
      const hMenit = (sls-(sls%60))/60
      const hDetik = (sls%60)
      return `${hMenit} Menit ${hDetik} Detik`

    }
  }


    function hitungDetik(){
        const mulai = (jam*3600) + (menit*60) + (detik*1)
    const sampai = (jamS*3600) + (menitS*60) + (detikS*1)
    if(Number.isNaN(mulai) && Number.isNaN(sampai)) {
      return " "
    }
    else {
      const sls = Math.abs(mulai - sampai)
      return `${sls} Detik`
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