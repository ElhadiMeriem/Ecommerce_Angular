import { Component, OnInit } from '@angular/core';
import {Client} from '../model/client.model';
import {OrderService} from '../services/order.service';
import {AuthenticationService} from '../services/authentication.service';
import {CaddyService} from '../services/caddy.service';
import {Router} from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public mode:number=0;
  currentCategorie;
  panelStyle:string= "panel-default";
  constructor(public orderService:OrderService,private catService:CatalogueService,
              private authService:AuthenticationService,
              public caddyService:CaddyService,
              private router:Router) { }

  ngOnInit() {
  }

  onSaveClient(client:Client) {
    client.username=this.authService.authenticatedUser.username;
    this.orderService.setClient(client);
    this.caddyService.setClient(client);
    this.orderService.loadProductsFromCaddy();
    this.mode=1;
  }

  onOrder() {
    this.orderService.submitOrder().subscribe(data=>{
      this.orderService.order.id=data['id'];
      this.orderService.order.date=data['date'];
      this.panelStyle="panel-success";
    },err=>{
      console.log(err);
    });
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
  getTotal() {
    return this.caddyService.getTotalCurrentCaddy();
}
  
}
