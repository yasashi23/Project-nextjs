import React from 'react'
import styled from 'styled-components'


// 1 hari = 24 jam
// 1 minggu = 7 hari
// 1 bulan = 30 hari
// 1 tahun = 365 hari
export default function TglHsl({data}) {
    const {mulai,sampai,jam,menit,detik,jamS,menitS,detikS} = data

    function toStrn(x){
      const rep = x.replace("-"," ")
      const rep2 = rep.replace("-"," ")
      const last = rep2.split(" ")
      return last
    }
    const tahun = toStrn(mulai)
  return (
    <Mycontain>
        ini TglHsl<br/>
        {tahun[0]} {jam}<br/>
        {sampai} {jamS}
    </Mycontain>
  )
}

const Mycontain = styled.div``

