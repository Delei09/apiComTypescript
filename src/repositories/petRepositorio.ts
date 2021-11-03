import { conexao } from '../dataBase/conexao';
import fs from 'fs'
import path from 'path'



 type pet = {
    nomePet : string ,
    tipo : string ,
    imagem : string
}



export default class PetRepositorio{


    adicionarTabela(pet : pet) : Promise<pet>{
        const extensao = path.extname(pet.imagem)
        const novoCaminho = `/home/administrador/Documentos/Treinamento/apiTypescript/src/imagens/${pet.nomePet}${extensao}`
        const sql = 'INSERT INTO pets SET ?'
        
        
        return ( new Promise ( (resolve , reject) => {
            fs.createReadStream(pet.imagem)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish' , (error : Error) => {
                if(error){
                        return reject(error)
                }else{
                    const petOK = {...pet , imagem : novoCaminho}

                    conexao.query(sql , petOK, (err, result) => {
                        if(err){
                            return reject (err)
                        }else{
                            return resolve(petOK)
                        }
                    })
                }
            })
        })
            
        )
        
        
    }

    lista() : Promise <pet[]>{
        const sql = 'SELECT * FROM pets '
        return new Promise((resolve , reject) => {
            conexao.query(sql, (erro, result ) => {
                    if (erro) {
                        return reject(erro);
                    } else {
                        return resolve(result);
                    }
                })
        })
    }

    pesquisaId(id : number) : Promise<pet> {
        const sql = `SELECT * FROM pets WHERE ID = ${id}`
        
        return new Promise ( (resolve , reject) => {
            
            conexao.query(sql , (erro , result) => {
                if(erro){
                   return  reject(erro)
                }else{
                    return resolve(result)
                }
            })
        })
    }

    deletar(id : number) : Promise<any> {
        const sql = `DELETE FROM pets WHERE ID = ${id}`
        
        return new Promise( (resolve, reject) => {
            conexao.query(sql , (erro , result) => {
                if(erro){
                   return  reject(erro)
                }else{
                    return resolve('Deletado com sucesso!')
                }
            })
        } ) 
    }

    alterar(id : number , item : any) : Promise<pet>{

        const sql = `UPDATE pets SET ? WHERE ID = ${id}`
        return new Promise( (resolve, reject) => {
            conexao.query(sql , item, (erro , result) => {
                if(erro){
                   return  reject(erro)
                }else{
                    return resolve(item)
                }
            })
        } ) 
    }

}
