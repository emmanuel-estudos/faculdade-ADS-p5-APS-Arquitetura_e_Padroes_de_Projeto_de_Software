package exemplo_aula03;

import java.math.BigDecimal;

public class FreteTransportadora {

    public BigDecimal calcularFrete(Pedido pedido) {

        return new BigDecimal(35 + 4 * pedido.getPeso());
    }
}
