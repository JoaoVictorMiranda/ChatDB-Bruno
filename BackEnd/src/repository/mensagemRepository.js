import { connection } from '../repository/connection.js'

export async function enviarMensagem(idSala, idUser, mensagem) {
    const VerificarSituacao = `
        SELECT id FROM salaPermissao 
        WHERE sala_id = ? AND usuario_id = ? AND aprovado = TRUE;
    `;

    const comando = `
        INSERT INTO chat (usuario_id, sala_id, mensagem, criacao) 
        VALUES (?, ?, ?, NOW());
    `;

    const [rows] = await connection.query(VerificarSituacao, [idSala, idUser]);

    if (rows.length === 0) {
        return null;
    }

    const [info] = await connection.query(comando, [idUser, idSala, mensagem]);

    return info.affectedRows;
}




export async function carregarMensagem(idUser, idSala) {
    const comando = `
      SELECT chat.id,
         chat.usuario_id,
         nome,
         mensagem,
         criacao
    FROM chat
    JOIN usuario ON chat.usuario_id = usuario.id
   WHERE sala_id = ?
   ORDER 
      BY criacao ASC;
    `
    const verificarPermissao = `
    SELECT id FROM salaPermissao WHERE sala_id = ? AND usuario_id = ? AND aprovado = TRUE;
    `
    const [permissao] = await connection.query(verificarPermissao, [idSala, idUser]);

    if (permissao.length === 0) {
        return null;
    } else {
        const [registros] = await connection.query(comando, [idSala]);
        return registros;
    }
}