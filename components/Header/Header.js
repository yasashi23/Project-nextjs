import styled from "styled-components"
import Link from "next/link"
import Head from 'next/head'
import { useState } from "react"

export default function Header({krmSls,krmJambrp,krmSlshTgl,krmTglBrp,headCal}) {

  // ARR
  const objSak = {jam:krmSls,jamBrp:krmJambrp,tanggal:krmSlshTgl,tanggalBrp:krmTglBrp,cal:headCal}

  function clickLink(k) {
    if(k == 'selisih-jam'){
        objSak.jam = "on"
        objSak.jamBrp = "off"
        objSak.tanggal = "off"
        objSak.tanggalBrp = "off"
        objSak.cal = "atas off"
    }
    if(k == 'selisih-tanggal'){
        objSak.jam = "off"
        objSak.jamBrp = "off"
        objSak.tanggal = "on"
        objSak.tanggalBrp = "off"
        objSak.cal = "atas on"

    }
    if(k == 'jam-berapa'){
        objSak.jam = "off"
        objSak.jamBrp = "on"
        objSak.tanggal = "off"
        objSak.tanggalBrp = "off"
        objSak.cal = "atas off"
    }   
    if(k == 'tanggal-berapa'){
        objSak.jam = "off"
        objSak.jamBrp = "off"
        objSak.tanggal = "off"
        objSak.tanggalBrp = "on"
        objSak.cal = "atas off"
    } 
  }


  return (
    <Mycontain className={objSak.cal}>
      <Head>
        <title>Briliant Count</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <nav className="nav-1">
          <div className="menu">
            <div className="select">
              <Link href='/' onClick={(e) => clickLink('selisih-jam')} className={objSak.jam}>Selisih Jam</Link>
            </div>
            <div className="select">
              <Link href='/jam-berapa' onClick={(e) => clickLink('selisih-tanggal')} className={objSak.jamBrp}>Jam Berapa?</Link>
            </div>
          </div>
          <div className="title"><h2>Calculator Waktu</h2></div>
          <div className="menu">
            <div className="select">
              <Link href='/selisih-tanggal' onClick={(e) => clickLink('jam-berapa')} className={objSak.tanggal}>Selisih Tanggal</Link>
            </div>
            <div className="select">
              <Link href='/tanggal-berapa' onClick={(e) => clickLink('tanggal-berapa')} className={objSak.tanggalBrp} >Tanggal Berapa?</Link>
            </div>
          </div>
        </nav>

    </Mycontain>
  )
}

const Mycontain = styled.div`
display:flex;
justify-content:center;
width:100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  position:fixed;
  top:0;
  z-index:8;
nav.nav-1 {
  display:flex;
  padding: 6vh 5px 5vh 5px;
  align-items:center;
  gap:30px;
  .menu{
    display:flex;
    gap:5px;
    a{
      text-decoration:none;
      font-weight:600;
      color:black;
      padding:15px 25px;
      border-radius:2px;
      transition:1s;
      opacity:.3;
      border:.4px solid #42c2d2;
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

@media only screen and (min-width:200px) and (max-width:932px) {

.atas.on{
  top:-50px;
}
nav.nav-1{
        padding: 20px 5px 20px 5px;
  .menu{
    display:none;
  }
}


}


`


