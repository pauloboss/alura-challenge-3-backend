const path = require("path");
const fs = require("fs");
const readline = require("readline");

const leitorCSV = (pathFile) => {
  const caminhoArquivo = path.join(__dirname, "..", pathFile);

  const arquivoStream = fs.createReadStream(caminhoArquivo);

  const lineReader = readline.createInterface({
    input: arquivoStream,
    crlfDelay: Infinity,
    terminal: false,
  });
  var i = 1;
  lineReader.on("line", function (linha) {
    console.log(`Linha ${i}: `, linha);
    i++;
  });

  lineReader.on("close", () => {
    fs.unlinkSync(caminhoArquivo);
  });
};

module.exports = {
  leitorCSV,
};
