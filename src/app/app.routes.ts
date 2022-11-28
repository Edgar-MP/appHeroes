import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});