"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSingleton = void 0;
class DatabaseSingleton {
    //métodos para controlar a instância do singleton (que independem de ter ou não o objeto instanciado)
    //o contrutor precisa estar indisponível
    constructor() {
        //por enquanto ele não faz nada (mas em um caso real teria as intruções de conexão)
        console.log("CONTRUTOR - aqui eu crio a conexão com o banco...");
    }
    static getInstance() {
        if (!DatabaseSingleton.instance) {
            DatabaseSingleton.instance = new DatabaseSingleton();
        }
        return DatabaseSingleton.instance;
    }
    //métodos de negócio (auilo que o database pode fazer)
    executarQuery(query) {
        console.log("DB> " + query);
    }
}
exports.DatabaseSingleton = DatabaseSingleton;
