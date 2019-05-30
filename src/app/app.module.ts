import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { RouteModule } from "./route/route.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GaleriaComponent } from "./components/galeria/galeria.component";
import { MenuComponent } from "./components/menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GaleriaComponent,
    MenuComponent
  ],
  imports: [BrowserModule, FormsModule, RouteModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
