import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoffeeShop } from '../Model/CoffeeShop';
import { CoffeeshopService } from '../service/coffeeshop.service';

@Component({
  selector: 'app-coffee-cruds',
  templateUrl: './coffee-cruds.component.html',
  styleUrls: ['./coffee-cruds.component.css']
})
export class CoffeeCrudsComponent implements OnInit {
shop = new CoffeeShop();
shops : CoffeeShop[];
  constructor(private shopservice : CoffeeshopService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addCoffeeshop(){
  this.shopservice.addCoffeeshop(this.shop).subscribe(shop =>{
    console.log(shop);
  });
  this.router.navigate(['coffeshop']).then(() =>{
    window.location.reload();
  });
}
}
