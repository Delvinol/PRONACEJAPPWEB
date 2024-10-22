import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ReinserdataComponent } from './reinserdata/reinserdata.component';
import { PronacejdigitalComponent } from './pronacejdigital/pronacejdigital.component';
import { CJDRComponent } from './reinserdata/cjdr/cjdr.component';
import { SOAComponent } from './reinserdata/soa/soa.component';
import { PASPEComponent } from './reinserdata/paspe/paspe.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'reinserdata', component: ReinserdataComponent },
  { path: 'pronacejdigital', component: PronacejdigitalComponent },
  { path: 'cjdr', component: CJDRComponent },
  { path: 'soa', component:SOAComponent },
  { path: 'paspe', component: PASPEComponent}
];