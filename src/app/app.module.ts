import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from "./app.routes";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { HeaderComponent } from './components/share/header/header.component';
import { SliderPromosComponent } from './components/share/slider-promos/slider-promos.component';
import { BodyComponent } from './components/body/body.component';
import { IntroComponent } from './components/body/intro/intro.component';
import { OurProductsComponent } from './components/body/our-products/our-products.component';
import { NovedadesComponent } from './components/body/novedades/novedades.component';
import { NewsletterComponent } from './components/body/newsletter/newsletter.component';
import { GaleriaComponent } from './components/body/galeria/galeria.component';
import { ProductosComponent } from './components/secciones/productos/productos.component';
import { AboutComponent } from './components/secciones/about/about.component';
import { UbicacionesComponent } from './components/secciones/ubicaciones/ubicaciones.component';
import { PantallaProductosComponent } from './components/share/pantalla-productos/pantalla-productos.component';
import { NotfoundComponent } from './components/share/notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    SliderPromosComponent,
    BodyComponent,
    IntroComponent,
    OurProductsComponent,
    NovedadesComponent,
    NewsletterComponent,
    GaleriaComponent,
    ProductosComponent,
    AboutComponent,
    UbicacionesComponent,
    PantallaProductosComponent,
    NotfoundComponent
 
  ],
  imports: [
    BrowserModule,
    appRouting,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
