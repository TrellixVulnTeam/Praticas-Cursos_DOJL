"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseSingleton_1 = require("./DatabaseSingleton");
let db;
db = DatabaseSingleton_1.DatabaseSingleton.getInstance(); //aqui seria o lugar do famoso 'new'
db.executarQuery('SELECT * FROM tbCliente');
