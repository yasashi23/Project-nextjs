import styled from "styled-components"



export default function JamS() {
  return (
    <Mycontain>
        <h1>selisih jam</h1>
        <form action="" method="post">
            <div className="mulai">
                <h2>Mulai Dari</h2>
                <div className="inp">
                <label htmlFor="Jam">Jam</label>
                <input type="number" name="Jam" id="Jam" value="2" min="1" max="24"/>
                </div>
                <div className="inp">
                <label htmlFor="Menit">Menit</label>
                <input type="number" name="Menit" id="Menit" value="" />
                </div>
                <div className="inp">
                <label htmlFor="">Detik</label>
                <input type="text" name="Detik" id="Detik" value="" />
                </div>
            </div>
            <div className="sampai"></div>
        </form>
    </Mycontain>
  )
}

const Mycontain = styled.div`
${'' /* .inp{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    ${'' /* input{
        width:61px;
        height:34px;
    } */}
} */}
`