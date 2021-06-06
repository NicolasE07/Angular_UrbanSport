import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router'
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BikeComponent } from './Components/bike/bike.component';
import { AccesoriosComponent } from './Components/accesorios/accesorios.component';
import { BikeDetailComponent } from './Componets/bike-detail/bike-detail.component';


const routesApp: Routes = [
  {path: '' ,component:HomeComponent },
  {path:'home', component:HomeComponent },
  {path:'contact-us', component:ContactUsComponent },
  {path:'bicicletas', component:BikeComponent },
  {path:'accesorios', component:AccesoriosComponent },
  {path:'bike/:id', component:BikeDetailComponent },
  {path:'accesorio/:id', component:BikeDetailComponent },
  
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactUsComponent,
    FooterComponent,
    BikeComponent,
    AccesoriosComponent,
    BikeDetailComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
