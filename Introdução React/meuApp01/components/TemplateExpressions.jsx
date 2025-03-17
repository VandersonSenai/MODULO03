import React from "react";
import FirstComponent from "./FirstComponent";

const TemplateExpressions = () => {
  let vTeste = "3";
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
            'vTeste'==='3' ? <p>Hi</p> : <FirstComponent/>
        } 
    
    </div>
  );

};

export default TemplateExpressions;
