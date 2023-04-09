import React from 'react'
import styled from 'styled-components'


// 1 hari = 24 jam
// 1 minggu = 7 hari
// 1 bulan = 30 hari
// 1 tahun = 365 hari
export default function TglHsl({data}) {
    const {mulai,sampai,jam,menit,detik,jamS,menitS,detikS} = data

    function tahun(x){
      if(typeof x === 'undefined') {
        return 0
      }
      else{
        const rep = x.replace("-"," ")
        const rep2 = rep.replace("-"," ")
        const last = rep2.split(" ")
        return last
      }
    }
    const dateM = tahun(mulai)
    const dateS = tahun(sampai)

    function hitung() {
      const mulaiJ = Math.abs(((jam*3600) + (menit*60) + (detik*1)) - ((jamS*3600) + (menitS*60) + (detikS*1))*1000)
      const exmpl = [new Date(mulai),new Date(sampai)]
      const [mulaiD, sampaiD] = exmpl
      const sls = (mulaiD.getTime() - sampaiD.getTime())+ mulaiJ

      if(Number.isNaN(sls)){
        return ""
      }
      // 1000 * 3600 * 24
      else{
          const perDetikD = Math.abs((sls-(sls%(1000)))/1000)
          const hariD = Math.abs((sls-(sls%(1000 * 3600 * 24)))/(1000*3600*24))
          let tahunD = (hariD-(hariD%365))/365
          console.log(`(41) tahunD ---> ${tahunD}`)
          let sisaHriD = hariD % 365
          console.log(`(43) sisaHriD ---> ${sisaHriD}`)
          let kabisatD = Math.floor(tahunD/4)
          console.log(`(45) kabisatD ---> ${kabisatD}`)
          
          if(tahunD % 100 == 0 && tahunD % 400 != 0) {
            kabisatD--;
            console.log('di if baris 47')
          }
          sisaHriD += kabisatD
          if(sisaHriD >= 365) {
            tahunD++
            sisaHriD -= 365
            console.log('di if baris 54')
          }
          let bulanD = (sisaHriD-(sisaHriD%30))/30
          let mingguD = ((sisaHriD%30)-((sisaHriD%30)%7))/7
          let perHariD = (sisaHriD%30)%7
          console.log(`(56) kabisatD ---> ${kabisatD} || sisaHriD ---> ${sisaHriD} || perHariD ---> ${perDetikD}`)
          console.log(bulanD)
          return tahunD
      }
    }


    function bantuHtg(x,b){
      const tahunD = (x-(x%(3600*24*365)))/(3600*24*365)
      const sisaThn = (x%(3600*24*365))
      const bulanD = (sisaThn-(sisaThn%(30*24*3600)))/(30*24*3600)
      const sisaBln = (sisaThn%(30*24*3600))
      const minggu = (sisaBln-(sisaBln%(7*24*3600)))
    }
    
  return (
    <Mycontain>
        ini TglHsl<br/>
        {hitung()} {} {}<br/>
        {typeof sampai} {jamS}
    </Mycontain>
  )
}

const Mycontain = styled.div``

          // const newD = Math.abs(Math.floor(sls / (1000 * 3600 * 24)))
          // let tahunD = Math.floor(newD/365)
          // let sisaHriD = newD % 365
          // let kabisatD = Math.floor(tahunD/4)
          // if(tahunD % 100 == 0 && tahun % 400 != 0) {
          //   kabisatD--;
          // }
          // sisaHriD += kabisatD
          // if(sisaHriD >= 365) {
          //   tahunD++
          //   sisaHriD -= 365
          // }
          // return tahunD