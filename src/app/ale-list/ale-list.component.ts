import {Component, Input, OnInit} from '@angular/core';
import {Ale} from "../model/Ale";

@Component({
  selector: 'app-ale-list',
  templateUrl: './ale-list.component.html',
  styleUrls: ['./ale-list.component.css']
})
export class AleListComponent implements OnInit {

  constructor() { }

  @Input()
  alesList:Array<Ale>;



  ngOnInit() {
  }

}
