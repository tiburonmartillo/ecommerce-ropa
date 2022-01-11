(self["webpackChunktienda_ropa"] = self["webpackChunktienda_ropa"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 8505:
/*!******************************!*\
  !*** ./src/app/Data/data.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "departments": function() { return /* binding */ departments; },
/* harmony export */   "brand": function() { return /* binding */ brand; },
/* harmony export */   "Products": function() { return /* binding */ Products; }
/* harmony export */ });
const departments = [
    {
        id: 1,
        department: 'Playeras',
    },
    {
        id: 2,
        department: 'Gorras'
    },
    {
        id: 3,
        department: 'Pines'
    },
    {
        id: 4,
        department: 'Bolsas'
    },
    {
        id: 5,
        department: 'Poster'
    }
];
const brand = [
    {
        id: 1,
        brand: 'nike',
        img: 'assets/img/nike.png'
    },
    {
        id: 2,
        brand: 'aeropostale',
        img: 'assets/img/aeropostale.png'
    },
    {
        id: 3,
        brand: 'levi´s',
        img: 'assets/img/levis.png'
    },
    {
        id: 4,
        brand: 'gap',
        img: 'assets/img/gap.png'
    },
    {
        id: 5,
        brand: 'ralph lauren',
        img: 'assets/img/ralphlauren.png'
    },
];
const Products = [
    {
        id: 1,
        brand: 1,
        department: 1,
        product: 'Playera de básquetbol Nike',
        colors: ['#ffffff', '#000000'],
        sizes: ['s', 'm', 'l', 'xl'],
        img: 'assets/img/id1.JPG',
        description: ['Algodón de primer nivel', 'El estampado de tinta fotocromática cambia de color cuando se expone a la luz solar.'],
        price: 649,
        msi: true
    },
    {
        id: 2,
        brand: 2,
        department: 1,
        product: 'Playera básica Aeropostale cuello redondo',
        colors: ['#0a1845', '#cfbd00'],
        sizes: ['m', 'l', 'xl'],
        img: 'assets/img/id2.JPG',
        description: ['estampado en vinil', 'maga corta', 'estilo joven', 'algodón super cómodo'],
        price: 209.30,
        msi: false
    },
    {
        id: 3,
        brand: 3,
        department: 1,
        product: 'Playera Levi´s edición especial',
        colors: ['#ff0000', '#000000'],
        sizes: ['xs', 's', 'm', 'l', 'xl'],
        img: 'assets/img/id3.JPG',
        description: ['Colección Super Mario Bros Nintendo', 'corte regular fit', 'cuello redondo', 'estampado en vinil'],
        price: 499,
        msi: true
    },
    {
        id: 4,
        brand: 4,
        department: 1,
        product: 'Playera lisa GAP',
        colors: ['#00123d'],
        sizes: ['s', 'm', 'l'],
        img: 'assets/img/id4.JPG',
        description: [, 'estilo clásico', 'manga corta', 'cuello V', 'algodón', 'Para vestir casual'],
        price: 279.30,
        msi: false
    },
    {
        id: 5,
        brand: 5,
        department: 1,
        product: 'Playera Polo Ralph Lauren',
        colors: ['#00123d', '#00fff7'],
        sizes: ['s', 'm', 'l', 'xl', 'xxl'],
        img: 'assets/img/id5.JPG',
        description: ['algodón', 'corte slim fit', 'manga corta', 'casual', 'logo bordado a la altura del pecho en lado izquierdo'],
        price: 1113,
        msi: true
    },
    {
        id: 6,
        brand: 1,
        department: 2,
        product: 'playera fitness Nike',
        colors: ['#ff9999'],
        sizes: ['xs', 's', 'm', 'l'],
        img: 'assets/img/id6.JPG',
        description: ['algodón', 'corte regular fit', 'cuello redondo', 'manga corta'],
        price: 314,
        msi: true
    },
    {
        id: 7,
        brand: 2,
        department: 2,
        product: 'Playera básica Aeropostale',
        colors: ['#000000', '#cc9200'],
        sizes: ['xs', 's', 'm', 'l'],
        img: 'assets/img/id7.JPG',
        description: ['algodón y poliester', 'cuello redondo', 'estampado impreso con tonos metálicos'],
        price: 209,
        msi: false
    },
    {
        id: 8,
        brand: 3,
        department: 2,
        product: 'Playera Levi´s edición Limitada',
        colors: ['#ffffff'],
        sizes: ['xs', 's', 'm', 'l'],
        img: 'assets/img/id8.JPG',
        description: ['corte slim fit', 'playera de algodón', 'cuello reodndo', 'manga corta', 'estampado multicolor'],
        price: 109.40,
        msi: false
    },
    {
        id: 9,
        brand: 4,
        department: 2,
        product: 'Blusa lisa GAP',
        colors: ['#00123d'],
        sizes: ['xs', 's', 'm'],
        img: 'assets/img/id9.JPG',
        description: ['algodón spandexx', 'cueyo V', 'manga corta', 'no estampado'],
        price: 379.30,
        msi: true
    },
    {
        id: 10,
        brand: 5,
        department: 2,
        product: 'Pin metálico, nube',
        colors: ['#ff008c', '#f2ff00'],
        sizes: ['xs', 's', 'm'],
        img: 'assets/img/id10.JPG',
        description: ['algodón', 'con 5 botones', 'Colores vivos', 'corte recto', 'Manga corta'],
        price: 699,
        msi: true
    },
    {
        id: 11,
        brand: 4,
        department: 3,
        product: 'Pin metálico, pizza',
        colors: ['#eff757', '#a5ff70', '#fcbebd'],
        sizes: ['1-2M', '6-9M', '9-12M', '12-18M'],
        img: 'assets/img/id11.JPG',
        description: ['algodón', 'corte semi-A', 'largo regular'],
        price: 559.30,
        msi: true
    },
    {
        id: 12,
        brand: 4,
        department: 3,
        product: 'Pin metálico, manos',
        colors: ['#00123d', '#ff0000'],
        sizes: ['1-2M', '6-9M', '9-12M', '12-18M'],
        img: 'assets/img/id12.JPG',
        description: ['corte regular fit', 'casual', 'manga corta', 'algodón suave y amable con su piel'],
        price: 279,
        msi: false
    },
    {
        id: 13,
        brand: 3,
        department: 3,
        product: 'Pin metálico, Lentes',
        colors: ['#fcbebd', '#00123d'],
        sizes: ['1-2M', '6-9M', '9-12M', '12-18M'],
        img: 'assets/img/id13.JPG',
        description: ['para bebé niña', '2 piezas', 'manga larga', 'calido y suave algodón'],
        price: 524,
        msi: true
    },
    {
        id: 14,
        brand: 3,
        department: 3,
        product: 'Pin metálico, boca',
        colors: ['#b0b0b0', '#00123d'],
        sizes: ['1-2M', '6-9M', '9-12M', '12-18M'],
        img: 'assets/img/id14.JPG',
        description: ['conjunto algodón para bebé niño', '2 piezas', 'manga larga', 'calido y suave algodón'],
        price: 524,
        msi: true
    },
    {
        id: 15,
        brand: 1,
        department: 5,
        product: 'Tote bag,',
        colors: ['#000000'],
        sizes: ['22', '22.5', '23', '23.5', '24', '24.5', '25', '25.5', '26', '26.5', '27'],
        img: 'assets/img/id15.JPG',
        description: ['Tenis Nike Air Force 1 07', 'casual', 'Son de alta durabilidad, son muy modernos', 'combinan perfecto.', 'negro', 'dama'],
        price: 1899,
        msi: true
    },
    {
        id: 16,
        brand: 1,
        department: 5,
        product: 'Tote bag,Orange',
        colors: ['#ffffff', '#000000'],
        sizes: ['22', '22.5', '23', '23.5', '24', '24.5', '25', '25.5', '26', '26.5', '27'],
        img: 'assets/img/id16.JPG',
        description: ['deportivo', 'Son de alta durabilidad, son muy ligeros', 'Perfectos para correr', 'negro', 'caballero'],
        price: 999,
        msi: true
    },
    {
        id: 17,
        brand: 2,
        department: 5,
        product: 'Tote bag, Have fun',
        colors: ['#ffffff', '#00123d'],
        sizes: ['22', '22.5', '23', '23.5', '24', '24.5', '25', '25.5', '26', '26.5', '27'],
        img: 'assets/img/id17.JPG',
        description: ['casual', 'suela sintetica', 'dama'],
        price: 659,
        msi: false
    },
    {
        id: 18,
        brand: 2,
        department: 5,
        product: 'Tote bag, rábanos',
        colors: ['#ffffff', '#b0b0b0'],
        sizes: ['22', '22.5', '23', '23.5', '24', '24.5', '25', '25.5', '26', '26.5', '27'],
        img: 'assets/img/id18.JPG',
        description: ['Caballero', ' Blancos', 'corte textil'],
        price: 660,
        msi: false
    },
    {
        id: 19,
        brand: 3,
        department: 5,
        product: 'Tote bag, llanto',
        colors: ['#6e450c', '#382306'],
        sizes: ['22', '22.5', '23', '23.5', '24', '24.5', '25', '25.5', '26', '26.5', '27'],
        img: 'assets/img/id19.JPG',
        description: ['Piel color Café', 'caballero', 'comodas y duraderas', 'suela aislante'],
        price: 1149,
        msi: true
    },
    {
        id: 20,
        brand: 3,
        department: 5,
        product: 'Tote bag, concierto de frutas',
        colors: ['#ffffff', '#b37a00'],
        sizes: ['22', '22.5', '23', '23.5', '24', '24.5', '25', '25.5', '26', '26.5', '27'],
        img: 'assets/img/id20.JPG',
        description: ['Dama', 'Mujer', 'textil/lona', 'producto mexicano'],
        price: 549,
        msi: false
    },
];


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_share_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/share/header/header.component */ 6446);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_share_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/share/footer/footer.component */ 196);




