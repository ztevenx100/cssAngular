import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MesutComponent } from "../components/megasoft/miMesut/miMesut.component";
import { HomeComponent } from "../components/home/home.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "mesut", component: MesutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule {}
