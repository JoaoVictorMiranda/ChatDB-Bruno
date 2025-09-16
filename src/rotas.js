import chatController from './controller/userController.js'
import salaController from './controller/salaController.js'

export default function navegar(api) {
        api.use(chatController)
        api.use(salaController)
}