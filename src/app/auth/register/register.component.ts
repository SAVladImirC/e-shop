import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: User = new User("", "", "", "", "");

  constructor(private session: SessionService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.session.user.address = this.model.address;
    this.session.user.email = this.model.email;
    this.session.user.name = this.model.name;
    this.session.user.password = this.model.password;
    this.session.user.surname = this.model.surname;
    this.auth.registeredUsers.push(this.model);
    this.router.navigate(['auth/login'])
  }

}
