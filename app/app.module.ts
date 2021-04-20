import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { CaddyComponent } from './caddy/caddy.component';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    CaddyComponent,
    ClientComponent,
    ProductComponent,
    HomeComponent,
    MapComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,FormsModule, NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvCoDrkp54en1fzO37HxF_kpuM5AOAfXo'
    })
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
