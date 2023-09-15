import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {
    username: '',
    password: ''
  };
  message: string = "";

  constructor(private auth: AuthService, private router: Router, private session: SessionService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var test = this.auth.registeredUsers.find(u => u.email == this.model.email && u.password == this.model.password);
    if (test) {
      this.session.user = test;
      this.router.navigate(["/"]);
      this.message = "";
    } else {
      this.message = "Invalid credentials";
    }
  }
}
