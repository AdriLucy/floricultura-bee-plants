import { Routes } from '@angular/router';
import { CestaComponent } from './cesta/cesta.component';
import { BuscaComponent } from './busca/busca.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { LoginComponent } from './login/login.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
    {path:'busca',component:BuscaComponent},
    {path:'cesta',component:CestaComponent},
    {path:'detalhe',component:DetalheComponent},
    {path:'login',component:LoginComponent},
    {path:'vitrine',component:VitrineComponent},
    {path:'cadastro',component:CadastroComponent},
    {path:'',component:VitrineComponent}

];
