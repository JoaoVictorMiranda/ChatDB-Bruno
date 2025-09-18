import { connection } from "./connection.js";




export async function pedirPermissao(salaId, userId) {
    let comando = `
        INSERT INTO salaPermissao (sala_id, usuario_id, aprovado) VALUES (?, ?, FALSE);
    `

    let [info] = await connection.query(comando, [salaId, userId]);
    return info.affectedRows;
}


export async function aceitarPermissao(salaId, userId) {
    const comando = `
        UPDATE salaPermissao SET aprovado = TRUE WHERE sala_id = ? AND usuario_id = ?;
    `
    let [info] = await connection.query(comando, [salaId, userId])
    return info.affectedRows;
}


export async function verificarDonoSala(salaId) {
    const comando = `
        SELECT usuario_id FROM sala WHERE id = ?;
    `

    let [rows] = await connection.query(comando, [salaId]);
    return rows.length > 0 ? rows[0] : null;
}


export async function verificarPermissao(salaId, userId) {
    const comando = `
        SELECT * FROM salaPermissao
        WHERE sala_id = ? AND usuario_id = ? AND aprovado = TRUE;
    `

    let [rows] = await connection.query(comando, [salaId, userId]);
    return rows.length > 0 ? rows[0] : null;
}
