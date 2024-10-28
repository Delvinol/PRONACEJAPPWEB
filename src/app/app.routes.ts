import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ReinserdataComponent } from './reinserdata/reinserdata.component';
import { PronacejdigitalComponent } from './pronacejdigital/pronacejdigital.component';
import { CJDRComponent } from './reinserdata/cjdr/cjdr.component';
import { SOAComponent } from './reinserdata/soa/soa.component';
import { PASPEComponent } from './reinserdata/paspe/paspe.component';
import { SeguridadComponent } from './pronacejdigital/seguridad/seguridad.component';
import { RecursoshumanosComponent } from './pronacejdigital/recursoshumanos/recursoshumanos.component';
import { RegisterComponent } from './register/register.component';
import { ReportediarioComponent } from './reinserdata/cjdr/reportediario/reportediario.component';
import { GrPoblacionCJDRComponent } from './reinserdata/cjdr/reportediario/gr-poblacion-cjdr/gr-poblacion-cjdr.component';
import { GrProcesadosCJDRComponent } from './reinserdata/cjdr/reportediario/gr-procesados-cjdr/gr-procesados-cjdr.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component:RegisterComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'reinserdata', component: ReinserdataComponent },
  { path: 'pronacejdigital', component: PronacejdigitalComponent },
  { path: 'cjdr', component: CJDRComponent },
  { path: 'soa', component:SOAComponent },
  { path: 'paspe', component: PASPEComponent},
  { path: 'seguridad', component: SeguridadComponent },
  { path: 'recursoshumanos', component: RecursoshumanosComponent },
  { path: 'reportediario', component:ReportediarioComponent },
  { path: 'grPoblacionCJDR', component:GrPoblacionCJDRComponent },
  { path: 'grProcesadosCJDR', component: GrProcesadosCJDRComponent}
];