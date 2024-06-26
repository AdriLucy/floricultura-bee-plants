import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BuscaComponent } from './app/busca/busca.component';
import { Produto } from './app/model/produto';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

