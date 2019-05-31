import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { RouteModule } from "./route/route.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GaleriaComponent } from "./components/home/galeria/galeria.component";
import { MenuComponent } from "./components/home/menu/menu.component";
import { MesutComponent } from "./components/megasoft/miMesut/miMesut.component";
import { Portafolio1Component } from "./components/home/portafollio/portafolio1/portafolio1.component";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GaleriaComponent,
    MenuComponent,
    Portafolio1Component,
    MesutComponent
  ],
  imports: [BrowserModule, FormsModule, RouteModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
