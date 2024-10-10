import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://Caio:123@cluster0.nspir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

let documentosColecao, usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db("WebSockets");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuarios");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };
