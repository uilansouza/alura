ListaAutores: () => {
    return fetch('http://localhost:8000/api/autor')
    .then(res =>res.json())
    }
}

export default ListaAutores;

