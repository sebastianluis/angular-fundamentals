import { Routes } from '@angular/router'
import {  
    EventsListComponent,   
    CreateEventComponent,
    EventDetailsComponent,   
    EventsListResolver,
    EventRouteActivator
  } from './events/index'
import { Error404Component } from './errors/404.component';
export const appRoutes: Routes = [
    { path: 'events/new', component:CreateEventComponent, canDeactivate: ['canDeactiveCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: '', redirectTo: '/events', pathMatch:'full' },
    { path:'404', component: Error404Component},
    { path: 'user', loadChildren: './user/user.module#UserModule'}   
]