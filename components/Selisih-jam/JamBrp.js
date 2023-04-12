
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
border-radius: 20px;
padding: 40px 50px 50px 48px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0,0,0,0.25);
width: 500px;
box-sizing: border-box;
  h1{
    text-align: center;
    margin-bottom: 30px;
  }
  .detail {
    display: flex;
    gap: 28px;
    flex-direction: column;
      .per {
      display: flex;
      align-items: baseline;
        p {
        width: 140px;
        font-size: 17px;
        font-weight: 100;
        }
        h4 {
          font-size: 20px;
          font-weight: 900;
        }
      }
}
`