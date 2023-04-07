import { useEffect, useState } from "react"
export default function JamBrp() {
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchD = async () => {
      const res = await fetch('/api/jam')
      const dat = await res.json()
      setData(dat)
    }
    fetchD()
  }, [])
  console.log(data)
  return (
    <div>JamBrp</div>
  )
}
