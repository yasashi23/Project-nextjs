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
@media only screen and (max-width:932px) and (min-width:640px) {
height: 690px;
padding-top: 104px;
padding-bottom: 132px;
p.power {
    position: relative;
    bottom: inherit;
    left: inherit;
    padding-top: 15px;
}
}
@media only screen and (max-width:640px) and (min-width:260px){
height: 652px;
padding-bottom: 117px;
padding-top: 94px;
  overflow: inherit;
  p.power{
    bottom: 0px;
    font-size: 12px;
    position:relative;
    margin-top:15px;
  }
}
@media only screen and (max-width:400px){
height: 620px;
padding-top: 94px;
padding-bottom: 132px;
p.power {
    position: relative;
    bottom: inherit;
    left: inherit;
    padding-top: 15px;
    font-size: 13px;
}

}

`
