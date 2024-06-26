import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cesta } from '../model/cesta';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http : HttpClient) {}

  public gravar(obj : Cesta) : string{    
    let mensagem  = "";
    this.http.post<String>("http://localhost:8090/api/pedido", obj).subscribe({
    next: data =>
    {
      mensagem =  "Registro salvo com sucesso !";
    },
    error: error => {
      console.log(error);
      mensagem =  "Ocorreu um erro durante a gravação!";
    }
  });    
  return mensagem;
}

public alterar(obj: Cesta): string{
  let mensagem  = "";
  this.http.put<String>("http://localhost:8090/api/pedido", obj).subscribe({
    next: data =>
    {
      mensagem =  "Registro alterado com sucesso !";
    },
    error: error => {
      console.log(error);
      mensagem =  "Ocorreu um erro durante a gravação!";
    }
  });    
  return mensagem;
} 

public remover(obj: Cesta) :string{    
  let mensagem  = "";
  this.http.delete<String>("http://localhost:8090/api/pedido/"+ obj.codigo).subscribe({
    next: data =>
    {
      mensagem =  "Registro removido com sucesso !";
    },
    error: error => {
      console.log(error);
      mensagem =  "Ocorreu um erro durante a gravação!";
    }
  });    
  return mensagem;   
} 


public carregar(codigo: string): Observable<Cesta>{
  return this.http.get<Cesta>("http://localhost:8090/api/pedido/"+codigo);         
}

public listar() :  Observable<Cesta[]>{    
    return this.http.get<Cesta[]>("http://localhost:8090/api/pedido");      
}

public pesquisar(busca: String) :  Observable<Cesta[]>{    
  return this.http.get<Cesta[]>("http://localhost:8090/api/produto/pedido/"+ busca);      
}

public listarPedidosCliente(codigoCliente: number): Observable<Cesta[]> {
  return this.http.get<Cesta[]>(`http://localhost:8090/api/pedido/cliente/${codigoCliente}`);
}


}
