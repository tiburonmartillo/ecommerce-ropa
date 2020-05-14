import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { HeaderComponent } from './components/share/header/header.component';
import { SliderPromosComponent } from './components/share/slider-promos/slider-promos.component';
import { BodyComponent } from './components/body/body.component';
import { IntroComponent } from './components/body/intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    SliderPromosComponent,
    BodyComponent,
    IntroComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
