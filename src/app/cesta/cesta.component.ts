import { Component } from '@angular/core';
import { Item } from '../model/item';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';
import { Produto } from '../model/produto';
import { Cesta } from '../model/cesta';
import { PedidoService } from '../service/pedido.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css'] // Corrigi styleUrl para styleUrls
})

export class CestaComponent implements OnInit {
  public lista: Item[] = [];
  public lista2: Cesta[] = [];
  public mensagem: String = "";
  public mensagemPedido: String = "";
  public totalCesta: number = 0;
  public cesta: Cesta; 

  constructor(private pedidoService: PedidoService) {
    this.cesta = new Cesta();
  }

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      let cliente: any = 0;
      if (localStorage.getItem('cliente')) {
        cliente = JSON.parse(localStorage.getItem('cliente') || '{}');
      }
      this.cesta.codigoCliente = cliente.codigo  // Converte codigoCliente para número
      this.cesta.status = 'Aberto';
      this.cesta.entrega = this.formatDate(new Date(new Date().setDate(new Date().getDate() + 7)));
      this.cesta.dataPedido = this.formatDate(new Date());

      let json = localStorage.getItem("cesta");
      if(json==null){
        this.mensagem = "Sua cesta de compras esta vazia !!!";
      } else {
        this.lista = JSON.parse(json);
        for(let item of this.lista){
          this.totalCesta += item.total;
        }
      }

      this.carregarPedidosCliente(this.cesta.codigoCliente); // Converte numero para string
    }
  }

  carregarPedidosCliente(codigoCliente: number) {
    this.pedidoService.listarPedidosCliente(codigoCliente).subscribe({
      next: (data: Cesta[]) => {
        this.lista2 = data;
      },
      error: error => {
        console.log(error);
        this.mensagemPedido = "Ocorreu um erro ao carregar os pedidos do cliente!";
      }
    });
  }

  limpar() {
    this.lista = [];
    localStorage.removeItem("cesta");
    window.location.href="./cesta";
  }

  gravar() {
    this.cesta.lista = this.lista;
    this.cesta.total = this.totalCesta;
    this.mensagem = this.pedidoService.gravar(this.cesta);
  }

  finalizar() {
    this.cesta.lista = this.lista;
    this.cesta.total = this.totalCesta;
    this.mensagem = this.pedidoService.gravar(this.cesta);
    alert('Compra realizada!');
    this.limpar();
    window.location.href="./cesta";
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}
