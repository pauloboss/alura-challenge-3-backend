function formataTamanhoArquivoEmMB(tamanho, casas = 2, texto = " MB") {
  return (tamanho / (1024 * 1024)).toFixed(casas) + texto;
}

module.exports = { formataTamanhoArquivoEmMB };
