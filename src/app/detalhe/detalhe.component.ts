import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { Item } from '../model/item';
import { CestaComponent } from '../cesta/cesta.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
  public mensagem: String = "";
    public obj : Produto = new Produto();
  
    public constructor(private service: ProdutoService){
      if (typeof localStorage !== 'undefined') {
        let codigo = localStorage.getItem("detalhe");
        if(codigo==null){
          this.mensagem = "produto não encontrado!!!";
        } else {
            this.service.carregar(codigo).subscribe(
            (data: Produto) => {    
              if(data==null){
                this.mensagem = "Produto não encontrado!";
              } else {        
                this.obj = data;
              }
            } , 
            (error) => {
              this.mensagem = "ocorreu um erro no carregamento do detalhe !"+ error;
            }
          )        
        }
      } 
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
  
}
