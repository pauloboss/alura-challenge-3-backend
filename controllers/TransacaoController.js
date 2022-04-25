const leitorCSV = require("../helpers/leitorCSV");
const formataTamanhoArquivoEmMB = require('../helpers/utils')

class TransacaoController {
  static async index(_req, res) {
    try {
      res.render("transacao/index");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async importarTransacoes(req, res) {
    try {
      if (!req.hasOwnProperty("file")) {
        throw new Error("Arquivo Inválido");
      }

      return res.status(200).json({
        nome: req.file.originalname,
        tamanho: formataTamanhoArquivoEmMB(req.file.size),
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
 
}

module.exports = TransacaoController;