class AppComponent {
    constructor() {
        this.title = 'TiendaRopa';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "sticky-top"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    } }, directives: [_components_share_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_share_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 8693);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_share_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/share/navbar/navbar.component */ 1250);
/* harmony import */ var _components_share_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/share/footer/footer.component */ 196);
/* harmony import */ var _components_share_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/share/header/header.component */ 6446);
/* harmony import */ var _components_share_slider_promos_slider_promos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/share/slider-promos/slider-promos.component */ 3381);
/* harmony import */ var _components_body_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/body/body.component */ 6659);
/* harmony import */ var _components_body_intro_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/body/intro/intro.component */ 8644);
/* harmony import */ var _components_body_our_products_our_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/body/our-products/our-products.component */ 3553);
/* harmony import */ var _components_body_novedades_novedades_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/body/novedades/novedades.component */ 2322);
/* harmony import */ var _components_body_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/body/newsletter/newsletter.component */ 6096);
/* harmony import */ var _components_body_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/body/galeria/galeria.component */ 9780);
/* harmony import */ var _components_secciones_productos_productos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/secciones/productos/productos.component */ 3634);
/* harmony import */ var _components_secciones_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/secciones/about/about.component */ 8344);
/* harmony import */ var _components_secciones_ubicaciones_ubicaciones_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/secciones/ubicaciones/ubicaciones.component */ 1188);
/* harmony import */ var _components_share_pantalla_productos_pantalla_productos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/share/pantalla-productos/pantalla-productos.component */ 324);
/* harmony import */ var _components_share_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/share/notfound/notfound.component */ 1638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 1258);




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _app_routes__WEBPACK_IMPORTED_MODULE_0__.appRouting,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_share_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent,
        _components_share_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _components_share_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _components_share_slider_promos_slider_promos_component__WEBPACK_IMPORTED_MODULE_5__.SliderPromosComponent,
        _components_body_body_component__WEBPACK_IMPORTED_MODULE_6__.BodyComponent,
        _components_body_intro_intro_component__WEBPACK_IMPORTED_MODULE_7__.IntroComponent,
        _components_body_our_products_our_products_component__WEBPACK_IMPORTED_MODULE_8__.OurProductsComponent,
        _components_body_novedades_novedades_component__WEBPACK_IMPORTED_MODULE_9__.NovedadesComponent,
        _components_body_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_10__.NewsletterComponent,
        _components_body_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_11__.GaleriaComponent,
        _components_secciones_productos_productos_component__WEBPACK_IMPORTED_MODULE_12__.ProductosComponent,
        _components_secciones_about_about_component__WEBPACK_IMPORTED_MODULE_13__.AboutComponent,
        _components_secciones_ubicaciones_ubicaciones_component__WEBPACK_IMPORTED_MODULE_14__.UbicacionesComponent,
        _components_share_pantalla_productos_pantalla_productos_component__WEBPACK_IMPORTED_MODULE_15__.PantallaProductosComponent,
        _components_share_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__.NotfoundComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] }); })();


