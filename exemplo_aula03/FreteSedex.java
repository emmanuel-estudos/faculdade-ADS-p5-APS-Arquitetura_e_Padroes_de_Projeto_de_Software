package exemplo_aula03;

import java.math.BigDecimal;

public class FreteSedex {
    
    public BigDecimal calcularFrete(Pedido pedido) {

        return new BigDecimal(50 + 2.50 * pedido.getPeso());
    }
}
