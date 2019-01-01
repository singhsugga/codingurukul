import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { SkillingComponent } from './components/skilling/skilling.component';
import { FeaturesComponent } from './components/features/features.component';
import { EventsComponent } from './components/events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'; 
import {AngularFireModule} from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ServicesComponent } from './components/services/services.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventListComponent } from './components/event-list/event-list.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MainComponent,
    SkillingComponent,
    FeaturesComponent,
    EventsComponent,
    ServicesComponent,
    HowItWorksComponent,
    FooterComponent,
    EventDetailsComponent,
    EventListComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
