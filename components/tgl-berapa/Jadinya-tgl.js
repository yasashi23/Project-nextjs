import React from 'react'
import styled from 'styled-components'

export default function JadinyaTgl({data}) {
  const {mulai,jam,menit,detik,jamS,menitS,detikS,date,month,year, opt} = data

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
              const thisIs = `${addZ(newHour)}:${addZ(newMinute)}:${addZ(newSecond)}`
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
              const thisIs = `${addZ(newHour)}:${addZ(newMinute)}:${addZ(newSecond)}`
              return thisIs
            }
                
          }
          
      }

  
    }


  return (
    <Mycont>
      <h3>{hitung()}</h3>
      <h5>{hitung('jam')}</h5>
    </Mycont>
    
  )
}

const Mycont = styled.div``