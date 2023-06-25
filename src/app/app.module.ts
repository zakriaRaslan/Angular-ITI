import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductListComponent } from './Order/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { UsdToEgpPipe } from './Pipes/usd-to-egp.pipe';
import { OrderMasterComponent } from './Order/order-master/order-master.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ProductListComponent,
    LightBoxDirective,
    UsdToEgpPipe,
    OrderMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //To Use Two Way Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
