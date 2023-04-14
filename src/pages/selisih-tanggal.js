import React from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components'
import TglS from '../../components/Selisih-tgl/tglS'
import Menubtm from '../../components/menu-res/Menubtm'

export default function SlshTgl() {
  return (
    <Mycont>
    <Header krmSlshTgl="on"/>
    <TglS/>
    <p className='power'>Powered By <a href='http://www.ybriliant.com' target="_blank">www.ybriliant.com</a></p>
    <Menubtm krmSlshTgl="on"/>
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
p.power{
  a{
    color:blue;
  }
  position:fixed;
  bottom:20px;
  left:13vw;
  opacity:.7;
}
@media only screen and (max-width:931px) and (min-width:640px) {
  p.power{
  bottom:18vh;
}
}
`
