import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PATH_HOME} from "./app.route.constantes";


export const ROUTES:Routes = [


  { path: PATH_HOME, component:HomeComponent }
]

