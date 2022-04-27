import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {ExchangeRateComponent} from '../app/modules/exchage-rate/component/exchange-rate/exchange-rate.component';
import { RegionComponent } from "./modules/customer/component/region/region.component";
import { HomeComponent } from "./modules/home/component/home/home.component";

const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'exchange-rate', component: ExchangeRateComponent},
    {path: 'region', component: RegionComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}