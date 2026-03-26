<style>
    /* Reiniciando a Contagem Geral */
    body {
        counter-reset: contadorh1 1 contadorLegenda 0;
    }

    /* Aplica o estilo para H1 e informa que a contagem de H2 deve começar do 0 sempre que um H1 aparecer */
    h1 {
        counter-reset: contadorh2;
        text-align: center;
    }

    h1::before {
        counter-increment: contadorh1;
    }

    /* Aplica o estilo para H2 e informa que a contagem de H3 deve começar do 0 sempre que um H2 aparecer */
    h2 {
        counter-reset: contadorh3;
    }

    h2::before {
        counter-increment: contadorh2;
        content: counter(contadorh2) ". ";
    }

    /* Aplica estilo para H3 */
    h3::before {
        counter-increment: contadorh3;
        content: counter(contadorh2) "." counter(contadorh3) ". ";
    }

    /* Legendas */
    .legenda::before {
    /* Incrementa o contador toda vez que a classe aparece */
    counter-increment: contadorLegenda;
    /* Define o texto automático */
    content: "Figura " counter(contadorLegenda) ": ";
    font-weight: bold;
}
</style>

# Arquitetura e Padrões de Projetos de Software

> **Última sincronização:** 25/03/2026 20:50:47

## Sumário de Aulas

