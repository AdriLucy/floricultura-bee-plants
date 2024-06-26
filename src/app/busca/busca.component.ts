import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { Item } from '../model/item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VitrineComponent } from '../vitrine/vitrine.component';
import { ProdutoService } from '../service/produto.service';
import { DetalheComponent } from '../detalhe/detalhe.component';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  public mensagem:string;
  public lista: Produto[] = []; 
  public busca:string = "";

  public constructor(private service: ProdutoService){
    this.mensagem = "Nenhuma resultado para sua pesquisa";
  }

  public pesquisar(){
    this.service.pesquisar(this.busca).subscribe(
      (data: Produto[]) => {    
        if(data==null){
          this.mensagem = "Produtos não encontrados!";
        } else {        
          this.mensagem = "Resultado da pesquisa por:"+ this.busca;
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
    let listaBusca : Item[] = [];
    let json = localStorage.getItem("cesta");
    if(json==null){
      listaBusca.push(novo);  
      console.log(JSON.stringify(listaBusca));
    } else {
      listaBusca = JSON.parse(json);
      listaBusca.push(novo);
    }  
    localStorage.setItem("cesta",JSON.stringify(listaBusca));
    window.location.href="./cesta";
  }

  public abrirDetalhe(produto: Produto){
    localStorage.setItem("detalhe",JSON.stringify(produto.codigo));
    window.location.href="./detalhe";
  }

}