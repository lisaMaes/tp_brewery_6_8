import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PATH_DETAIL, PATH_HOME} from "./app.route.constantes";
import {AleDetailComponent} from "./ale-detail/ale-detail.component";


export const ROUTES:Routes = [


  { path: PATH_HOME, component:HomeComponent },
  { path: PATH_DETAIL + '/:nbAle', component:AleDetailComponent}
]

