import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {CaddyService} from '../services/caddy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentCategorie;


  constructor(private authService:AuthenticationService,
              private router:Router,
              private caddyService:CaddyService) { }

  ngOnInit() {
  }

  onLogin(user){
    this.authService.login(user.username,user.password);
    if(this.authService.isAuthenticated()){
      this.caddyService.loadCaddyFromLocalStorage();
      this.router.navigateByUrl('');
    }

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
