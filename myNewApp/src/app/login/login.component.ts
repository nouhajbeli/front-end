import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  role = '';
  status = localStorage['login_status'];
  isLoggedIn = false;

  constructor(private router: Router, private service: LoginService) {}

  onlogin() {
    if (this.username.length == 0) {
      alert('username field can not be empty');
    } else if (this.password.length == 0) {
      alert('password can not be empty');
    } else {
      this.service
        .login(this.username, this.password, this.role)
        .subscribe((res: any) => {
          if (
            res[0].username === this.username &&
            res[0].password === this.password &&
            res[0].role === 'admin'
          ) {
            localStorage.setItem('admin', JSON.stringify(res));
            localStorage['login_status'] = '1';

            this.router.navigate(['/admin']);
          } else if (
            res[0].username === this.username &&
            res[0].password === this.password &&
            res[0].role === 'student'
          ) {
            localStorage['login_status'] = '1';
            localStorage.setItem('student', JSON.stringify(res));
            this.router.navigate(['/student']);
          } else if (
            res[0].username === this.username &&
            res[0].password === this.password &&
            res[0].role === 'teacher'
          ) {
            localStorage['login_status'] = '1';
            localStorage.setItem('teacher', JSON.stringify(res));
            this.router.navigate(['/teacher']);
          } else if (res === null) {
            alert('invaild username or password');
          }
        });
    }
  }

  // onlogout() {
  //   this.isLoggedIn = false;
  //   localStorage['login_status']='0'
  //   this.router.navigate(['/login']);
  // }

  ngOnInit(): void {}
}
