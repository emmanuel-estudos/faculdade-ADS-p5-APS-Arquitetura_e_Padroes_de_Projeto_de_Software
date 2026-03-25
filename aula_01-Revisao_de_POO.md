# Revisão de Aprofundamento de Conceitos

## Tópicos Abordados

- [Revisão de Aprofundamento de Conceitos](#revisão-de-aprofundamento-de-conceitos)
  - [Tópicos Abordados](#tópicos-abordados)
  - [Orientação a Objetos](#orientação-a-objetos)
  - [Objeto](#objeto)
  - [Classes](#classes)
  - [Relacionamentos](#relacionamentos)
    - [Associação](#associação)
    - [Associação por Agregação](#associação-por-agregação)
    - [Associação por Composição](#associação-por-composição)

> Uma maneira de pensar os problemas é utilizando **conceitos do mundo real**. O componente fundamental é o **objeto** que combina estrutura e comportamento em uma única entidade.
> - Raumbaugh

## Orientação a Objetos

- Modelo de análise, projeto e programação de sistemas de software baseado na composição e interação entre unidades (objetos)
- Estratégia para evitar repetição de código
- Facilita comunicação entre os interessados (stakeholders)

&emsp; Bases da Orientação a Objetos:

- Correspondência com o mundo real (mas não necessariamente)
- Modularidade
- Baixa dependência externa
- Alta coesão interna
- Reuso
- Encapsulamento

&emsp; Entidade com identidade e com limite bem definido que encapsula o **estado** e o **comportamento**:

- Estado: a parte mais "interna" do objeto, contendo os atributos
- Comportamento: a parte mais "externa" do objeto, contendo as operações e se comunicando com o "mundo externo" em relação ao encapsulamento
- Identidade: é o objeto em si, formado pelas camadas anteriores

## Objeto

&emsp; Pode ser:

- Entidade física (ex: pessoa, veículo, animal)
- Entidade conceitual (ex: local, empréstimo, pagamento)
- Entidade de software (ex: pilha, fila, lista)

&emsp; Exemplo:

- Objeto: **profDiogo**

&emsp;&emsp; O **estado** do objeto é definido pelos atributos e pelos relacionamentos com outro objetos. Exemplo:

- Estado
  - Nome: Diogo Moreira
  - Ingresso: xx/yy/zzzz
  - Cargo: Professor
  - Departamento: Informática

&emsp;&emsp; Cada objeto tem sua própria **identidade**, mesmo sendo objetos idênticos.

- Objeto **profDiogo1**
  - Estado
    - Nome: Diogo Moreira
    - Ingresso: xx/yy/zzzz
    - Cargo: Professor
    - Departamento: Informática
  - Operações
    - setMaxAulas
    - lançarNotas
- Objeto **profDiogo2**
  - Estado
    - Nome: Diogo Moreira
    - Ingresso: xx/yy/zzzz
    - Cargo: Professor
    - Departamento: Informática
  - Operações
    - setMaxAulas
    - lançarNotas

## Classes

&emsp; É a **definição abstrata** de um objeto.

- Atributos (propriedades)
- Comportamento (métodos)
- Relacionamentos (com outros objetos)
- Semântica (significado)

```jsx
objeto = (
<div>
  <h1>Professor</h1>
  <div className="atributos">
    <p className="private">nome: String</p>
    <p className="private">dataIngresso: LocalDate</p>
    <p className="private">departamento: String</p>
    <p className="private">maxCargaHoraria: Long</p>
  </div>
  <div>
    <p className="public">setMaxCargaHoraria (CH): void</p>
  </div>
</div>
)
```

<p align="right" class="legenda">
  <ins><i>Exemplo de método para a criação de objeto.</i></ins>
</p>

- Funciona como um "protótipo" da estrutura e comportamento de objetos

&emsp; Os **atributos** são propriedades de uma classe que define a faixa de valores que as instâncias da propriedade podem assumir.

&emsp; As **operações** especificam o que uma classe faz, podendo mudar ou não o estado do objeto. e a interface para chamar esses serviços.

&emsp; Uma **interface** chama as operações e as implementa. **Método** é a implementação de um serviço (como ela vai realizar o serviço). São contratos/assinaturas que não contém nenhum detalhe sobre a implementação.

&emsp; A **instância** uma classe é o objeto criado a partir de uma classe, que define seu comportamento e seu estado. Exemplo: um _carro_ (instância) foi criado usado o molde (classe) de _veículo_.

## Relacionamentos

### Associação

&emsp; Define relacionamentos entre duas classes, permitindo que um objeto faça com que outro realize uma função específica em seu lugar.

### Associação por Agregação

&emsp; É uma forma especializada de associação no qual um **todo é relacionado com suas partes**. Também é conhecida como relação de **conteúdo**.

&emsp; Exemplo:

- Objeto: CARRO
  - modelo: String
  - anoFabricação: Long
  - Cardinalidade do Relacionamento: 1..* (um ou vários) --> um CARRO pode ter um ou vários PASSAGEIROS

- Objeto: PASSAGEIRO
  - nome: String
  - Cardinalidade do Relacionamento: 0..* (nenhum ou vários) --> um PASSAGEIRO pode estar relacionado a nenhum ou a vários CARROS

### Associação por Composição

&emsp; É uma agregação onde uma classe que está contida na outra **"vive" e constitui a outra**. Se o objeto da classe que contém for destruído, as classes de agregação de composição serão destruídas por consequência, já que fazem parte da outra.

- Objeto: CARRO
  - modelo: String
  - anoFabricação: Long
  - Cardinalidade do Relacionamento: 1 (nenhum ou vários)