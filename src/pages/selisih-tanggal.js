import React from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components'
import TglS from '../../components/Selisih-tgl/tglS'
import Menubtm from '../../components/menu-res/Menubtm'

export default function SlshTgl() {
  return (
    <Mycont>
    <Header krmSlshTgl="on" headCal="atas on"/>
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
@media only screen and (max-width:932px) and (min-width:640px) {
    height: 702px;
    padding-top: 104px;
    padding-bottom: 132px;
p.power {
    position: relative;
    bottom: 0px;
    left: inherit;
    padding-top: 15px;
}

}
@media only screen and (max-width:640px) and (min-width:260px) {
position:relative;
padding-bottom: 117px;
    padding-top: 84px;
    height: 765px;
overflow: inherit;

  p.power{
  bottom:0px;
  left:inherit;
  font-size: 12px;
  margin-top:5px;
  position:relative;
}
.atas.on{
  top:0px;
}
}

@media only screen and (max-width:400px){
    height: 856px;
    padding-top: 94px;
    padding-bottom: 132px;
p.power {
    position: relative;
    bottom: 0px;
    left: inherit;
    padding-top: 15px;
    font-size: 13px;
}
}

`
