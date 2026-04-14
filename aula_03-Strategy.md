# Strategy -- Padrões Comportamentais -- GoF

## Tópicos Abordados
- [Strategy -- Padrões Comportamentais -- GoF](#strategy----padrões-comportamentais----gof)
  - [Tópicos Abordados](#tópicos-abordados)
  - [Problema](#problema)
  - [Padrão Strategy](#padrão-strategy)
  - [Diagrama](#diagrama)
  - [Resolução do Problema](#resolução-do-problema)

## Problema

&emsp; Em uma aplicação de vendas, um Pedido possui 3 formas de entrega:

- PAC
- Sedex
- Transportadora

&emsp; Dentro desses formatos, ainda existem regras específicas como:

- Produtos entregues por **PAC** são gratuitos dependendo do peso. **Até 1kg é grátis**, além disso é cobrado **R$: 15,00 (fixo)**.
- Produtos entregues por **Sedex** são, no mínimo, **R\$: 50,00 + R\$: 2,50 por Kg**.
- Produtos entregues por **Transportadora** tem custo de **R\$: 35,00 + R\$: 4,00 por Kg**.

&emsp; Como desenhar uma solução para esse cenário? E se, por acaso, surgir uma nova **modalidade de entrega**? E se essa nova modalidade tiver regras ainda mais específicas para calcular o frete? Distância pode ser mais de um fator determinante para o valor.

## Padrão Strategy

&emsp; Definir uma família de algoritmos, encapsular cada uma delas e torná-las intercambiáveis. Strategy **permite que o algoritmo varie independentemente dos clientes que o utilizam**.

&emsp; Este pedrão sugere que **algoritmos parecidos** (métodos de cálculo de frete) **sejam separados de quem os utiliza** (Pedido).

&emsp; Este padrão, além de **encapsular os algoritmos da mesma família**, também permite a **reutilização de código**.

&emsp; Caso existam **vários tipos de transportadora, usando o mesmo algoritmo**, essa estratégia pode ser reutilizada.

&emsp; Estratégias eliminam **comandos adicionais da linguagem de programação**. Isso possibilita escolher diferentes implementações em tempo de execução.

## Diagrama



## Resolução do Problema

&emsp; Primeiramente, **definimos uma interface** para todos os **algoritmos da mesma família**:

```java
public interface FreteStrategy {
  BigDecimal calcularFrete(Pedido pedido);
}
```

&emsp; Em seguida, definimos as **estratégias concretas de cálculo de cada frete**.

```java
public class FretePAC implements FreteStrategy {

  public BigDecimal calcularFrete(Pedido pedido) {

    // caso pese menos que 1Kg
    if (pedido.getPeso() < 1) {
        return new BigDecimal(0);
    }

    // caso pese mais de 1Kg
    return new BigDecimal(15);
  }
}
```

```java
public class FreteSedex {
    
    public BigDecimal calcularFrete(Pedido pedido) {

        return new BigDecimal(50 + 2.50 * pedido.getPeso());
    }
}
```

```java
public class FreteTransportadora {

    public BigDecimal calcularFrete(Pedido pedido) {

        return new BigDecimal(35 + 4 * pedido.getPeso());
    }
}
```

```java
public class Pedido {
    private String nome;
    private int quantidade;
    private double peso;

    public Pedido(String nome, int quantidade, double peso) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.peso = peso;
    }

    // Getters e Setters
    public String getNome() { 
        return nome; 
    }

    public void setNome(String nome) {
         this.nome = nome; 
    }

    public int getQuantidade() {
        return quantidade; 
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade; 
    }

    public double getPeso() {
         return peso; 
    }

    public void setPeso(double peso) {
         this.peso = peso; 
    }
}
```
