import React from 'react'
import styled from 'styled-components'

export default function TglHsl({data}) {
    const {mulai,sampai} = data
  return (
    <Mycontain>
        ini TglHsl<br/>
        {typeof mulai} <br/>
        {sampai}
    </Mycontain>
  )
}

const Mycontain = styled.div``

