import { Component, OnInit } from '@angular/core';
import { ProductsInterface, DepartmentsInterface, BrandInterface } from '../../../interfaces/ecommerce.interfaces';
import { Products, departments,brand } from '../../../Data/data';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { filter, map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pantalla-productos',
  templateUrl: './pantalla-productos.component.html',
  styleUrls: ['./pantalla-productos.component.css'],
})
export class PantallaProductosComponent implements OnInit {
  public mostrar = false;
  public producto: ProductsInterface;
  public departamento:DepartmentsInterface;

  constructor(private AR: ActivatedRoute) {
    this.AR.params
      .pipe(
        pluck('id'),
        switchMap((id) => this.GetProduct(id))
      )
      .subscribe((valor) => (this.producto = valor));
  }

  ngOnInit(): void {}

  public GetProduct(id: number) {
    return from(Products).pipe(
      filter((producto) => producto.id == id),
      map((producto) => ({ ...producto, img: `../../../../${producto.img}` }))
    );
  }
  
}
