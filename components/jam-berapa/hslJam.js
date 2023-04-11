import React from 'react'
import styled from 'styled-components'

export default function HslJam({wkt}) {
const{jam,menit,detik,jamS,menitS,detikS,option} = wkt

    function addZ(x){
      if(x < 10){
        const ne = `0${x}`
        return ne
      }else{
        return x
      }
    }

  function hitungjam() {
    const mulai = (jam*3600) + (menit*60) + (detik*1)
    const sampai = (jamS*3600) + (menitS*60) + (detikS*1)
    if(Number.isNaN(mulai) && Number.isNaN(sampai)) {
      return " "
    }
    else{
    if(option === 'lalu'){
        const sls = Math.abs(mulai - sampai)
        const hJam = (sls - (sls%3600))/3600
        const hMenit = ((sls%3600)-((sls%3600)%60))/60
        const hDetik = (sls%3600)%60
        return `${addZ(hJam)} : ${addZ(hMenit)} : ${addZ(hDetik)} `
    }
    else{
        const sls = mulai + sampai
        const hJam = (sls - (sls%3600))/3600
        const hMenit = ((sls%3600)-((sls%3600)%60))/60
        const hDetik = (sls%3600)%60
        if(hJam > 23) {
        return `${addZ(hJam%23)} : ${addZ(hMenit)} : ${addZ(hDetik)} besoknya`
        }else {
            return `${addZ(hJam%23)} : ${addZ(hMenit)} : ${addZ(hDetik)} `
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
