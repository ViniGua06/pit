import React, { useState, useEffect } from "react";

interface IForm {
  opt: "logar" | "cadastrar" | "contato";
}

const Form = (opt: IForm) => {
  if (opt.opt === "logar") {
    return (
      <>
        <form id="formLogin">
          <label>Jaca</label>
          <input type="email" />
          <label>Senha</label>
          <input type="password" />
          <button>Enviar</button>
        </form>
      </>
    );
  } else if (opt.opt === "cadastrar") {
    return (
      <>
        <form id="formCadastro">
          <label>Nome</label>
          <button>Enviar</button>
        </form>
      </>
    );
  }

  return (
    <>
      <form id="formContato">
        <label>Assunto</label>
        <input type="text" />
        <label>Nome</label>
        <input type="text" />
        <label>Mensagem</label>
        <textarea></textarea>
        <button>Enviar</button>
      </form>
    </>
  );
};

export default Form;
