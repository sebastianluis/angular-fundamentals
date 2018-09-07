import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AuthService } from './user/auth.service'
import {  
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventService,
  EventsListResolver,
  EventRouteActivator
} from './events/index'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  
  ],
  providers: [ 
    EventService, 
    ToastrService, 
    EventRouteActivator,
    { provide: 'canDeactiveCreateEvent', useValue: checkDirtyState},
    EventsListResolver,
    AuthService
   ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
  
 }
 export function checkDirtyState(component:CreateEventComponent) {
   if(component.isDirty)
    return window.confirm("Do you want to discard the changes?")
   return true;
 }
