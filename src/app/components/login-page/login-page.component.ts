import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class LoginPageComponent {

  form: FormGroup;
  isRegisterMode = false;
  message = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  toggleMode(): void {
    this.isRegisterMode = !this.isRegisterMode;
    this.message = '';
    this.form.reset();
  }

  onSubmit(): void {
    const user: User = this.form.value;
    const users = this.getUsers();

    if (this.isRegisterMode) {
      const userExists = users.find(u => u.username === user.username);
      if (userExists) {
        this.message = 'Ez a felhasználónév már létezik!';
        return;
      }
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      this.message = 'Sikeres regisztráció! Most jelentkezz be.';
      this.isRegisterMode = false;
      this.form.reset();
    } else {
      const match = users.find(u => u.username === user.username && u.password === user.password);
      if (match) {
        localStorage.setItem('currentUser', JSON.stringify(match));
        this.message = '';
        this.router.navigate(['/main']);
      } else {
        this.message = 'Hibás felhasználónév vagy jelszó!';
      }
    }
  }

  private getUsers(): User[] {
    const stored = localStorage.getItem('users');
    return stored ? JSON.parse(stored) : [];
  }
}