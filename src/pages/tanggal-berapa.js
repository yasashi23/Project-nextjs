import React from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components'
import TanggalBrp from '../../components/tgl-berapa/Tanggal-brp'

export default function SlshTgl() {
  return (
    <Mycont>
    <Header krmTglBrp="on"/>
    <TanggalBrp/>
    </Mycont>
  )
}

const Mycont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:100vh;
overflow:hidden;
`
