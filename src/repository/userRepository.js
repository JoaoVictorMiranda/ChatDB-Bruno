import { connection } from "./connection.js";



export async function criarUsuario(dados) {
        const comando = `
        INSERT INTO usuario (nome, email, senha) VALUES (?, ?, MD5(?));
        `
        let [registro] = await connection.query(comando, [
                dados.nome,
                dados.email,
                dados.senha
        ])
        return registro.insertId
}


export async function consultarCredencial(email, senha) {
        const comando = ` 
        SELECT id, nome, email FROM usuario WHERE email = ? AND senha = MD5(?);
        `

        let [info] = await connection.query(comando, [
                email,
                senha
        ])
        return info[0]
}

