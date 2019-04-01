import { Component, OnInit } from '@angular/core';
import AleServices from "../service/AleServices";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {logging} from "selenium-webdriver";
import removeConsoleHandler = logging.removeConsoleHandler;

@Component({
  selector: 'app-ale-detail',
  templateUrl: './ale-detail.component.html',
  styleUrls: ['./ale-detail.component.css']
})
export class AleDetailComponent implements OnInit {

  constructor(private AleServices: AleServices, private route: ActivatedRoute) { }

  aleItem:any;

   async ngOnInit() {

     const nbAle:string = await this.route.snapshot.paramMap.get('nbAle');

      this.aleItem = await this.AleServices.getAle(nbAle);

      console.log('detail :',this.aleItem);
  }

}
