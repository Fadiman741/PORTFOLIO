import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ProjectsComponent } from './projects/projects.component';
import { ImagesSliderComponent } from './images-slider/images-slider.component';
import { AritclesSliderComponent } from './aritcles-slider/aritcles-slider.component';

@NgModule({
  declarations: [							
    AppComponent,
    ProjectsComponent,
    ImagesSliderComponent,
    AritclesSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent,ProjectsComponent]
})
export class AppModule { }
