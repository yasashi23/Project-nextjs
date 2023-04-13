import React from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components'
import JamBrp from '../../components/jam-berapa/jamBrp'

export default function SlshTgl() {
  return (
    <Mycont>
    <Header krmJambrp="on"/>
    <JamBrp/>
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
