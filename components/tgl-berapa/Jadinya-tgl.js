import React from 'react'
import styled from 'styled-components'

export default function JadinyaTgl({data}) {
  const {mulai,jam,menit,detik,jamS,menitS,detikS,date,month,year, opt,buka} = data

    function addZ(x){
      if(x < 10){
        const ne = `0${x}`
        return ne
      }else{
        return x
      }
    }

    const hari = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at","Sabtu"]
    const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]

    function hitung(o='hari'){
      const[jamNew,menitNew,detikNew,] = [addZ(jam),addZ(menit),addZ(detik)]
      const useThis =`${mulai}T${jamNew}:${menitNew}:${detikNew}`
      const getTime = (new Date(useThis).getTime())

      if(Number.isNaN(getTime)){
        return ""
      }
      // 1000 * 3600 * 24
      else{
          if(opt === 'lalu'){
            const cDate = getTime - ((jamS*3600*1000) + (menitS*60*1000) + (detikS*1000) + (date*24*3600*1000) + (month*30*24*3600*1000) + (year*365*24*3600*1000))
            const dateNow = new Date(cDate)
            const [newDay,newDate,newMonth,newYear,newHour,newMinute,newSecond] = [dateNow.getDay(),dateNow.getDate(),dateNow.getMonth(),dateNow.getFullYear(),dateNow.getHours(),dateNow.getMinutes(),dateNow.getSeconds()]

            if(o === 'hari') {
              const thisIs = `${hari[newDay]} ${newDate} ${bulan[newMonth]} ${newYear}`
              return thisIs
            }else{
              const thisIs = `Jam: ${addZ(newHour)}:${addZ(newMinute)}:${addZ(newSecond)}`
              return thisIs
            }
 
          }else{
            const cDate = getTime + ((jamS*3600*1000) + (menitS*60*1000) + (detikS*1000) + (date*24*3600*1000) + (month*30*24*3600*1000) + (year*365*24*3600*1000))
            const dateNow = new Date(cDate)
            const [newDay,newDate,newMonth,newYear,newHour,newMinute,newSecond] = [dateNow.getDay(),dateNow.getDate(),dateNow.getMonth(),dateNow.getFullYear(),dateNow.getHours(),dateNow.getMinutes(),dateNow.getSeconds()]
            if(o === 'hari') {
              const thisIs = `${hari[newDay]}, ${newDate} ${bulan[newMonth]} ${newYear}.`
              return thisIs
            }else{
              const thisIs = `Jam: ${addZ(newHour)}:${addZ(newMinute)}:${addZ(newSecond)}`
              return thisIs
            }
                
          }
          
      }

  
    }


  return (
    <Mycont>
      <h1 className={buka == 0 ? "buka" : "tutup"}>Jadinya Hari</h1>
      <div className={buka == 0 ? "cont buka" : "cont tutup"}>
      <h3>{hitung()}</h3>
      <h5><span>{hitung('jam')}</span></h5>
      </div>
    </Mycont>
    
  )
}

const Mycont = styled.div`
    width: 500px;
    height: 450px;
    gap: 0px;
    box-sizing: border-box;
    padding: 40px 10px 50px 10px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .cont{
    display: flex;
    flex-direction: column;
    align-items: center;
      overflow:hidden;
      h3{
        font-size: 34px;
      }
      h5{
        margin-top:15px;
        font-size: 24px;
        font-weight: 100;
        span{
          font-weight:600;
          font-size:28px;
        }
      }
    }
    h1.buka{
      margin-bottom:50px;
      margin-top:0%;
      transition:1s;
    }
    h1.tutup{
      margin-top:35%;
      margin-bottom:0px;
      transition:.8s;
    }

    .cont.tutup{
      height:0%;
      opacity:0;
      transition:.4s;
    }
    .cont.buka{
      height:100%;
      opacity:10;
      transition:1s;
    }

@media only screen and (min-width:932px) and (max-width:1280px) {
width: 440px;
h1.tutup {
  margin-top: 35%;
}
.cont {
  h3 {
    font-size: 28px;
  }
  h5 {
    span {
      font-size: 22px;
    }
  }
}
}
@media only screen and (max-width:931px) and (min-width:640px) {
width: 440px;
h1.tutup {
  margin-top: 35%;
}
.cont {
  h3 {
    font-size: 28px;
  }
  h5 {
    span {
      font-size: 22px;
    }
  }
}
}
@media only screen and (max-width:931px) and (min-width:640px) {
width: 440px;
height: 211px;
padding: 31px 10px 31px 10px;
h1.buka{
font-size: 20px;
margin-bottom: 13px;
}
h1.tutup {
  margin-top: 10%;
}
.cont {
  h3 {
    font-size: 28px;
  }
  h5 {
    span {
      font-size: 22px;
    }
  }
}
}

@media only screen and (max-width:639px) and (min-width:260px) {
    width: 360px;
    height: 250px;
    padding: 40px 10px 50px 10px;
    h1.buka{
      margin-bottom: 24px;
      margin-top: 0%;
    }
    h1.tutup{
      margin-top: 18%;
      font-size:24px;
    }
    .cont {
      h3{
        font-size: 20px;
      }
      h5{
        margin-top: 0px;
        font-size: 24px;
        span {
          font-size: 18px;
        }
      }
    }
}
@media only screen and (max-width:400px){
width: 275px;
height: 250px;
 h1.tutup {
    font-size: 24px;
}
h1.buka {
    font-size: 16px;
}


}

`