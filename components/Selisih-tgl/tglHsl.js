import React,{useState} from 'react'
import styled from 'styled-components'


// 1 hari = 24 jam
// 1 minggu = 7 hari
// 1 bulan = 30 hari
// 1 tahun = 365 hari
export default function TglHsl({data}) {
  const [year,setYear] = useState(0)
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
    const dateS = tahun(sampai)

    function addZ(x){
      if(x < 10 && x.length < 2){
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
      for(let i = 0; i <= slsh; i++){
      if (tentukanKabisat(smallY + i)) {
      yKbst++;
    }
  }
  // setYear(year+slsh)
    return yKbst;
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
      function hitung(y) {
      // const adaKabisat = kbst(dateM,dateS)
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
          return `${bnt(pDetik,y)}`
      }
    }


    function bnt(x,apa="semua"){
      const adaKbst = kbst(dateM,dateS)
      let tahunnya = ((x-(x%(3600*24*365)))/(3600*24*365))
      let sisaDtkDriThn = (x%(3600*24*365)) - (adaKbst*(3600*24))
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

     if(apa === 'tahun'){
       return `${tahunnya.toLocaleString('en-US')} tahun ${bulannya.toLocaleString('en-US')} bulan ${minggunya.toLocaleString('en-US')} minggu ${harinya.toLocaleString('en-US')} hari ${jamnya.toLocaleString('en-US')} jam ${menitnya.toLocaleString('en-US')} menit ${detiknya.toLocaleString('en-US')} detik`
     }
     if(apa === 'bulan'){
      const newVal = bulannya + ((tahunnya*12))
      return `${newVal.toLocaleString('en-US')} bulan ${minggunya.toLocaleString('en-US')} minggu ${harinya.toLocaleString('en-US')} hari ${jamnya.toLocaleString('en-US')} jam ${menitnya.toLocaleString('en-US')} menit ${detiknya.toLocaleString('en-US')} detik`
     }
      if(apa === 'minggu'){
      const newVal = (bulannya*4) + ((tahunnya*12*4))
      return `${newVal.toLocaleString('en-US')} minggu ${harinya.toLocaleString('en-US')} hari ${jamnya.toLocaleString('en-US')} jam ${menitnya.toLocaleString('en-US')} menit ${detiknya.toLocaleString('en-US')} detik`
     }
      if(apa === 'hari'){
      const newVal =  harinya + (minggunya*7) + (bulannya*30) + ((tahunnya*365))
      return `${newVal.toLocaleString('en-US')} hari ${jamnya.toLocaleString('en-US')} jam ${menitnya.toLocaleString('en-US')} menit ${detiknya.toLocaleString('en-US')} detik`
     }
      if(apa === 'jam'){
      const newVal = jamnya + (harinya*24) + (minggunya*7*24) + (bulannya*30*24) + (tahunnya*365*24)
      return `${newVal.toLocaleString('en-US')} jam ${menitnya.toLocaleString('en-US')} menit ${detiknya.toLocaleString('en-US')} detik`
     }
      if(apa === 'menit'){
      const newVal = menitnya + (jamnya*60) + (harinya*24*60) + (minggunya*7*24*60) + (bulannya*30*24*60) + (tahunnya*365*24*60)
      return `${newVal.toLocaleString('en-US')} menit ${detiknya.toLocaleString('en-US')} detik`
     }
      if(apa === 'detik'){
      const newVal = detiknya + (menitnya*3600) + (jamnya*3600) + (harinya*24*3600) + (minggunya*7*24*3600) + (bulannya*30*24*3600) + (tahunnya*365*24*3600)
      return `${newVal.toLocaleString('en-US')} detik`
     }

    }
    const loop = ['tahun','bulan','minggu','hari','jam','menit','detik']
    
  return (
    <Mycontain>
        ini TglHsl<br/>
      <div className="hasil">
        {loop.map((el,ind)=>(
          <div className="datanya" key={ind}>
            <h5>Kalau {el.charAt(0).toUpperCase() + el.slice(1)} Jadi</h5>
            <h4>{hitung(el)}</h4>
          </div>
        ))}
      </div>
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