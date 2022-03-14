import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { ApiService } from './shared/services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DetailCardsComponent } from './detail-cards/detail-cards.component';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    OverviewComponent,
    DetailsComponent,
    FooterComponent,
    HeaderComponent,
    DetailCardsComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
