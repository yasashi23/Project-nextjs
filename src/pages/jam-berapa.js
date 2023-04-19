import React from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components'
import JamBrp from '../../components/jam-berapa/jamBrp'
import Menubtm from '../../components/menu-res/Menubtm'

export default function SlshTgl() {
  return (
    <Mycont>
    <Header krmJambrp="on"/>
    <JamBrp/>
            <p className='power'>Powered By <a href='http://www.ybriliant.com' target="_blank">www.ybriliant.com</a></p>
    <Menubtm krmJambrp="on"/>
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
.JamBrp {
  display:none;
}
p.power{
  a{
    color:blue;
  }
  position:fixed;
  bottom:25px;
  opacity:.7;
}
@media only screen and (max-width:932px) and (min-width:640px) {
height: 580px;
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
  p.power{
  bottom:115px;
  font-size: 12px;
}
}
@media only screen and (max-width:400px) {
    height: 463px;
    padding-top: 94px;
    padding-bottom: 132px;

p.power {
    position: relative;
    bottom: 0px;
    left: inherit;
    padding-top: 21px;
    font-size: 13px;
}
}

`
