import chatController from './controller/userController.js'
import salaController from './controller/salaController.js'
import salaPermissao from './controller/permissaoSalaController.js'
import mensagemController from './controller/mensagemController.js'

export default function navegar(api) {
        api.use(chatController)
        api.use(salaController)
        api.use(salaPermissao)
        api.use(mensagemController)
}