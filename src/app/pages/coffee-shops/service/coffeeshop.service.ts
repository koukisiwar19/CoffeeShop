import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIS } from 'app/APIS/APIS';
import { DeleteResponseDto } from 'app/dto/delete-response.dto';
import { Observable } from 'rxjs';
import { CoffeeShop } from '../Model/CoffeeShop';

@Injectable({
  providedIn: 'root'
})
export class CoffeeshopService {
coffeshop = new   CoffeeShop();
  constructor(private http : HttpClient) { }
  addCoffeeshop(coffeshop: CoffeeShop): Observable<CoffeeShop> {
    return this.http.post<CoffeeShop>(APIS.crudcoffeshop, coffeshop)
  }
  getCoffeeshopById(id: number): Observable<CoffeeShop> {
  
    return this.http.get<CoffeeShop>(APIS.crudcoffeshop + id);
  }
  deleteCoffeeshop(id: number): Observable<DeleteResponseDto> {
  
    return this.http.delete<DeleteResponseDto>(APIS.crudcategories + id);
  }
  UpdateCoffeeshop(coffeshop : CoffeeShop): Observable<CoffeeShop> {
    return this.http.put<CoffeeShop>(APIS.crudcoffeshop,coffeshop);
  }
  ListCoffeeshop(): Observable<CoffeeShop[]>{
    return this.http.get<CoffeeShop[]>(APIS.crudcoffeshop);
    }
}
