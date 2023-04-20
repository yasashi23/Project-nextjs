import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import styled from 'styled-components'
import JamS from '../../components/Selisih-jam/JamS'
import Menubtm from '../../components/menu-res/Menubtm'




export default function Home() {
  const [load, setLoad] = useState(true)
  const [masih, setMasih] = useState("masih")
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(false)
    },2000)
    
    return () => {clearTimeout(timeout); setMasih("sudah")}
  },[])

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
height:100vh;
overflow:hidden;

p.power{
  a{
    color:blue;
  }
  position:fixed;
  bottom:25px;
  opacity:.7;
}
@media only screen and (max-width:932px) and (min-width:640px) {
height: 630px;
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
  height: 570px;
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
@media only screen and (max-width:400px){
height: 570px;
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