/***/ }),

/***/ 8693:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRouting": function() { return /* binding */ appRouting; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_body_body_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/body/body.component */ 6659);
/* harmony import */ var _components_secciones_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/secciones/about/about.component */ 8344);
/* harmony import */ var _components_secciones_productos_productos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/secciones/productos/productos.component */ 3634);
/* harmony import */ var _components_secciones_ubicaciones_ubicaciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/secciones/ubicaciones/ubicaciones.component */ 1188);
/* harmony import */ var _components_share_pantalla_productos_pantalla_productos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/share/pantalla-productos/pantalla-productos.component */ 324);
/* harmony import */ var _components_share_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/share/notfound/notfound.component */ 1638);







const routes = [
    { path: '', component: _components_body_body_component__WEBPACK_IMPORTED_MODULE_0__.BodyComponent },
    { path: 'about', component: _components_secciones_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent },
    { path: 'productos', component: _components_secciones_productos_productos_component__WEBPACK_IMPORTED_MODULE_2__.ProductosComponent },
    { path: 'ubicaciones', component: _components_secciones_ubicaciones_ubicaciones_component__WEBPACK_IMPORTED_MODULE_3__.UbicacionesComponent },
    { path: 'producto-detalle/:id', component: _components_share_pantalla_productos_pantalla_productos_component__WEBPACK_IMPORTED_MODULE_4__.PantallaProductosComponent },
    { path: 'notfound', component: _components_share_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__.NotfoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'notfound' },
];
const appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });


/***/ }),

/***/ 6659:
/*!***************************************************!*\
  !*** ./src/app/components/body/body.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BodyComponent": function() { return /* binding */ BodyComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro/intro.component */ 8644);
/* harmony import */ var _our_products_our_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./our-products/our-products.component */ 3553);
/* harmony import */ var _novedades_novedades_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./novedades/novedades.component */ 2322);
/* harmony import */ var _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsletter/newsletter.component */ 6096);
/* harmony import */ var _galeria_galeria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./galeria/galeria.component */ 9780);






class BodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(); };
BodyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["app-body"]], decls: 5, vars: 0, template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-our-products");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-novedades");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-galeria");
    } }, directives: [_intro_intro_component__WEBPACK_IMPORTED_MODULE_0__.IntroComponent, _our_products_our_products_component__WEBPACK_IMPORTED_MODULE_1__.OurProductsComponent, _novedades_novedades_component__WEBPACK_IMPORTED_MODULE_2__.NovedadesComponent, _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_3__.NewsletterComponent, _galeria_galeria_component__WEBPACK_IMPORTED_MODULE_4__.GaleriaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2R5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9780:
/*!**************************************************************!*\
  !*** ./src/app/components/body/galeria/galeria.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleriaComponent": function() { return /* binding */ GaleriaComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class GaleriaComponent {
    constructor() { }
    ngOnInit() {
    }
}
GaleriaComponent.ɵfac = function GaleriaComponent_Factory(t) { return new (t || GaleriaComponent)(); };
GaleriaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GaleriaComponent, selectors: [["app-galeria"]], decls: 31, vars: 0, consts: [[1, "col", "mt-5"], [1, "text-center"], [1, "mt-5", "mb-0"], [1, "mt-5"], [1, "row", "text-center", "mt-5"], [1, "col-12", "col-md-4", "col-sm-6", "col-lg-3", "p-1", "pb-0"], ["href", "#", 1, "mb-1"], ["src", "../../../../assets/img/galeria_1.jpg", "alt", "", 1, "img-fluid"], [1, "col-12", "col-md-4", "col-sm-6", "col-lg-3", "p-1"], ["src", "../../../../assets/img/galeria_2.jpg", "alt", "", 1, "img-fluid"], ["src", "../../../../assets/img/galeria_3.jpg", "alt", "", 1, "img-fluid"], ["src", "../../../../assets/img/galeria_4.jpg", "alt", "", 1, "img-fluid"], ["src", "../../../../assets/img/galeria_5.jpg", "alt", "", 1, "img-fluid"], ["src", "../../../../assets/img/galeria_6.jpg", "alt", "", 1, "img-fluid"], ["src", "../../../../assets/img/galeria_7.jpg", "alt", "", 1, "img-fluid"], ["href", "#", 1, "mb-1", "h-100"], ["src", "../../../../assets/img/galeria_8.jpg", "alt", "", 1, "img-fluid"]], template: function GaleriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GALER\u00CDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Buena Vibra es un estilo de vida para gente como t\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  img[_ngcontent-%COMP%] {\r\n    \r\n    width: 400px;\r\n    height: 400px;\r\n\r\n   opacity: 1;\r\n   -o-object-fit: cover;\r\n      object-fit: cover;\r\n  }\r\n  \r\n  img[_ngcontent-%COMP%]:hover{\r\ntransition: .5s;\r\nfilter:brightness(0.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGVyaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osYUFBYTs7R0FFZCxVQUFVO0dBQ1Ysb0JBQWlCO01BQWpCLGlCQUFpQjtFQUNsQjs7RUFFRjtBQUNBLGVBQWU7QUFDZixzQkFBc0I7QUFDdEIiLCJmaWxlIjoiZ2FsZXJpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcblxyXG4gICBvcGFjaXR5OiAxO1xyXG4gICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG5pbWc6aG92ZXJ7XHJcbnRyYW5zaXRpb246IC41cztcclxuZmlsdGVyOmJyaWdodG5lc3MoMC41KTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 8644:
/*!**********************************************************!*\
  !*** ./src/app/components/body/intro/intro.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroComponent": function() { return /* binding */ IntroComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 14, vars: 0, consts: [[1, "fondo", 2, "background", "url(../../../assets/img/portada.jpg)", "background-size", "cover", "background-repeat", "no-repeat", "background-position", "right"], [1, "container"], [1, "row"], [1, "mt-5", "col-12"], [1, "col-12", "col-lg-6", "mt-5"], [1, "display-5", "font-weight-heavy"], [1, "lead", "font-weight-light"], [1, "linea"], ["routerLink", "productos", 1, "btn", "btn-outline-dark", "rounded-0"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "VISTE BIEN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " SIENTETE BIEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Moda para usar, creatividad para expresar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Comprar ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["*[_ngcontent-%COMP%]{\r\n    font-family: 'Open sans',sans-serif;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: bolder;\r\n}\r\n\r\n.fondo[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    width: 100vw;\r\n   \r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n    background: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gc2Fucycsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uZm9uZG97XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICBcclxufVxyXG5cclxuYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6096:
/*!********************************************************************!*\
  !*** ./src/app/components/body/newsletter/newsletter.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterComponent": function() { return /* binding */ NewsletterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class NewsletterComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsletterComponent.ɵfac = function NewsletterComponent_Factory(t) { return new (t || NewsletterComponent)(); };
NewsletterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsletterComponent, selectors: [["app-newsletter"]], decls: 12, vars: 0, consts: [[1, "jumbotron", "row", "col-12", "m-0"], [1, "col-12", "col-sm-2", "text-center"], ["src", "../../../../assets/img/sector1.png", "alt", ""], [1, "col-12", "col-sm-8", "text-center"], [1, "my-4"], [1, "btn", "btn-outline-dark", "rounded-0", "col-12", "col-sm-6", "col-md-2"], ["src", "../../../../assets/img/sector2.png", "alt", ""]], template: function NewsletterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Suscr\u00EDbete a nuestro newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RECIBE PROMOCIONES EXCLUSIVAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["button[_ngcontent-%COMP%]:hover{\r\nbackground: #000;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%]{\r\n    background: #F4EBE2;    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3NsZXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJuZXdzbGV0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b246aG92ZXJ7XHJcbmJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb257XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjRFQkUyOyAgICBcclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2322:
/*!******************************************************************!*\
  !*** ./src/app/components/body/novedades/novedades.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovedadesComponent": function() { return /* binding */ NovedadesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class NovedadesComponent {
    constructor() { }
    ngOnInit() {
    }
}
NovedadesComponent.ɵfac = function NovedadesComponent_Factory(t) { return new (t || NovedadesComponent)(); };
NovedadesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NovedadesComponent, selectors: [["app-novedades"]], decls: 30, vars: 0, consts: [[1, "container", "mb-5"], [1, "mt-5", "ml-5", "align-content-center"], [1, "row"], [1, "p-0", "rounded-0", "col-12", "col-md-6"], ["src", "../../../../assets/img/new1.jpg", "alt", "...", 1, "img-fluid", "rounded-0"], [1, "tarjeta", "p-0", "col-12", "col-md-6"], [1, "card-body"], [1, "card-title", "mt-5"], [1, "linea", "mt-5", "mb-4"], [1, "card-text"], ["routerLink", "productos", 1, "btn", "btn-outline-dark", "rounded-0"], [1, "tarjeta1", "p-0", "col-12", "col-md-6"], ["src", "../../../../assets/img/new2.png", "alt", "...", 1, "card-img", "rounded-0"]], template: function NovedadesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ordena 2 playeras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "AHORRA 20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Conciente a tu guardaropa, compra 2 piezas y ahorra 20% en el total de tu compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Comprar ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "NUEVO PRODUCTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "PINES MET\u00C1LICOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Comprar ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: [".tarjeta[_ngcontent-%COMP%] {\r\n  background: #f4ebe2;\r\n}\r\n.tarjeta1[_ngcontent-%COMP%]{\r\n  background: #F1D5CF;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover{\r\n  background: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdmVkYWRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBR0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibm92ZWRhZGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhcmpldGEge1xyXG4gIGJhY2tncm91bmQ6ICNmNGViZTI7XHJcbn1cclxuLnRhcmpldGExe1xyXG4gIGJhY2tncm91bmQ6ICNGMUQ1Q0Y7XHJcbn1cclxuXHJcblxyXG5idXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 3553:
/*!************************************************************************!*\
  !*** ./src/app/components/body/our-products/our-products.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurProductsComponent": function() { return /* binding */ OurProductsComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _Data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Data/data */ 8505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);






function OurProductsComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OurProductsComponent_div_5_div_1_Template_div_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const producto_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.GetIdToChangeScreen(producto_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", producto_r2.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", producto_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](producto_r2.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", producto_r2.price, "");
} }
function OurProductsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OurProductsComponent_div_5_div_1_Template, 11, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.ProductosDestacados);
} }
class OurProductsComponent {
    constructor(router) {
        this.router = router;
        this.mostrar = false;
        this.ProductosDestacados = [];
        this.obtenerNuevoProducto();
    }
    ngOnInit() { }
    obtenerNuevoProducto() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(_Data_data__WEBPACK_IMPORTED_MODULE_0__.Products)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((producto) => {
            let DireccionImagen = `../../../../${producto.img}`;
            return Object.assign(Object.assign({}, producto), { img: DireccionImagen });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(4), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((value) => this.ProductosDestacados.push(value)))
            .subscribe((value) => console.log(this.ProductosDestacados));
    }
    GetIdToChangeScreen(id) {
        this.router.navigate(['producto-detalle', id]);
    }
}
OurProductsComponent.ɵfac = function OurProductsComponent_Factory(t) { return new (t || OurProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
OurProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OurProductsComponent, selectors: [["app-our-products"]], decls: 6, vars: 1, consts: [[1, "text-center", "p-0", "mt-5"], ["class", "card-group", 4, "ngIf"], [1, "card-group"], ["class", "card m-3 border-0", 4, "ngFor", "ngForOf"], [1, "card", "m-3", "border-0"], [1, "container"], [1, "card-img-top", 3, "src", "alt"], [1, "overlay", "text-center", 3, "click"], [1, "text"], [1, "card-body", "text-center"], [1, "card-title"], [1, "card-text"]], template: function OurProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "LIFESTYLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Encuentra productos incre\u00EDbles dise\u00F1ados para ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OurProductsComponent_div_5_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mostrar == false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], styles: [".container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.linea[_ngcontent-%COMP%]{\r\n    width: 20px;\r\n    height: 3px;\r\n    background: #000;\r\n}\r\n.container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n  transition: .5s;\r\n}\r\n.container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n  transform: scale(1.5);\r\n  transition: .5s;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n}\r\n.overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 200;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 0%;\r\n  width: 100%;\r\n  opacity: 0;\r\n  transition: .3s ease;\r\n  background-color: rgba(255, 255, 255, 0.356);\r\n}\r\n.container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  height: 20%;\r\n\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  color: #000000;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91ci1wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsNENBQTRDO0FBQzlDO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVzs7QUFFYjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEIiLCJmaWxlIjoib3VyLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubGluZWF7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciA+aW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5jb250YWluZXI6aG92ZXIgaW1ne1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzU2KTtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBoZWlnaHQ6IDIwJTtcclxuXHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ 8344:
/*!***************************************************************!*\
  !*** ./src/app/components/secciones/about/about.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": function() { return /* binding */ AboutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 12, vars: 0, consts: [[1, "fondo"], [1, "jumbotron"], [1, "row", "justify-content-center", "align-items-center"], [1, "col", "offset-md-2"], [1, "linea"], ["src", "../../../../assets/img/sector1.png", "alt", ""], ["src", "../../../../assets/img/sector2.png", "alt", ""], [1, "col"], [2, "min-width", "100px", "max-width", "300px"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SOMOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt dolores sint iusto? Inventore molestiae nostrum hic facere dolore quae. Expedita error maiores ipsam fugiat placeat aliquam totam rerum unde.Consequatur distinctio sit aut nisi maxime quae aperiam iure tempora? Voluptas beatae, recusandae libero, qui fugiat ipsa dolore, quod asperiores ducimus quam quis ratione eos molestiae quae sapiente pariatur excepturi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".fondo[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-image: url('juicio.jpg');\r\n    background-attachment: fixed;\r\n   background-size: cover;\r\n  }\r\n.jumbotron[_ngcontent-%COMP%]{\r\n    height: 80vh;\r\n    background: #F4EBE2;\r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1DQUF3RDtJQUN4RCw0QkFBNEI7R0FDN0Isc0JBQXNCO0VBQ3ZCO0FBQ0Y7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9qdWljaW8uanBnKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4uanVtYm90cm9ue1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgYmFja2dyb3VuZDogI0Y0RUJFMjtcclxufVxyXG5cclxuLnJvd3tcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 3634:
/*!***********************************************************************!*\
  !*** ./src/app/components/secciones/productos/productos.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosComponent": function() { return /* binding */ ProductosComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _Data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Data/data */ 8505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);






function ProductosComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductosComponent_div_6_div_1_Template_div_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const producto_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.GetIdToChangeScreen(producto_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", producto_r2.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", producto_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](producto_r2.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", producto_r2.price, "");
} }
function ProductosComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductosComponent_div_6_div_1_Template, 11, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.ProductosDestacados);
} }
class ProductosComponent {
    constructor(router) {
        this.router = router;
        this.mostrar = false;
        this.ProductosDestacados = [];
        this.obtenerNuevoProducto();
    }
    ngOnInit() { }
    obtenerNuevoProducto() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(_Data_data__WEBPACK_IMPORTED_MODULE_0__.Products)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((producto) => {
            let DireccionImagen = `../../../../${producto.img}`;
            return Object.assign(Object.assign({}, producto), { img: DireccionImagen });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(20), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((value) => this.ProductosDestacados.push(value)))
            .subscribe((value) => console.log(this.ProductosDestacados));
    }
    GetIdToChangeScreen(id) {
        this.router.navigate(['producto-detalle', id]);
    }
}
ProductosComponent.ɵfac = function ProductosComponent_Factory(t) { return new (t || ProductosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
ProductosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductosComponent, selectors: [["app-productos"]], decls: 7, vars: 1, consts: [[1, "text-center", "col-12", "mt-5"], [1, "linea", "mx-auto", "my-3"], ["class", "card-deck col-12 p-5 text-center", 4, "ngIf"], [1, "card-deck", "col-12", "p-5", "text-center"], ["class", "card col-3 m-1 border-0 d-flex flex-wrap p-1", "style", "min-width: 20em;", 4, "ngFor", "ngForOf"], [1, "card", "col-3", "m-1", "border-0", "d-flex", "flex-wrap", "p-1", 2, "min-width", "20em"], [1, "container", "p-0"], [1, "card-img-top", 3, "src", "alt"], [1, "overlay", "text-center", 3, "click"], [1, "text"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function ProductosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "COLECCIONES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Encuentra productos incre\u00EDbles dise\u00F1ados para ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProductosComponent_div_6_Template, 2, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mostrar == false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], styles: [".container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    \r\n  }\r\n  .linea[_ngcontent-%COMP%]{\r\n      width: 20px;\r\n      height: 3px;\r\n      background: #000;\r\n  }\r\n  .img[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n  .container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n  transition: .3s;\r\n}\r\n  .container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    transform: scale(1.5);\r\n    transition: .3s;\r\n  }\r\n  h2[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    font-weight: bolder;\r\n}\r\n  .overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 200;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 0%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    transition: .5s ease;\r\n    background-color: rgba(255, 255, 255, 0.356);\r\n  }\r\n  .container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    height: 20%;\r\n  \r\n  }\r\n  .text[_ngcontent-%COMP%] {\r\n    color: #000000;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    text-align: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7O0VBRWxCO0VBQ0E7TUFDSSxXQUFXO01BQ1gsV0FBVztNQUNYLGdCQUFnQjtFQUNwQjtFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDRjtFQUNFLGVBQWU7QUFDakI7RUFFRTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCO0VBRUY7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0VBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQiw0Q0FBNEM7RUFDOUM7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXOztFQUViO0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJwcm9kdWN0b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5saW5lYXtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIH1cclxuXHJcbiAgLmltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuLmNvbnRhaW5lciA+IGltZ3tcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbiAgLmNvbnRhaW5lcjpob3ZlciBpbWd7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgfVxyXG4gIFxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1Nik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAudGV4dCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ 1188:
/*!***************************************************************************!*\
  !*** ./src/app/components/secciones/ubicaciones/ubicaciones.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UbicacionesComponent": function() { return /* binding */ UbicacionesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class UbicacionesComponent {
    constructor() { }
    ngOnInit() {
    }
}
UbicacionesComponent.ɵfac = function UbicacionesComponent_Factory(t) { return new (t || UbicacionesComponent)(); };
UbicacionesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbicacionesComponent, selectors: [["app-ubicaciones"]], decls: 48, vars: 0, consts: [[1, "jumbotron", "m-0"], [1, "row", "justify-content-center", "align-items-center"], [1, "col-4", "offset-md-2"], [1, "linea", "my-3"], [2, "max-width", "300px"], [1, "col"], [1, "row"], [1, "col-3", "border-bottom", "border-dark", "m-3", "pb-3"], ["href", "tel:44922234433"], ["href", "mailto:hola@buenavibra.com"], [1, "fondo"]], template: function UbicacionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "NUESTRAS UBICACIONES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, inventore. Accusamus deserunt quisquam earum qui molestias id voluptatum ea dolorum natus totam consequatur porro, a laudantium at maxime ad mollitia!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "La reyna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "500 Terry Francois Street San Francisco, CA 94158 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Tel: 123-456-7890");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "hola@buenavibra.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "El rey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "500 Terry Francois Street San Francisco, CA 94158 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Tel: 123-456-7890");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "hola@buenavibra.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cashback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "500 Terry Francois Street San Francisco, CA 94158 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Tel: 123-456-7890");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "hola@buenavibra.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Insane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "500 Terry Francois Street San Francisco, CA 94158 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Tel: 123-456-7890");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "hola@buenavibra.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 10);
    } }, styles: [".fondo[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-image: url('boss.jpg');\r\n    background-attachment: fixed;\r\n   background-size: cover;\r\n  }\r\n.jumbotron[_ngcontent-%COMP%]{\r\n    height: 80vh;\r\n    background: #F1D5CF;\r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    display: block;\r\n    text-decoration: none;\r\n    color: #000000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInViaWNhY2lvbmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlDQUFzRDtJQUN0RCw0QkFBNEI7R0FDN0Isc0JBQXNCO0VBQ3ZCO0FBQ0Y7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEIiLCJmaWxlIjoidWJpY2FjaW9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb25kb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2Jvc3MuanBnKTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4uanVtYm90cm9ue1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgYmFja2dyb3VuZDogI0YxRDVDRjtcclxufVxyXG5cclxuLnJvd3tcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5he1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 196:
/*!*************************************************************!*\
  !*** ./src/app/components/share/footer/footer.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 29, vars: 0, consts: [[1, "col-12"], [1, "row", "mt-5"], [1, "col-12", "col-sm-6", "col-md-4", "text-center", "mt-5"], [1, "list-unstyled"], [1, "font-weight-bold"], [1, "mt-3"], ["href", "https://www.pinterest.com/estudiolibremx", "target", "_blank"], ["src", "../../../../assets/img/pinterest.svg", "alt", ""], ["href", "https://www.facebook.com/estudiolibremx", "target", "_blank"], ["src", "../../../../assets/img/facebook.svg", "alt", ""], ["href", "https://www.instagram.com/estudiolibremx", "target", "_blank"], ["src", "../../../../assets/img/instagram.svg", "alt", ""], [1, "align-middle", "mt-3"], ["type", "text", "placeholder", "Enter your email here*", 1, "align-middle", "pr-5", 2, "height", "40px"], [1, "btn", "btn-dark", "rounded-0", "m-3", "pl-5", "pr-5"], [1, "creditos", "mt-5"], [1, "creditos", "mt-3"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "S\u00EDguenos en:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Enterate de nuestros nuevos lanzamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Suscribirse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A9 TA C O S - C O D E L L E G E 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cont\u00E1ctanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "hola@oregano.design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n    font-family:'Open Sans',sans-serif;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: 20px;\r\n    margin: 15px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    font-size: smaller;\r\npadding-left: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    background: #000;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    background: #ffff;\r\n    color: #000000;\r\n    transition: .5s;\r\n}\r\n\r\n.creditos[_ngcontent-%COMP%]{\r\n    font-size: smaller;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:nth-child(1){\r\n    font-weight:bolder;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIsa0JBQWtCO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5pbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxucGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbi5jcmVkaXRvc3tcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxubGk6bnRoLWNoaWxkKDEpe1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 6446:
/*!*************************************************************!*\
  !*** ./src/app/components/share/header/header.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 1250);
/* harmony import */ var _slider_promos_slider_promos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slider-promos/slider-promos.component */ 3381);



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-slider-promos");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _slider_promos_slider_promos_component__WEBPACK_IMPORTED_MODULE_1__.SliderPromosComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1250:
/*!*************************************************************!*\
  !*** ./src/app/components/share/navbar/navbar.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/productos"]; };
const _c2 = function () { return ["/about"]; };
const _c3 = function () { return ["/ubicaciones"]; };
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 23, vars: 8, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["routerLink", "", 1, "navbar-brand"], ["src", "../../../../assets/img/sector2.png", "alt", "logo buena vibra"], [1, "text-center"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse", "nav", "justify-content-end"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", "p-3", 3, "routerLink"], [1, "sr-only"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Buena Vibra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cat\u00E1logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nosotros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tiendas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["*[_ngcontent-%COMP%]{\r\n  font-family: 'Open sans',sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  color: #000000;\r\n  transition: .5s;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]:hover{\r\n    color: gray;\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  margin: 0px 20px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #000000;\r\n  font-size: 15px;\r\n  transition: .5s;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #f3dbd6;\r\n  text-decoration: none;\r\n  transition: .5s;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBmb250LWZhbWlseTogJ09wZW4gc2Fucycsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDJ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG5oMjpob3ZlcntcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogNTBweDtcclxuICBtYXJnaW46IDBweCAyMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogI2YzZGJkNjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4ubG9naW57XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ 1638:
/*!*****************************************************************!*\
  !*** ./src/app/components/share/notfound/notfound.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotfoundComponent": function() { return /* binding */ NotfoundComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(); };
NotfoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 9, vars: 0, consts: [[1, "card", "my-5", "py-5", "border-0"], ["src", "../../../../assets/img/nave.png", "alt", "...", 1, "card-img-top", "mx-auto"], [1, "card-body", "mx-auto", "text-center"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-dark", "rounded-0"]], template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Parece que no hay nada por aqu\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "La p\u00E1gina a la que intentas acceder no existe o se ha movido. Intenta volver a la p\u00E1gina principal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ir a la p\u00E1gina principal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%]{\r\n    width: 20vw;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    background: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoibm90Zm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG59XHJcblxyXG5he1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 324:
/*!*************************************************************************************!*\
  !*** ./src/app/components/share/pantalla-productos/pantalla-productos.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PantallaProductosComponent": function() { return /* binding */ PantallaProductosComponent; }
/* harmony export */ });
/* harmony import */ var _Data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Data/data */ 8505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4236);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);





