import React from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components'
import JamS from '../../components/Selisih-jam/JamS'
import Menubtm from '../../components/menu-res/Menubtm'



export default function Home() {
  return (
    <Mycont>
    <Header krmSls="on"/>
    <JamS className="test"/>
    <p className='power'>Powered By <a href='http://www.ybriliant.com' target="_blank">www.ybriliant.com</a></p>
    <Menubtm krmSls="on"/>
    </Mycont>
  )
}

const Mycont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:90vh;
overflow:hidden;

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
  p.power {
    bottom: 18vh;
}



}


`