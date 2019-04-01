import {Injectable} from "@angular/core";
import {PunkApiServiceService} from "./punk-api-service.service";
import {Ale} from "../model/Ale";

@Injectable({
  providedIn: 'root'
})
export default class AleServices {

  alesList:Array<Ale>= [];
  aleItem:Ale;

  constructor(private ApiService: PunkApiServiceService){};

  async getAle(aleNb: string): Promise<Ale>{

    let resp: any = await this.ApiService.getAle(aleNb).toPromise();

    let item:any =  resp[0];

     this.aleItem = new Ale(item.id, item.name, item.tagline, item.description, item.image_url, item.brewersTips);


    return this.aleItem;
  }

  async getAllAles():Promise<Array<Ale>>{

    let resp: any = await this.ApiService.getAllAles().toPromise();


    this.alesList = resp.map(item => new Ale(item.id, item.name, item.tagline, item.description, item.image_url, item.brewersTips));


    return this.alesList;
  }
}
