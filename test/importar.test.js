const supertest = require("supertest")
const app = require("../app")
const path = require('path')

describe("importarTransacoes", () => {
  it("Deve importar arquivo - Com sucesso", async () => {
    //mock file
    const arquivoTeste = path.join(__dirname,'testeFile.txt');

    return supertest(app)
      .post("/transacoes/importar")
      .attach('upload_file',arquivoTeste)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("nome", "testeFile.txt");
        expect(res.body).toHaveProperty("tamanho", "0.00 MB");
      });
  });
});
