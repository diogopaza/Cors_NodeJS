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
const express = require('express')
const cors = require('cors')
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


app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
})

