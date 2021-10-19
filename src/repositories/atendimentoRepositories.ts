import { conexao } from '../dataBase/conexao';
import { atendimento } from './../models/atendimentoModels';


export class AtendimentoRepositorio{

    adicionarTabela(atendimento : atendimento) : Promise<atendimento>{
        const sql = `INSERT INTO atendimentos SET ?`

        return new Promise((resolve , reject) => {
            conexao.query(sql, atendimento, (erro ) => {
                    if (erro) {
                        return reject(erro);
                    } else {
                        return resolve(atendimento);
                    }
                })
        })
        
    }

    lista() : Promise <atendimento[]>{
        const sql = 'SELECT * FROM atendimentos '
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

    pesquisaId(id : number) : Promise<atendimento> {
        const sql = `SELECT * FROM atendimentos WHERE ID = ${id}`
        
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
        const sql = `DELETE FROM atendimentos WHERE ID = ${id}`
        
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

    alterar(id : number , item : any) : Promise<atendimento>{

        const sql = `UPDATE atendimentos SET ? WHERE ID = ${id}`
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
