import React from 'react'
import styled from 'styled-components'

export default function TglHsl({data}) {
    const {mulai,sampai} = data
  return (
    <Mycontain>
        ini TglHsl<br/>
        {mulai.length} <br/>
        {mulai}
    </Mycontain>
  )
}

const Mycontain = styled.div``

