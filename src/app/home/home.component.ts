import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PATH_DETAIL, PATH_HOME} from "../app.route.constantes";
import AleServices from "../service/AleServices";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private AleServices: AleServices) { }

  alesList:any []= [];


   handleChange(aleNb:string){

    this.router.navigate([PATH_DETAIL, aleNb]);
  }

 async ngOnInit() {

    this.alesList = await this.AleServices.getAllAles();

 }

}
