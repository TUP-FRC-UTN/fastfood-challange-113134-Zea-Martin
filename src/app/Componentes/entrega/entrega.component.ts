import { Component } from '@angular/core';
import { PedidosService } from '../../Services/pedidos.service';
import { Pedidos } from '../../Models/pedidos';

@Component({
  selector: 'app-entrega',
  standalone: true,
  imports: [],
  templateUrl: './entrega.component.html',
  styleUrl: './entrega.component.css'
})
export class EntregaComponent {
entregarPedido(_t6: Pedidos) {
this.pedidosService.pedidoEntregado(_t6);
}

  pedidos: Pedidos[] = [];

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.pedidos = this.pedidosService.getPedidos();
    console.log(this.pedidos);
  }

}
