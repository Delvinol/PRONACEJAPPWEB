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
import { GrIngresosCJDRComponent } from './reinserdata/cjdr/reportediario/gr-ingresos-cjdr/gr-ingresos-cjdr.component';
import { GrMayoresCJDRComponent } from './reinserdata/cjdr/reportediario/gr-mayores-cjdr/gr-mayores-cjdr.component';

import { GrPoblacionEdadSimpleComponent } from './reinserdata/cjdr/poblacionedadsimple/gr-poblacion-edad-simple/gr-poblacion-edad-simple.component';
import { PoblacionEdadSimpleComponent } from './reinserdata/cjdr/poblacionedadsimple/poblacionedadsimple.component';
import { SituacionEducativaActualComponent } from './reinserdata/cjdr/situacioneducativaactual/situacioneducativaactual.component';
import { GrSituacionEducativaActualComponent } from './reinserdata/cjdr/situacioneducativaactual/gr-situacion-educativa-actual-cjdr/gr-situacion-educativa-actual-cjdr.component';
import { GrSituacionLaboralComponent } from './reinserdata/cjdr/situacionlaboral/gr-situacion-laboral/gr-situacion-laboral.component';
import { SituacionLaboralComponent } from './reinserdata/cjdr/situacionlaboral/situacionlaboral.component';
import { InfraccioncometidacjdrComponent } from './reinserdata/cjdr/infraccioncometidacjdr/infraccioncometidacjdr.component';
import { GrinfraccionCometidaCJDRComponent } from './reinserdata/cjdr/infraccioncometidacjdr/grinfraccion-cometida-cjdr/grinfraccion-cometida-cjdr.component';
import { TratamientodiferenciadocjdrComponent } from './reinserdata/cjdr/tratamientodiferenciadocjdr/tratamientodiferenciadocjdr.component';
import { ParticipaprogramaintervencioncjdrComponent } from './reinserdata/cjdr/tratamientodiferenciadocjdr/participaprogramaintervencioncjdr/participaprogramaintervencioncjdr.component';
import { ReportediarioSOAComponent } from './reinserdata/soa/reportediario-soa/reportediario-soa.component';
import { GrPoblacionSOAComponent } from './reinserdata/soa/reportediario-soa/gr-poblacion-soa/gr-poblacion-soa.component';
import { GrGeneroSOAComponent } from './reinserdata/soa/reportediario-soa/gr-genero-soa/gr-genero-soa.component';
import { PoblacionEdadSimpleSOAComponent } from './reinserdata/soa/poblacion-edad-simple-soa/poblacion-edad-simple-soa.component';
import { GrPoblacionEdadSimpleSOAComponent } from './reinserdata/soa/poblacion-edad-simple-soa/PoblacionEdadSimpleSOA/gr-poblacion-edad-simple-soa/gr-poblacion-edad-simple-soa.component';
import { SituacionEducativaActualSOAComponent } from './reinserdata/soa/situacion-educativa-actual-soa/situacion-educativa-actual-soa.component';
import { GrSituacionEducativaActualSOAComponent } from './reinserdata/soa/situacion-educativa-actual-soa/gr-situacion-educativa-actual-soa/gr-situacion-educativa-actual-soa.component';
import { SituacionLaboralSOAComponent } from './reinserdata/soa/situacion-laboral-soa/situacion-laboral-soa.component';
import { GrSituacionLaboralSOAComponent } from './reinserdata/soa/situacion-laboral-soa/gr-situacion-laboral-soa/gr-situacion-laboral-soa.component';
import { InfraccionesCometidasSOAComponent } from './reinserdata/soa/infracciones-cometidas-soa/infracciones-cometidas-soa.component';
import { GrInfraccionesCometidasSOAComponent } from './reinserdata/soa/infracciones-cometidas-soa/gr-infracciones-cometidas-soa/gr-infracciones-cometidas-soa.component';
import { PoblaciontotalpaspeComponent } from './reinserdata/paspe/poblaciontotalpaspe/poblaciontotalpaspe.component';
import { GrpoblaciontotalpaspeComponent } from './reinserdata/paspe/poblaciontotalpaspe/grpoblaciontotalpaspe/grpoblaciontotalpaspe.component';
import { PoblacionedadsimplepaspeComponent } from './reinserdata/paspe/poblacionedadsimplepaspe/poblacionedadsimplepaspe.component';
import { GredadsimplepaspeComponent } from './reinserdata/paspe/poblacionedadsimplepaspe/gredadsimplepaspe/gredadsimplepaspe.component';
import { SituacioneducativapaspeComponent } from './reinserdata/paspe/situacioneducativapaspe/situacioneducativapaspe.component';
import { GrsituacioneducativapaspeComponent } from './reinserdata/paspe/situacioneducativapaspe/grsituacioneducativapaspe/grsituacioneducativapaspe.component';
import { InsercionlaboralpaspeComponent } from './reinserdata/paspe/insercionlaboralpaspe/insercionlaboralpaspe.component';
import { GrinsercionlaboralpaspeComponent } from './reinserdata/paspe/insercionlaboralpaspe/grinsercionlaboralpaspe/grinsercionlaboralpaspe.component';


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
  { path: 'grProcesadosCJDR', component: GrProcesadosCJDRComponent},
  { path: 'grIngresosCJDR', component: GrIngresosCJDRComponent},
  { path: 'grMayoresCJDR', component: GrMayoresCJDRComponent},
  { path: 'poblacionedadsimple', component: PoblacionEdadSimpleComponent},
  { path: 'grPoblacionEdadSimple', component: GrPoblacionEdadSimpleComponent},
  { path: 'situacioneducativaactual', component: SituacionEducativaActualComponent},
  { path: 'grSituacionEducativaActual', component:GrSituacionEducativaActualComponent},
  { path: 'situacionlaboral', component:SituacionLaboralComponent},
  { path: 'grSituacionLaboral',component:GrSituacionLaboralComponent},
  { path: 'infraccioncometida', component: InfraccioncometidacjdrComponent},
  { path: 'grInfraccionCometida', component: GrinfraccionCometidaCJDRComponent},
  { path: 'tratamientodiferenciado', component: TratamientodiferenciadocjdrComponent},
  { path: 'participaprogramaintervencioncjdr', component: ParticipaprogramaintervencioncjdrComponent},
  { path: 'reportediarioSOA', component: ReportediarioSOAComponent },
  { path: 'grPoblacionSOA', component: GrPoblacionSOAComponent},
  { path: 'grGeneroSOA', component: GrGeneroSOAComponent},
  { path: 'poblacionedadsimpleSOA', component: PoblacionEdadSimpleSOAComponent}, 
  { path: 'grPoblacionEdadSimpleSOA', component: GrPoblacionEdadSimpleSOAComponent},
  { path: 'situacioneducativaactualSOA', component: SituacionEducativaActualSOAComponent},
  { path: 'grSituacionEducativaActualSOA', component: GrSituacionEducativaActualSOAComponent},
  { path: 'situacionlaboralSOA', component: SituacionLaboralSOAComponent},
  { path: 'grSituacionLaboralSOA', component: GrSituacionLaboralSOAComponent},
  { path: 'infraccioncometidaSOA', component: InfraccionesCometidasSOAComponent},
  { path: 'grInfraccionCometidaSOA',component: GrInfraccionesCometidasSOAComponent},
  { path: 'poblaciontotalPASPE', component: PoblaciontotalpaspeComponent },
  { path: 'grPoblaciontotalpaspe',component: GrpoblaciontotalpaspeComponent},
  { path: 'poblacionedadsimplepaspe', component: PoblacionedadsimplepaspeComponent },
  { path: 'grpoblacionedadsimplepaspe',component: GredadsimplepaspeComponent},
  { path: 'situacioneducativapaspe', component: SituacioneducativapaspeComponent },
  { path: 'grsituacioneducativapaspe', component: GrsituacioneducativapaspeComponent },
  { path: 'insercionlaboralpaspe', component: InsercionlaboralpaspeComponent},
  { path: 'grinsercionlaboralpaspe ', component: GrinsercionlaboralpaspeComponent },


];