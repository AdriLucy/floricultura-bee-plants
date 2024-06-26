import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http : HttpClient) {}

  public gravar(obj : Cliente) : string{    
      let mensagem  = "";
    this.http.post<String>("http://localhost:8090/api/cliente", obj).subscribe({
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

  public alterar(obj: Cliente): string{
    let mensagem  = "";
    this.http.put<String>("http://localhost:8090/api/cliente", obj).subscribe({
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

  public remover(obj: Cliente) :string{    
    let mensagem  = "";
    this.http.delete<String>("http://localhost:8090/api/cliente/"+ obj.codigo).subscribe({
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
  
  
  public carregar(codigo: number): Observable<Cliente>{
    return this.http.get<Cliente>("http://localhost:8090/api/cliente/"+codigo);         
  }

  public listar() :  Observable<Cliente[]>{    
      return this.http.get<Cliente[]>("http://localhost:8090/api/clientes");      
  }



  public login(obj : Cliente) : Observable<Cliente>{    
    return this.http.post<Cliente>("http://localhost:8090/api/cliente/login", obj);
  }

  
}
