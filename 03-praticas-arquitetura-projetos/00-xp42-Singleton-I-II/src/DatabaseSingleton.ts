export class DatabaseSingleton {
    
    private static instance: DatabaseSingleton;
    //métodos para controlar a instância do singleton (que independem de ter ou não o objeto instanciado)
    
    //o contrutor precisa estar indisponível
    private constructor() {
        //por enquanto ele não faz nada (mas em um caso real teria as intruções de conexão)
        console.log("CONTRUTOR - aqui eu crio a conexão com o banco...")
    }

    public static getInstance(): DatabaseSingleton {
        if(!DatabaseSingleton.instance) {
                DatabaseSingleton.instance = new DatabaseSingleton();
        }
        return DatabaseSingleton.instance;
    }

    //métodos de negócio (auilo que o database pode fazer)
    public executarQuery(query: string): void {
        console.log("DB> " + query);
    }
}