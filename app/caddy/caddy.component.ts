import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Product} from '../model/product.model';
import {Router} from '@angular/router';
import {CaddyService} from '../services/caddy.service';
import {ItemProduct} from '../model/item-product.model';
import {Caddy} from '../model/caddy.model';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-caddy',
  templateUrl: './caddy.component.html',
  styleUrls: ['./caddy.component.css']
})
export class CaddyComponent implements OnInit {

  public caddy:Caddy;
  currentCategorie;

  constructor(private catService:CatalogueService, private router:Router,
              public caddyService:CaddyService, private authService:AuthenticationService) { }
  
  ngOnInit() {
    if(!this.authService.isAuthenticated())
      this.router.navigateByUrl('/login');
    this.caddy=this.caddyService.getCaddy();
    console.log(this.caddy);
  }



  onRemoveProductFromCaddy(p: ItemProduct) {
    this.caddyService.removeProduct(p.id);
  }

  getTotal() {
      return this.caddyService.getTotalCurrentCaddy();
  }

  onNewOrder() {
    this.router.navigateByUrl("/client");
  }

  onAddCaddy() {

    let size=this.caddyService.listCaddies.length;
    let index:number=this.caddyService.listCaddies[size-1].num;
    this.caddyService.addNewCaddy({num:index+1,name:"Caddy"+(index+1)});
  }

  onSelectCaddy(c: { num: number; name: string }) {
    this.caddyService.currentCaddyName=c.name;
    this.caddy=this.caddyService.getCaddy();
  }


  onSelectedProducts() {
    this.currentCategorie=undefined;
    this.router.navigateByUrl("/products/1/0");
  }

  onProductsPromo() {
    this.currentCategorie=undefined;
    this.router.navigateByUrl("/products/3/0");
  }

  onProductsDispo() {
    this.currentCategorie=undefined;
    this.router.navigateByUrl("/products/4/0");
  }



}
