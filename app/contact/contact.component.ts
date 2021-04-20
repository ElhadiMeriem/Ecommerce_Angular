import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import {Contact} from '../model/Contact.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact();
  submitted = false;
  currentCategorie;



  constructor(private  catService: CatalogueService,private router:Router
     ){ }

  ngOnInit(): void {
  }


 
  save() {
    this.catService.createContact(this.contact)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;

        },
        error => console.log(error));
    this.contact = new Contact();
  }
 
  onSubmit() {
    this.save();
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
