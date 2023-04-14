import React from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components'
import TanggalBrp from '../../components/tgl-berapa/Tanggal-brp'
import Menubtm from '../../components/menu-res/Menubtm'

export default function SlshTgl() {
  return (
    <Mycont>
    <Header krmTglBrp="on"/>
    <TanggalBrp/>
        <p className='power'>Powered By <a href='http://www.ybriliant.com' target="_blank">www.ybriliant.com</a></p>
    <Menubtm krmTglBrp="on"/>
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
  bottom:15px;
  opacity:.7;
}
@media only screen and (max-width:931px) and (min-width:640px) {
  p.power{
  bottom:18vh;
}
}
`
