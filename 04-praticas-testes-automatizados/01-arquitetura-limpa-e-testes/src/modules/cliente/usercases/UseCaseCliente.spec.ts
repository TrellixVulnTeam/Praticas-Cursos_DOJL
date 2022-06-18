import { UseCaseCliente } from "./UseCaseCliente";

describe('teste de casos de uso do cliente', () =>{
    const ucc = new UseCaseCliente();
    
    test('Testando recuperar cliente', () => {
        expect(ucc.recuperarPeloId(1)).toBeDefined();
    });
    
    test('Recuperando cliente que não existe',() => {
        expect(ucc.recuperarPeloId(2)).toBe(null);
    })
    
    test('Testando recuperar cliente', () => {
        expect(ucc.recuperarPeloId(1)).toBe(null);
    });
});

