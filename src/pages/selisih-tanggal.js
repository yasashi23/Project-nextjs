import React from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components'
import TglS from '../../components/Selisih-tgl/tglS'

export default function SlshTgl() {
  return (
    <Mycont>
    <Header krmSlshTgl="on"/>
    <TglS/>
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
