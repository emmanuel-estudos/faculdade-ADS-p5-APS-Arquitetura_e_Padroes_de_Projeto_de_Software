// extensão: classdiagram-ts
// --- EXEMPLO 1: SISTEMA DE USUÁRIOS E PEDIDOS ---

export interface IEntidade {
    id: number;
}

export abstract class Usuario implements IEntidade {
    public id: number;
    protected nome: string;
    private email: string;

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    public realizarLogin(): boolean { return true; }
}

export class Cliente extends Usuario {
    public saldo: number;
    constructor(id: number, nome: string, email: string, saldo: number) {
        super(id, nome, email);
        this.saldo = saldo;
    }
}

export class Pedido {
    public numeroPedido: string;
    public cliente: Cliente; // Associação
    constructor(numero: string, cliente: Cliente) {
        this.numeroPedido = numero;
        this.cliente = cliente;
    }
}

// --- EXEMPLO 2: REINO ANIMAL ---

export interface IPet {
    nome: string;
    brincar(): void;
}

export abstract class Animal {
    public especie: string;
    protected idade: number;

    constructor(especie: string, idade: number) {
        this.especie = especie;
        this.idade = idade;
    }

    public abstract emitirSom(): string;
}

export class Cachorro extends Animal implements IPet {
    public nome: string;
    constructor(nome: string, idade: number) {
        super("Canino", idade);
        this.nome = nome;
    }
    public emitirSom(): string { return "Au Au!"; }
    public brincar(): void { console.log("Brincando..."); }
}

// Exemplo da Aula 04

export abstract class MetodoPagamento {

    private MetodoPagamento proximo;

    public MetodoPagamento(MetodoPagamento proximo) {
        this.proximo = proximo;
    }
}