import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../model/Order.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:string="http://localhost:8885";

  constructor(private http:HttpClient) {
  }

  public getResource(url){
      return this.http.get(url);
  }
  uploadPhotoProduct(file: File, idProduct): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.host+'/uploadPhoto/'+idProduct, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  public patchResource(url,data){
    return this.http.patch(url,data);
  }

  public getProductsByName(mc:string){
   return this.getResource(this.host+"/products/search/productsByKeyword?mc="+mc);

  }

  createContact(contact: any): Observable<any> {
    return this.http.post(this.host+'/api/contacts', contact);
  }
 
  

}
