package exemplo_aula03;

import java.math.BigDecimal;

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