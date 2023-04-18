
import styled from "styled-components"


export default function JamBrp({data}) {

  const{jam,menit,detik,jamS,menitS,detikS,sbuka} = data

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
      
      <h1 id="main" className={sbuka == 0 ? "buka" : ""}>Hasil Selisih Dari Jam</h1>
      <div className={sbuka == 0 ? "detail buka" : "detail tutup"}>
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
height:350px;
box-sizing: border-box;
  h1{
    text-align: center;
    margin-bottom: 0px;
    margin-top:25%;
    transition:1s;
  }
  .detail {
    display: flex;
    gap: 28px;
    flex-direction: column;

      .per {
      display: flex;
      align-items: baseline;
        p {
        width: 160px;
        font-size: 17px;
        font-weight: 500;
        }
        h4 {
          font-size: 20px;
          font-weight: 800;
        }
      }
}
h1.buka{
  margin-top:0%;
  margin-bottom:30px;
  transition:1s;
}
.detail.tutup{
    overflow:hidden;
    height:0%;
    overflow:0;
    transition:0.5s;
}
.detail.buka{
  overflow:hidden;
  transition:1s;
  height:100%;
}

@media only screen and (min-width:932px) and (max-width:1280px) {
  padding: 40px 25px 50px 30px;
  width: 440px;
  h1{
    font-size:24px;
    margin-top:30%;
  }
  .detail .per {
    p {
    width: 135px;
    font-size: 14px;
    }
  h4 {
    font-size:16px;
  }
  }
}
@media only screen and (max-width:931px) and (min-width:640px) {
  padding: 40px 30px 50px 30px;
  width: 450px;
  height:280px;
  h1{
    font-size:24px;
    margin-top:20%;
  }
  .detail .per {
    p {
    width: 135px;
    font-size: 14px;
    }
  h4 {
    font-size:16px;
  }
  }
}
@media only screen and (max-width:640px) and (min-width:260px){
width: 360px;
height: 285px;
padding: 40px 11px 30px 18px;
h1{
    margin-bottom: 6px;
    font-size: 22px;
    margin-top: 20%;
}
h1.buka{
      margin-bottom: 30px;
}
.detail{
  .per {
    p{
    width: 100px;
    font-size: 14px;
    }
    h4{
      font-size: 16px;
    }
  }
}
}
@media only screen and (max-width:400px){
width: 275px;
height: 285px;
padding: 40px 11px 30px 18px;
h1 {
    font-size: 20px;
    margin-top: 80px;
}
h1.buka {
    margin-bottom: 30px;
    font-size: 16px;
}
.detail {
    gap: 17px;
    .per {
        align-items: center;
        flex-direction: column;
        p {
            width: 130px;
            font-size: 14px;
            text-align: center;
        }
        h4 {
            font-size: 16px;
        }
    }

}

}


`