import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categorie } from './Model/categorie';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-cruds',
  templateUrl: './cruds.component.html',
  styleUrls: ['./cruds.component.css']
})
export class CrudsComponent implements OnInit {
  categories = new Categorie();
catg: Categorie[];
  constructor(private catgservice : ServicesService,
    private router: Router,
    private toaster: ToastrService ) { }

  ngOnInit(): void {
  }
addCategory (){
  this.catgservice.addCategorie(this. categories).subscribe( categorie => {
    console.log( categorie);

    });

    this.router.navigate([' categorie']).then(() => {
      window.location.reload();
      });

}
}
