import { RouterModule,Routes} from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { AboutComponent } from './components/secciones/about/about.component';
import { ProductosComponent } from './components/secciones/productos/productos.component';
import { UbicacionesComponent } from './components/secciones/ubicaciones/ubicaciones.component';
import { PantallaProductosComponent } from './components/share/pantalla-productos/pantalla-productos.component';
import { NotfoundComponent } from './components/share/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'ubicaciones', component: UbicacionesComponent },
  { path: 'producto-detalle/:id', component: PantallaProductosComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'notfound' },
];

export const appRouting = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
