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
      const exmpl = [new Date(mulai),new Date(sampai)]
      const [mulaiD, sampaiD] = exmpl
      const sls = mulaiD.getTime() - sampaiD.getTime()
      const sls2 = sampaiD.getTime() - mulaiD.getTime()

      if(Number.isNaN(sls) && Number.isNaN(sls2)){
        return ""
      }
      else{

        if(mulaiD.getTime() > sampaiD.getTime()) {
          const newD = Math.abs(Math.floor(sls / (1000 * 3600 * 24)))
          let tahunD = Math.floor(newD/365)
          let sisaHriD = newD % 365
          let kabisatD = Math.floor(tahunD/4)
          if(tahunD % 100 == 0 && tahun % 400 != 0) {
            kabisatD--;
          }
          sisaHriD += kabisatD
          if(sisaHriD >= 365) {
            tahunD++
            sisaHriD -= 365
          }
          // const newVd = new Date(newD)
          return tahunD
        }else{
          const newD2 = Math.abs(Math.floor(sls2 / (1000 * 3600 * 24)))
          let tahunD2 = Math.floor(newD2/365)
          let sisaHriD2 = newD2 % 365
          let kabisatD2 = Math.floor(tahunD2/4)
          if(tahunD2 % 100 == 0 && tahun % 400 != 0) {
            kabisatD2--;
          }
          sisaHriD2 += kabisatD2
          if(sisaHriD2 >= 365) {
            tahunD2++
            sisaHriD2 -= 365
          }
          // const newVd = new Date(newD)
          return tahunD2
          // const newVd2 = new Date(newD2)
        }
      }
    }
    
  return (
    <Mycontain>
        ini TglHsl<br/>
        {hitung()} {} {jam}<br/>
        {sampai} {jamS}
    </Mycontain>
  )
}

const Mycontain = styled.div``

