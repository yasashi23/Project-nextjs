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
        const ini = last[0]
        const intI = parseInt(ini)
        return intI
      }
    }
    const dateM = tahun(mulai)
    console.log(typeof dateM)
    const dateS = tahun(sampai)

    function addZ(x){
      if(x < 10 ){
        const ne = `0${x}`
        return ne
      }else{
        return x
      }
    }


    function kbst(y1,y2){
      let slsh = Math.abs(y2-y1)
      let smallY = Math.min(y1,y2)
      let yKbst = 0
      console.log(smallY)
      for(let i = 0; i <= slsh; i++){
        console.log('ini loopping')
            if (tentukanKabisat(smallY + i)) {
      yKbst++;
    }

      return yKbst;
      }



    }

      function tentukanKabisat(y){
          if (y % 4 !== 0) {
            return false;
          } else if (y % 100 !== 0) {
            return true;
          } else if (y % 400 !== 0) {
            return false;
          } else {
            return true;
          }
      }
          const tntKbst = kbst(dateM,dateS)
          console.log(`ada ${tntKbst}`)
    function hitung() {
      const mulaiJ = `${mulai}T${addZ(jam)}:${addZ(menit)}:${addZ(detik)}`
      const sampaiS = `${sampai}T${addZ(jamS)}:${addZ(menitS)}:${addZ(detikS)}`
      const exmpl = [new Date(mulaiJ),new Date(sampaiS)]
      const [mulaiD, sampaiD] = exmpl
      const sls = mulaiD.getTime() - sampaiD.getTime()

      if(Number.isNaN(sls)){
        return ""
      }
      // 1000 * 3600 * 24
      else{

          const pDetik = Math.abs((sls-(sls%(1000)))/1000)
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
            console.log('62 nih bos')
          }
          console.log(`${bnt(pDetik,'tahun')} tahun ${bnt(pDetik,'bulan')} bulan ${bnt(pDetik,'minggu')} minggu ${bnt(pDetik,'hari')} hari ${bnt(pDetik,'jam')} jam ${bnt(pDetik,'menit')} menit ${bnt(pDetik,'detik')} detik`)
          return tahunD
      }
    }


    function bnt(x,b){

      let tahunnya = ((x-(x%(3600*24*365)))/(3600*24*365))
      let sDt = (x%(3600*24*365))
      let sisaDtkDriThn = sDt
      let realHtg = (365*24*3600)
      // console.log('realHtg 1', realHtg)
      let kabisat = Math.floor((sDt/(3600*24*365*4)))
      // console.log('kabisatnya',kabisat)
      // console.log('sisaDtkDriThn',sisaDtkDriThn)
      if(tahunnya % 400 == 0 && tahunnya % 100 != 0) {
            kabisat--;
            console.log('kabisatnya --')
          }
      sisaDtkDriThn -= kabisat
      if(sisaDtkDriThn >= realHtg) {
            tahunnya++
            sisaDtkDriThn -= realHtg
            console.log('yahunnya ++')
          }
          // console.log('sisaDtkDriThn2',sisaDtkDriThn)
          // console.log('realHtg',realHtg)
      const bulannya = (sisaDtkDriThn-(sisaDtkDriThn%(30*24*3600)))/(30*24*3600)
      const sisaBln = (sisaDtkDriThn%(30*24*3600))
      const minggunya = (sisaBln-(sisaBln%(7*24*3600)))/(7*24*3600)
      const sisaMinggu = (sisaBln%(7*24*3600))
      const harinya = (sisaMinggu-(sisaMinggu%(24*3600)))/(24*3600)
      const sisaHari = (sisaMinggu%(24*3600))
      const jamnya = (sisaHari-(sisaHari%(3600)))/3600
      const sisaJam = (sisaHari%(3600))
      const menitnya = (sisaJam-(sisaJam%60))/60
      const detiknya = (sisaJam%60)

        

      if(b === 'tahun'){
        return tahunnya
      }if(b === 'bulan'){
        return bulannya
      }if(b === 'minggu') {
        return minggunya
      }if(b === 'hari') {
        return harinya
      }if(b === 'jam') {
        return jamnya
      }if(b === 'menit'){
        return menitnya
      }
      else{
        return detiknya
      }

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