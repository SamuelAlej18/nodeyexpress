const express = require('express')
const app = express()
app.get('/', (req, res)=>{res.send('Este es el primer servidor que voy a subir de Samuel Alejandro')
    console.log('funciona')
})

const puerto = process.env.PORT || 3000
app.listen(puerto, ()=>{
    console.log(`el servidor está escuchando en el puerto ${puerto}`)
})



