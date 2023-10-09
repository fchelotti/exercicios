import listaProdutos from '../../data/listaProdutos'
export default function repeticao2() {

    const comBorda = {
        border: "1px solid #000"
    }

    function redenrizarLinhas() {
    /*     console.log(listaProdutos)
        return <tr>temp</tr> */
        return listaProdutos.map((produto, i) => {
            return (
                <tr key={produto.id} >
                    <td style={comBorda}>{produto.id}</td>
                    <td style={comBorda}>{produto.nome}</td>
                    <td style={comBorda}>{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table style={comBorda}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {redenrizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}