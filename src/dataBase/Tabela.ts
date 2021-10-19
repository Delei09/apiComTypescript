import {conexao} from './conexao'

export class Tabela {

    criar(){
        this.tabela()
    }

    private tabela(){
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos ( ID int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, pet varchar(50) ,status varchar(50) ,observacao text ,data date ,dataATual date , PRIMARY KEY(ID))'

        conexao.query(sql, (error , result) => {
            if(error){
                console.log(error)
            }else{
                console.log('Tabela atendimento ok')
            }
        })
    }
}