- Aula 01 - [Conceitos de Orientação a Objetos](#conceitos-de-orientação-a-objetos)

---

## Conceitos de Orientação a Objetos

### Tópicos Abordados

- [Conceitos de Orientação a Objetos](#conceitos-de-orientação-a-objetos)
  - [Tópicos Abordados](#tópicos-abordados)
  - [Orientação a Objetos](#orientação-a-objetos)
  - [Objeto](#objeto)
  - [Classes](#classes)
  - [Relacionamentos](#relacionamentos)
    - [Associação](#associação)
    - [Associação por Agregação](#associação-por-agregação)
    - [Associação por Composição](#associação-por-composição)
  - [Visibilidade](#visibilidade)
  - [Delegação](#delegação)
  - [Herança](#herança)
  - [Realização](#realização)
  - [Polimorfismo](#polimorfismo)
    - [Polimorfismo **Estático** ou **Sobrecarga**](#polimorfismo-estático-ou-sobrecarga)
    - [Polimorfismo **Dinâmico** ou **Sobreposição**](#polimorfismo-dinâmico-ou-sobreposição)
  - [Classes Abstratas/Concretas](#classes-abstratasconcretas)
  - [Imutabilidade](#imutabilidade)
  - [Pacotes/Namespaces](#pacotesnamespaces)
  - [Considerações Finais](#considerações-finais)

> "Uma maneira de pensar os problemas é utilizando **conceitos do mundo real**. O componente fundamental é o **objeto** que combina estrutura e comportamento em uma única entidade."
> - Raumbaugh

### Orientação a Objetos

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

### Objeto

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

### Classes

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

### Relacionamentos

#### Associação

&emsp; Define relacionamentos entre duas classes, permitindo que um objeto faça com que outro realize uma função específica em seu lugar.

#### Associação por Agregação

&emsp; É uma forma especializada de associação no qual um **todo é relacionado com suas partes**. Também é conhecida como relação de **conteúdo**.

&emsp; Exemplo:

- Objeto: CARRO
  - modelo: String
  - anoFabricação: Long
  - Cardinalidade do Relacionamento: 1..* (um ou vários) --> um CARRO pode ter um ou vários PASSAGEIROS

- Objeto: PASSAGEIRO
  - nome: String
  - Cardinalidade do Relacionamento: 0..* (nenhum ou vários) --> um PASSAGEIRO pode estar relacionado a nenhum ou a vários CARROS

#### Associação por Composição

&emsp; É uma agregação onde uma classe que está contida na outra **"vive" e constitui a outra**. Se o objeto da classe que contém for destruído, as classes de agregação de composição serão destruídas por consequência, já que fazem parte da outra.

- Objeto: CARRO
  - modelo: String
  - anoFabricação: Long
  - Cardinalidade do Relacionamento: 1 (nenhum ou vários) --> um CARRO pode ter um ou várias PEÇAS

- Objeto: PEÇA
  - identificador: String
  - Cardinalidade do Relacionamento: 1 (um) --> uma PEÇA pertence a um CARRO

### Visibilidade

&emsp; Em Java, existem 3 modificadores (private, protected, public) e 4 níveis de visibilidade:

- **Private**: a única classe que tem acesso ao tributo é a própria classe que o define.
- **Protected**: classes que derivam/estendem da classe com este atributo terão acesso a ela.
- **Public**: Todos tem acesso.
- **Default**: todas as classes que estiverem no mesmo pacote tem acesso a um atributo default.

### Delegação

- **Chamada a um objeto para invocar um de seus métodos**, ativando um comportamento descrito por sua classe
- Também poder ser **direcionada diretamente a uma classe**
- Pode alterar ou não o **estado** do objeto invocado

### Herança

&emsp; Permite que classes compartilhem atributos e métodos, com a intenção de reaproveitamento de código e comportamento padronizado deixando uma parte do código dedicada exclusivamente para fazer operações específicas.

&emsp; Exemplo:

- Generalização: COMPONENTE
- Especializações: BOTÃO e PAINEL

&emsp; A classe COMPONENTE é uma **generalização** de BOTÃO e PAINEL, contendo comportamentos que se aplicam aos dois. Em paralelo, BOTÃO e PAINEL são **especializações** de COMPONENTE, contendo funções exclusivas a elas.

### Realização

&emsp; Realizar uma interface significa **seguir um "contrato"**, onde todos os métodos da interface serão implementados pela classe que a realiza. Isso define **o que** uma classe faz e não **como faz**.

&emsp; É chamada de **interface** pois é a maneira pela qual podemos conversar com outros componentes. Em comparação, é da mesma forma que usamos uma interface, deixando os cálculos em segundo plano e exibindo apenas aquilo que interessa.

&emsp; Exemplo:

- Interface: COMPONENTE
  - Método: + desenhar(): void
- Classe: BOTÃO
- Classe: PAINEL

&emsp;&emsp; As classes BOTÃO e PAINEL **realizam/implementam** a interface COMPONENTE, sendo obrigados a implementar seus métodos para uso.

### Polimorfismo

> "Qualidade ou estado de ser capaz de assumir diferentes formas".

&emsp; O polimorfismo denota a uma situação onde um objeto pode se comportar de maneiras diferentes ou receber uma mensagem.

#### Polimorfismo **Estático** ou **Sobrecarga**

&emsp; Uma mesma operação é implementada várias vezes na mesma classe.

#### Polimorfismo **Dinâmico** ou **Sobreposição**

&emsp; Acontece na herança, quando um método da subclasse sobrepõe o método da classe de origem. Agora o método escolhido se dá em tempo de execução e não acarreta em mais tempo de compilação.

### Classes Abstratas/Concretas

- **Abstratas**: não permitem realizar qualquer tipo de instância. São feitas especialmente **para serem modelos** para suas classes derivadas.
- **Concretas**: são as classes derivadas que, via de regra, deverão sobrescrever os métodos para realizar a implementação dos mesmos.

### Imutabilidade

&emsp; Objetos imutáveis são aqueles que **suas instâncias não podem ter seu estado alterado após a criação** e nem mudam durante a aplicação. Exemplos dessas classes são facilmente encontradas em bibliotecas nativas do Java, como a própria classe String.

### Pacotes/Namespaces

&emsp; É um delimitador abstrato que fornece um **contexto** para os itens que ele armazena (nomes, termos técnicos, conceitos, etc). 

&emsp; Permite **eliminar a ambiguidade** para itens que possuem o mesmo nome, mas que estão em **pacotes/namespace/locais** diferentes.

### Considerações Finais

- Compreender os conceitos básicos de orientação a objetos é fundamental para entender padrões de projeto.
- Os conceitos da OO servem para todas as linguagens que utilizam este paradigma, mas nem todas implementam todos os conceitos.


---

