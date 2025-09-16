import { connection } from "./connection.js";


export async function inserirPermissao(salaId, usuarioId, permissao) {
    let comando = `
 INSERT INTO salaPermissao (sala_id, usuario_id, aprovado) VALUES (?, ?, TRUE);
 `
    let [info] = await connection.query(comando, [salaId, usuarioId, permissao])
}