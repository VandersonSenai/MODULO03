import React from "react";
import FirstComponent from "./FirstComponent";
import SecComponent from "./SecComponent";

const TemplateExpressions = () => {
  let vTeste = "2";
  let aluno = {
    nome:"Vanderson",
    turma:"DDS-19-3",
    curso:"Desenvolvimento de Sistemas"
  }

//   if (aluno.nome==Vanderson) {
//     teste = <FirstComponent/>;
//   }
    console.log(aluno.nome)
    console.log(aluno.curso)
    console.log(aluno.turma)

  return (
    <div>
      <h3>{vTeste}</h3>
      <h4>{aluno.nome} - {aluno.turma} - {aluno.curso}</h4>
         
        {
            'vTeste'=='2' ? <p>Hi</p> : <FirstComponent/>
        } 

    
    </div>
  );

};

export default TemplateExpressions;
