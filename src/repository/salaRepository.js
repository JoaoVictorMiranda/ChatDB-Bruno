import { connection } from "./connection.js";



export async function inserirSala(nome, usuarioId) {
    const comando = ` 
    INSERT INTO sala (nome, usuario_id) VALUES (?, ?);    
`

    let [info] = await connection.query(comando, [nome, usuarioId]);
    return info.insertId
}


export async function buscarSalaPorId(salaId) {

}