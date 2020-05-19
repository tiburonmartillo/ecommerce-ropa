import { Component, OnInit} from '@angular/core';
import { from } from 'rxjs';
import { take,tap, map} from 'rxjs/operators';
import { ProductsInterface } from '../../../Interfaces/ecommerce.interfaces';
import { Products } from './../../../Data/data';
import { Router } from "@angular/router";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public mostrar: boolean = false;
  public ProductosDestacados:Array<ProductsInterface>=[];

  constructor(private router:Router) {
    this.obtenerNuevoProducto();
  }

  ngOnInit(): void {}

  

  public obtenerNuevoProducto() {
    from(Products)
      .pipe(
        map((producto)=>{
          let DireccionImagen=`../../../../${producto.img}`;
          return{...producto,img:DireccionImagen,}
        }),
        take(20),
        tap((value) => this.ProductosDestacados.push(value))
      )
      .subscribe((value) => console.log(this.ProductosDestacados));
  }
  GetIdToChangeScreen(id:number){
    this.router.navigate(['producto-detalle',id])
  }
}