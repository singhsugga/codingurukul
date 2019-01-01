import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: '',component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
