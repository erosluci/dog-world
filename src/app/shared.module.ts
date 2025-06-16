import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DogCollectionPageComponent } from './components/dog-collection-page/dog-collection-page.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginPageComponent,
    DogCollectionPageComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class SharedModule { }
