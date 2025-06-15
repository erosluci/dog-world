import { Component, inject, OnInit } from '@angular/core';
import { currentUser } from '../../consts/consts';
import { NameToUpperPipe } from '../../pipes/name-to-upper.pipe';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [NameToUpperPipe, MatButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private _router = inject(Router)

  protected username: string = "";

  ngOnInit(): void {
    const user = localStorage.getItem(currentUser);
    if (user) {
      this.username = JSON.parse(user).username;
    }
  }

  logOut(): void {
    localStorage.removeItem("currentUser");
    this._router.navigate(['/login']);
  }
}
