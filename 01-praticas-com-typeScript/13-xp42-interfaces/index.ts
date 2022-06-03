interface Usuario {
    nome: string;
    email: string;
    addres?: string;
}

function getUsers(): Usuario {
    return {
        nome: 'Victor',
        email: 'exemplo@email.com'
    }
}

function setUser(usuario: Usuario) {
    //...
}