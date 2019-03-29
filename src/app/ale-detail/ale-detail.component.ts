import { Component, OnInit } from '@angular/core';
import AleServices from "../service/AleServices";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-ale-detail',
  templateUrl: './ale-detail.component.html',
  styleUrls: ['./ale-detail.component.css']
})
export class AleDetailComponent implements OnInit {

  constructor(private AleServices: AleServices, private route: ActivatedRoute) { }

  aleItem:any;

  async ngOnInit() {

     this.route.paramMap.subscribe((params: ParamMap)=>{

      this.aleItem = await this.AleServices.getAle(aleNb);

    });

  }



}
