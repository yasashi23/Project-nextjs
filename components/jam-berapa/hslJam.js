import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

export default function HslJam({wkt}) {
const{jam,menit,detik,jamS,menitS,detikS,option} = wkt
  function hitungjam() {
    const mulai = (jam*3600) + (menit*60) + (detik*1)
    const sampai = (jamS*3600) + (menitS*60) + (detikS*1)
    if(Number.isNaN(mulai) && Number.isNaN(sampai)) {
      return " "
    }
    else{
    if(option === 'lalu'){
        if(mulai > sampai){
        const sls = mulai - sampai
        const hJam = (sls - (sls%3600))/3600
        const hMenit = ((sls%3600)-((sls%3600)%60))/60
        const hDetik = (sls%3600)%60
        return `${hJam} : ${hMenit} : ${hDetik} `
        }
        else{
            const sls2 = sampai - mulai
            const hJam2 = (sls2-(sls2%3600))/3600
            const hMenit2 = ((sls2%3600)-((sls2%3600)%60))/60
            const hDetik2 = (sls2%3600)%60
            return `${hJam2} : ${hMenit2} : ${hDetik2} `
        }
    }
    else{
        const sls = mulai + sampai
        const hJam = (sls - (sls%3600))/3600
        const hMenit = ((sls%3600)-((sls%3600)%60))/60
        const hDetik = (sls%3600)%60
        if(hJam > 23) {
        return `${hJam%23} : ${hMenit} : ${hDetik} besoknya`
        }else {
            return `${hJam%23} : ${hMenit} : ${hDetik} `
        }
    }
  }
  }


  return (
    <Mycontain>
        <h2>Jadinya Jam</h2>
        <h3>{hitungjam()}</h3>
    </Mycontain>
  )
}

const Mycontain = styled.div`

`
