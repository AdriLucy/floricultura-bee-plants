import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../model/item';
import { Produto } from '../model/produto';
import { BuscaComponent } from '../busca/busca.component';
import { ProdutoService } from '../service/produto.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  public mensagem:String;
  public lista: Produto[] = []; 
  /*[{codigo:1,nome:"Amoreira",valor:40, descritivo:"",
    valorPromo:35, estoque:10, destaque:1},
    {codigo:2,nome:"Lirio da paz",valor:30, descritivo:"",
    valorPromo:25, estoque:10, destaque:1},
    {codigo:3,nome:"Manjericão",valor:20, descritivo:"",
    valorPromo:17, estoque:10, destaque:1},
    {codigo:4,nome:"Alecrim",valor:17, descritivo:"",
    valorPromo:15, estoque:8, destaque:1},
    {codigo:5,nome:"Babosa",valor:20, descritivo:"",
    valorPromo:15, estoque:10, destaque:1},
    {codigo:6,nome:"Erva cidreira",valor:10, descritivo:"",
    valorPromo:8, estoque:10, destaque:1}
];*/

public constructor(private service: ProdutoService){
  this.mensagem = "";
  this.service.listar().subscribe(
    (data: Produto[]) => {    
      if(data==null){
        this.mensagem = "Produtos não encontrados!";
      } else {        
        this.lista = data;
      }
    } , 
    (error) => {
      this.mensagem = "ocorreu um erro no carregamento da vitrine !"+ error;
    }
  )        

}
  

  public comprar(produto: Produto){
    let novo: Item = new Item();
    novo.codigoProduto = produto.codigo;
    novo.nomeProduto = produto.nome;
    novo.valor = produto.valor;
    novo.qtd = 1;
    novo.total = produto.valor;
    let lista : Item[] = [];
    let json = localStorage.getItem("cesta");
    if(json==null){
      lista.push(novo);  
      console.log(JSON.stringify(lista));
    } else {
      lista = JSON.parse(json);
      lista.push(novo);
    }  
    localStorage.setItem("cesta",JSON.stringify(lista));
    window.location.href="./cesta";
  };

  public abrirDetalhe(produto: Produto){
    localStorage.setItem("detalhe",JSON.stringify(produto.codigo));
    window.location.href="./detalhe";
  }
}
