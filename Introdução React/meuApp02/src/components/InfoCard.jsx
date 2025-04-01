import { useParams, useNavigate } from "react-router-dom";


const InfoCard = () => {
  const navigate = useNavigate();

    const { id } = useParams();

    console.log("O ID : ", id);

    const VoltarHome = () => {
      console.log("nagivate : ", id);
      navigate("/login")
    }

    

  return (
    <div style={{display:"flex", flexDirection: "column-reverse"}}>
      infoCard do cartão: {id}
      <button onClick={VoltarHome}>voltar</button>
    </div>
  )
}

export default InfoCard