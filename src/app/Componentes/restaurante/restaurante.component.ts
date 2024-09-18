import { Component } from '@angular/core';
import { EntregaComponent } from '../entrega/entrega.component';
import { PointOfSellComponent } from '../point-of-sell/point-of-sell.component';
import { CocinaComponent } from '../cocina/cocina.component';
import { Pedidos } from '../../Models/pedidos';
import { PedidosService } from '../../Services/pedidos.service';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  imports: [EntregaComponent, PointOfSellComponent, CocinaComponent],
  templateUrl: './restaurante.component.html',
  styleUrl: './restaurante.component.css',
})
export class RestauranteComponent {
  pedidos: Pedidos[] = [];

  constructor(private pedidosService: PedidosService) {}

  ngOnInit() {
    this.pedidos = this.pedidosService.getPedidos();
  }

}
