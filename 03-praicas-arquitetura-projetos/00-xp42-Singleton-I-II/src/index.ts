import { DatabaseSingleton } from "./DatabaseSingleton";

let db: DatabaseSingleton;

db = DatabaseSingleton.getInstance(); //aqui seria o lugar do famoso 'new'

db.executarQuery('SELECT * FROM tbCliente');