import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { Cards } from "../../components/Cards/Cards"


export const Temuriylar = () => {
  const [token, setToken] = useState([])

  axios
    .get("https://book-service-layer.herokuapp.com/author/genreId/1")
    .then((data) => setToken(data.data))
    .catch((error) => console.log(error))
  return(
    <div className="container mt-5 pb-4">
      {token.length &&
        <ul className="d-flex flex-wrap justify-content-between list-unstyled p-0 m-0">
          {token.map(e => (
            <Cards key={e.id} item={e} />
          ))}
        </ul>}
    </div>
  )
}

