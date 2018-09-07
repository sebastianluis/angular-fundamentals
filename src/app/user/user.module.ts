import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'
import { userRoutes } from './user.routes'
@NgModule({
  declarations: [   
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
  ]   
})
export class UserModule {
  
 }
 
