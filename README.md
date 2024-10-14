# Real-time-interaction

1. Aplicar o fluxo de cadastro, login e armazenamento de JWT, na prática

Cadastrando senhas criptografadas;
Autenticando os usuários e gerando o JWT no servidor, depois mandar para o front-end;
Guardando o JWT nos cookies, no front-end. Definindo e lendo um cookie, deletando ao fazer logout, etc.

2. Controlar acessos

Utilizando middlewares do Socket.IO para verificar a autenticidade do cliente. Registrando uma função middleware no servidor e ela, basicamente, concede ou bloqueia o acesso de um cliente tentando se conectar ao servidor;

Para garantir que esse middleware seja aplicado apenas nas páginas restritas do Documento, um namespace deve ser criado para registrar o middleware. Nomeando o namespace como Usuarios, que apenas os usuários autenticados possam acessar.

3. Controlar informações localmente

Criando uma lista local para controlar as conexões dos documentos, para saber qual usuário entrava em qual documento;
Utilizando socket.data para armazenar as informações no socket. Usando essa propriedade, especificamente, para conseguir saber se um usuário já havia entrado no documento ou não. Podendo usar essa propriedade para diversas finalidades, para implementar funcionalidades ainda mais avançadas no Documento.