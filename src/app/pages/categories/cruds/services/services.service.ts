import { Injectable } from '@angular/core';
import { Categorie } from '../Model/categorie';
import { Observable} from 'rxjs';
import { APIS } from 'app/APIS/APIS';
import { DeleteResponseDto } from 'app/dto/delete-response.dto';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
categories= new Categorie();
  constructor(private http : HttpClient) { }
addCategorie(categories: Categorie): Observable<Categorie> {
  return this.http.post<Categorie>(APIS.crudcategories, categories)
}
getCategorieById(id: number): Observable<Categorie> {

  return this.http.get<Categorie>(APIS.crudcategories + id);
}
deleteCategorie(id: number): Observable<DeleteResponseDto> {

  return this.http.delete<DeleteResponseDto>(APIS.crudcategories + id);
}
UpdateCategorie(categories :Categorie): Observable<Categorie> {
  return this.http.put<Categorie>(APIS.crudcategories,categories);
}
ListCategorie(): Observable<Categorie[]>{
  return this.http.get<Categorie[]>(APIS.crudcategories);
  }
}
