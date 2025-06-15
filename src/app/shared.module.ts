import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DogCollectionPageComponent } from './components/dog-collection-page/dog-collection-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    DogCollectionPageComponent
  ],
  imports: [
    CommonModule,
    FormGroup,
    FontAwesomeModule
  ]
})
export class SharedModule { }
