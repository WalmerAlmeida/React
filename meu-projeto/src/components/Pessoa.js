function Pessoa(props) { // também posso receber {idade, nome, foto}
    return (
        <div>
            <img src={props.foto} alt={props.nome} />
            <p>nome: {props.nome}</p>
            <p>idade: {props.idade}</p>
        </div>
    )
}

export default Pessoa