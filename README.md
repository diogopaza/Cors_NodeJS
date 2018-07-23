<h2>CORS(Cross-Origin Resource Sharing) ou Controle de acesso HTTP</h2>

<p>CORS é uma funcionalidade do HTML5 que permite que um site acesse recursos
de outro site mesmo estando em domínios diferentes</p>


1- Iremos iniciar nosso projeto:
Com o comando npm init no console nós criamos noss package.json

2-Logo após criaremos nosso index.js para fazer nossos teste

3-Instalaremos nosso framework express

npm i express --save

4-Também temos que instalar nosso módulo cors

npm i cors --save

5- nosso index.js para teste<br>
const express = require('express')<br>
const cors = require('cors')<br>
const app = express()

const PORT = process.env.PORT || 3000

//app.use(cors())


app.get('/users', (req, res) => {

    res.json([
        {
            name:'Diogo'
        },
        {
            name:'Paza'
        }
    ])
})


app.listen(PORT, () =>{<br>
    console.log(`Server listening on port ${PORT}`)
})

**Note que nosso app.use(cors()) está comentado, deixei assim para iniciarmos os 

testes

https://jsbin.com/ esse site é fácil para testar nossos códigos

Na opção de javascript vamos testar esse código om nosso servidor
rodando atraves do comando node index.js

fetch('http://localhost:3000/users')
  .then(r => console.log(r))

ao mandarmos executar esse ccódigo irá aparecer um erro, podemos
com o botão direito encima da janela do javascirpt e clicar em inspecionar, 
logo após vamos no console do nosso navegador e irá aparecer o erro:

No 'Access-Control-Allow-Origin' header is present on the requested resource.

Ou seja precisamos configurar nossa aplicação para que ela tenha acesso http a outros dominios

