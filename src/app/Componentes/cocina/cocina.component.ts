import { Component } from '@angular/core';
import { PedidosService } from '../../Services/pedidos.service';
import { Pedidos } from '../../Models/pedidos';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css',
})
export class CocinaComponent {
  cocinaOcupada: boolean = false;

  constructor(private pedidosService: PedidosService) {}

  pedidos: Pedidos[] = [];

  ngOnInit(): void {
    this.pedidos = this.pedidosService.getPedidos();
    console.log(this.pedidos);
  }

  cocinarPedido(pedido: Pedidos) {
    this.pedidosService.pedidoACocinar(pedido);
    this.cocinaOcupada = !this.cocinaOcupada;
    
  }

  pedidoTerminado(_t19: Pedidos) {
    this.pedidosService.pedidoCocinado(_t19);
    this.cocinaOcupada = !this.cocinaOcupada;
  }
}
