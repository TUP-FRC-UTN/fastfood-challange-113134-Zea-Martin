import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PedidosService } from '../../Services/pedidos.service';

@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css',
})
export class PointOfSellComponent {
  name: string = '';
  description: string = '';

  constructor(private pedidoService: PedidosService) {}

  onSubmit() {
    this.pedidoService.crearPedido(this.name, this.description);
    this.name = '';
    this.description = '';
    console.log(this.pedidoService.getPedidos());
  }

}
