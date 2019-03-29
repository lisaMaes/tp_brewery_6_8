import { Component, OnInit } from '@angular/core';
import AleServices from "../service/AleServices";
import {Ale} from "../model/Ale";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  aleItem:any;

  async handleChange(aleNb:string){

    this.aleItem = await this.AleServices.getAle(aleNb);


  }

  ngOnInit() {
  }

}
