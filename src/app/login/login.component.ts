import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import { provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  public mensagem: String = "";
  public email: String = "";
  public obj: Cliente = new Cliente();

  constructor(private service: ClienteService){   
  }

  public entrar(){
    this.service.login(this.obj).subscribe(
      (data: Cliente) => {  
        if(data!=null){
          localStorage.setItem("cliente", JSON.stringify(data));
          window.location.href="./cadastro";
        }  else {
          this.mensagem = "Email ou senha invalidos !!!";
        }
      }, 
      (error) => {
        this.mensagem = "Ocorreu um erro, tente mais tarde !!!";
        console.log(error);
      }
    );
  }

  public recuperarSenha() {


    if (this.obj.email) {
      alert(`Foi enviado um link para seu e-mail (${this.obj.email}) para alteração de senha!`);
      // Redirecionar para a página de login
      window.location.href = './login';
    } else {
      alert('Digite o email que deseja recuperar a senha');
      //alert(`Foi enviado um link para seu e-mail (${this.email}) para alteração de senha!`);
    }
  }
    /*
    if(this.obj.email=="norton@norton.net.br"){
      localStorage.setItem("meuNome", "Norton");
      window.location.href="./cadastro";
    } else {
      this.mensagem = "Email ou senha invalidos!!!";
    }*/
  }