class PantallaProductosComponent {
    constructor(AR) {
        this.AR = AR;
        this.mostrar = false;
        this.AR.params
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.pluck)('id'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((id) => this.GetProduct(id)))
            .subscribe((valor) => (this.producto = valor));
    }
    ngOnInit() { }
    GetProduct(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(_Data_data__WEBPACK_IMPORTED_MODULE_0__.Products).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((producto) => producto.id == id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((producto) => (Object.assign(Object.assign({}, producto), { img: `../../../../${producto.img}` }))));
    }
}
PantallaProductosComponent.ɵfac = function PantallaProductosComponent_Factory(t) { return new (t || PantallaProductosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
PantallaProductosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PantallaProductosComponent, selectors: [["app-pantalla-productos"]], decls: 34, vars: 6, consts: [[1, "container", "p-5"], [1, "row", "mt-5"], [1, "col"], ["alt", "", 1, "col", "border", "border-dark", 3, "src"], [2, "list-style", "none"], ["id", "color1"], [1, "text-secondary"], [1, "my-3"], [1, "color1"], [1, "text-secondary", "mb-2"], ["type", "number", 1, "py-2", "my-3", 2, "width", "6em"], [1, "btn", "btn-dark", "my-3", "col-9", "rounded-0"], [1, "p-0", "border-bottom", "border-dark", "col-9"], [1, "btn", "col-9", "info", "text-left", "m-0", "pl-0", "py-3", "d-flex", "bd-highlight", "accordion"], [1, "py-2", "w-100", "bd-highlight"], [1, "py-2", "flex-shrink-1", "bd-highlight"], [1, "col-block"]], template: function PantallaProductosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Agregar al carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Informaci\u00F3n de productos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Home/ ", ctx.producto.product, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.producto.img, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.producto.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" SKU:00", ctx.producto.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" $", ctx.producto.price, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.producto.description);
    } }, styles: ["button[_ngcontent-%COMP%]{\r\n    background: #000;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]{\r\n    background: #ffff;\r\n    border: none;\r\n    color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbnRhbGxhLXByb2R1Y3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoicGFudGFsbGEtcHJvZHVjdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG4uaW5mb3tcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 3381:
/*!***************************************************************************!*\
  !*** ./src/app/components/share/slider-promos/slider-promos.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderPromosComponent": function() { return /* binding */ SliderPromosComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SliderPromosComponent {
    constructor() { }
    ngOnInit() {
    }
}
SliderPromosComponent.ɵfac = function SliderPromosComponent_Factory(t) { return new (t || SliderPromosComponent)(); };
SliderPromosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderPromosComponent, selectors: [["app-slider-promos"]], decls: 10, vars: 0, consts: [[1, "slider"], [1, "mt-3"]], template: function SliderPromosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ORDENA 2 PRODUCTOS Y RECIBE 20% DE DESCUENTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " NUEVOS PINES MET\u00C1LICOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ENTREGA SIN COSTO EN COMPRAS DE $600 0 M\u00C1S ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " NUEVA L\u00CDNEA CADA MES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".slider[_ngcontent-%COMP%] {\r\n  background: #000;\r\n  font-family: \"Open sans\", sans-serif;\r\n  width: 100%;\r\n  margin: auto;\r\n  overflow: hidden;\r\n  color: aliceblue;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 0;\r\n  width: 400%;\r\n  -webkit-animation: cambio 20s infinite linear;\r\n          animation: cambio 20s infinite linear;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  list-style: none;\r\n  text-align: center;\r\n  justify-content: center;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n@-webkit-keyframes cambio {\r\n  0% {\r\n    margin-left: 0;\r\n  }\r\n  20% {\r\n    margin-left: 0;\r\n  }\r\n\r\n  25% {\r\n    margin-left: -100%;\r\n  }\r\n  45% {\r\n    margin-left: -100%;\r\n  }\r\n\r\n  50% {\r\n    margin-left: -200%;\r\n  }\r\n  70% {\r\n    margin-left: -200%;\r\n  }\r\n\r\n  75% {\r\n    margin-left: -300%;\r\n  }\r\n  100% {\r\n    margin-left: -300%;\r\n  }\r\n}\r\n\r\n@keyframes cambio {\r\n  0% {\r\n    margin-left: 0;\r\n  }\r\n  20% {\r\n    margin-left: 0;\r\n  }\r\n\r\n  25% {\r\n    margin-left: -100%;\r\n  }\r\n  45% {\r\n    margin-left: -100%;\r\n  }\r\n\r\n  50% {\r\n    margin-left: -200%;\r\n  }\r\n  70% {\r\n    margin-left: -200%;\r\n  }\r\n\r\n  75% {\r\n    margin-left: -300%;\r\n  }\r\n  100% {\r\n    margin-left: -300%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlci1wcm9tb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0VBQ1gsNkNBQXFDO1VBQXJDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUE1QkE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzbGlkZXItcHJvbW9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gc2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5zbGlkZXIgdWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogNDAwJTtcclxuICBhbmltYXRpb246IGNhbWJpbyAyMHMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4uc2xpZGVyIGxpIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhbWJpbyB7XHJcbiAgMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIDI1JSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwMCU7XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwMCU7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMDAlO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMDAlO1xyXG4gIH1cclxuXHJcbiAgNzUlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map