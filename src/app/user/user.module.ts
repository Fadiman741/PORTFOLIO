import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserroutingModule} from './user-routing.module';
import {LoginComponent} from './login/login.component'

@NgModule({
  
  imports: [
    CommonModule,
    UserroutingModule,
    
  ],
  declarations: [LoginComponent],
  exports:[LoginComponent]
})
export class UserModule { }
