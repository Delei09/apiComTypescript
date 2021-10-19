import router from "./router";
import express from 'express'
import {Tabela} from './dataBase/Tabela'

const tabela  = new Tabela()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
tabela.criar()


app.listen(3003 , () => {
    console.log('Servidor esta no ar')
})
