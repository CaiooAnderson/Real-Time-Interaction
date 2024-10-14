<<<<<<< HEAD
import { obterCookie } from "../utils/cookies.js";
import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io("/usuarios", {
  auth: {
    token: obterCookie("tokenJwt")
  }
});

socket.on("connect_error", (erro) => {
  alert(erro);
  window.location.href = "/login/index.html";
})
=======
import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io();
>>>>>>> cf7a14947b8c68885b3793593a08a0ad5f60e5a9


function selecionarDocumento(nome) {
  socket.emit("selecionar_documento", nome, (texto) => {
    atualizaTextoEditor(texto);
  });
}

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome) {
  socket.emit("excluir_documento", nome);
}

socket.on("excluir_documento_sucesso", (nome) => {
  alertarERedirecionar(nome);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
