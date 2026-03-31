# Changing

- Aula explicada: 31/03/2026

## Problema

&emsp; Imagine um site de compras o-commerce

### Como podemos modelar uma solução para esse problema?

- **Adição** de novas formas de pagamento
- **Reordenação** das formas de pagamento referencial
- **Execução** do pagamento verificando em cada uma das formas se há saldo disponível

![Diagrama](./Diagramas/classDiagram-exemplo-aula_04.svg)

<details>
<summary>Clique para ver o código fonte do diagrama (Mermaid)</summary>


```mermaid
classDiagram
    class Animal {
        + String especie
        # int idade
        + emitirSom()* String
        + dormir() void
    }

    class IPet {
        <<interface>>
        +nome: String
        +brincar() void
    }

    class Cachorro {
        +String nome
        +emitirSom() String
        -enterrarOsso() void
    }

    Animal <|-- Cachorro : Herança
    IPet <|.. Cachorro : Implementação

    class MetodoPagamento {
        + pagar(valor)
    }
```