import {Response} from 'express'
import petModels from '../models/petModels'

type petType = {
    nomePet : string ,
    tipo : string ,
    imagem : string
}

class petController {

    public adicionar(res : Response , pet : petType ){

        petModels.adicionar(pet)
            .then(resultado => {
                res.status(201).json(resultado)
            })
            .catch(erro => {
                res.status(400).json(erro)
            })
    }
}

export default new petController()