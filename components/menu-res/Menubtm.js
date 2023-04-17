import React from 'react'
import styled from "styled-components"
import Link from "next/link"


export default function Menubtm({krmSls,krmJambrp,krmSlshTgl,krmTglBrp}) {
      // ARR
  const objSak = {jam:krmSls,jamBrp:krmJambrp,tanggal:krmSlshTgl,tanggalBrp:krmTglBrp}

    function clickLink(k) {
    if(k == 'selisih-jam'){
        objSak.jam = "on"
        objSak.jamBrp = "off"
        objSak.tanggal = "off"
        objSak.tanggalBrp = "off"
    }
    if(k == 'selisih-tanggal'){
        objSak.jam = "off"
        objSak.jamBrp = "off"
        objSak.tanggal = "on"
        objSak.tanggalBrp = "off"
    }
    if(k == 'jam-berapa'){
        objSak.jam = "off"
        objSak.jamBrp = "on"
        objSak.tanggal = "off"
        objSak.tanggalBrp = "off"
    }   
    if(k == 'tanggal-berapa'){
        objSak.jam = "off"
        objSak.jamBrp = "off"
        objSak.tanggal = "off"
        objSak.tanggalBrp = "on"
    } 
  }




  return (
    <Mycont>
        <nav className="nav-btm">
          <div className="menu">
            <div className="select">
              <Link href='/' onClick={(e) => clickLink('selisih-jam')} className={objSak.jam}>Selisih Jam</Link>
            </div>
            <div className="select">
              <Link href='/jam-berapa' onClick={(e) => clickLink('selisih-tanggal')} className={objSak.jamBrp}>Jam Berapa?</Link>
            </div>
          </div>
          <div className="menu">
            <div className="select">
              <Link href='/selisih-tanggal' onClick={(e) => clickLink('jam-berapa')} className={objSak.tanggal}>Selisih Tanggal</Link>
            </div>
            <div className="select">
              <Link href='/tanggal-berapa' onClick={(e) => clickLink('tanggal-berapa')} className={objSak.tanggalBrp} >Tanggal Berapa?</Link>
            </div>
          </div>
        </nav>
    </Mycont>
  )
}

const Mycont = styled.div`
display:none;
@media only screen and (max-width:931px) and (min-width:200px) {
display:flex;
justify-content:center;
width:100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  position:fixed;
  bottom:0;
nav.nav-btm {
  display:flex;
  padding: 5vh 5px 5vh 5px;
  align-items:center;
  gap:12px;
  .menu{
    display:flex;
    gap:12px;
    a{
      text-decoration:none;
      font-weight:600;
      color:black;
      padding:15px 10px;
      border-radius:2px;
      transition:1s;
      opacity:.3;
      border:.7px solid #42c2d2;
    }
    a.off{
      opacity:50%;
      border:.4px solid #42c2d2;
    }
    a.on{
      background-color: #42c2d2;
      color:white;
      opacity:10;
    }
  }
}    
}



@media only screen and (max-width:639px) and (min-width:400px) {
nav.nav-btm {
  gap: 4px;
padding: 20px 5px 30px 5px;
}
nav.nav-btm .menu a {
  width: 80px;
  padding: 7px 3px;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align:center;
}
nav.nav-btm .menu{
  gap: 4px;
}



}

`