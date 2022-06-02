const nome: string = 'Vicícius';

function somar(numA: number, numB: number): number {
    return numA + numB;
}

console.log(somar(2, 2));

type Receita = {
    titulo: string,
    video?: string,
    ingredientes: string[];
};

