import styled from "styled-components"

export default function Header() {
  return (
    <Mycontain>
        <h1>
            Calculator Waktu
        </h1>
    </Mycontain>
  )
}

const Mycontain = styled.div`
${'' /* border:1px solid red; */}
display:flex;
align-items:center;
justify-content:center;
h1{
    margin-top:20px;
}
`


