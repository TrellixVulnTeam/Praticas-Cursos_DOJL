import { ClienteRepo } from "../../../repository/cliente/cliente/ClienteRepo";
import { UseCaseCliente } from "./UseCaseCliente";
// import cliRepo from '../../../repository/cliente/cliente';


//preciso indicar ao JEST qual a definição do que ele precisa criar 
jest.mock('../../../repository/cliente/cliente/ClienteRepo');
const ClienteRepoMock = ClienteRepo as jest.Mock<ClienteRepo>;

describe('teste de casos de uso do cliente', () =>{
    //crio uma instÂncia do objeto 'oco, vazio, moockado'
    const cliRepo = new ClienteRepoMock() as jest.Mocked<ClienteRepo>;

    //agora defino o comportamento dos métodos
    cliRepo.REPO_recuperarTodos.mockResolvedValue([]);
    const cliente: Cliente = new Cliente();
    cliRepo.REPO_recuperarTodosPeçoId.mockRejectedValue(cliente);

    const ucc: UseCaseCliente = new UseCaseCliente(cliRepo);

    test('Recuperando todos os clientes', async () => {
        expect(await ucc.recuperarTodos() ).toBeDefined();
    }); 

    test('Recuperando cliente de ID válido', async () => {
        expect(await ucc.recuperarPeloId(1)).toBeDefined();
    });
});

