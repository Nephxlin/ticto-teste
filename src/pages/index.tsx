import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Luther Marques Cordeiro - front-end Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>

        <div>
          <div>
            <h1 className='unnamed-character-style-2'>Logo</h1>
            <button>NOVA TRANSAÇÃO</button>
          </div>
        </div>

        <div>
          <div>
            <span>Saídas</span>
            <p>ICON</p>
          </div>
          <div>
            <p>
              R$ 1.529.289,52
            </p>
          </div>
        </div>

        <div>
          <div>
            <span>Saldo Total</span>
          </div>
          <div>
            <p>
              R$ 50,00
            </p>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Lixeira</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Compras no mercado</td>
              <td>R$ 150,00</td>
              <td>Alimentação</td>
              <td>10/04/2023</td>
              <td><a href="#">Excluir</a></td>
            </tr>
            <tr>
              <td>Assinatura Netflix</td>
              <td>R$ 45,00</td>
              <td>Entretenimento</td>
              <td>05/04/2023</td>
              <td><a href="#">Excluir</a></td>
            </tr>
            <tr>
              <td>Gasolina</td>
              <td>R$ 80,00</td>
              <td>Transporte</td>
              <td>02/04/2023</td>
              <td><a href="#">Excluir</a></td>
            </tr>
            <tr>
              <td>Conserto do celular</td>
              <td>R$ 350,00</td>
              <td>Tecnologia</td>
              <td>28/03/2023</td>
              <td><a href="#">Excluir</a></td>
            </tr>
            <tr>
              <td>Roupas novas</td>
              <td>R$ 250,00</td>
              <td>Moda</td>
              <td>25/03/2023</td>
              <td><a href="#">Excluir</a></td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}
