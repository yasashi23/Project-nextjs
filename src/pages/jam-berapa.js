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
height:90vh;
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
@media only screen and (max-width:931px) and (min-width:640px) {
  p.power{
  bottom:14vh;
}
}
@media only screen and (max-width:639px) and (min-width:400px){
  p.power{
  bottom:20vh;
}
}

`
