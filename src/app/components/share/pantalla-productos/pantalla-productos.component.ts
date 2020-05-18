import { Component, OnInit } from '@angular/core';
import {  ProductsInterface } from "../../../Interfaces/ecommerce.interfaces";
import { ActivatedRoute } from '@angular/router';
import { filter, map, pluck, switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { Products } from "../../../Data/data";

@Component({
  selector: 'app-pantalla-productos',
  templateUrl: './pantalla-productos.component.html',
  styleUrls: ['./pantalla-productos.component.css']
})
export class PantallaProductosComponent implements OnInit {
  public mostrar=false;
  public product:ProductsInterface;

  constructor(private AR:ActivatedRoute) {
    this.AR.params.pipe(
      pluck('id'),
      switchMap(id=>this.GetProduct(id))
    )
    .subscribe((valor)=>(this.product=valor));
    window.scroll(0,0)
   }

  ngOnInit(): void {
  }

  public GetProduct(id:number){
    return from(Products).pipe(
      filter((producto)=>producto.id==id),
      map((producto)=>({
        ...producto,img:`../../../../${producto.img}`,
      }))
    );
  }
  }
