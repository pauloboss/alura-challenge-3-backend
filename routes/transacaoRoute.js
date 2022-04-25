const router = require("express").Router();
const TransacaoController = require('../controllers/TransacaoController')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/transacoes', TransacaoController.index)
router.post('/transacoes/importar', upload.single('upload_file'),TransacaoController.importarTransacoes)

module.exports = router;