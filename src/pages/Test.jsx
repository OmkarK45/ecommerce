import axios from "axios"
import { useEffect, useState } from "react"
export default function Test() {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("/api/products")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    }
    fetch()
  }, [])

  return <div>{JSON.stringify(data)}</div>
}
