import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter();


  constructor(private session: SessionService, private router: Router) { }

  ngOnInit(): void {
  }


  getItemsInCart() {
    return this.session.productsInCart.length;
  }

  isLogged() {
    return this.session.user.email != "";
  }

  getUserName() {
    return this.session.user.name;
  }

  isAdmin() {
    return this.session.user.name == "admin";
  }

  goToAdmin() {
    this.router.navigate(['admin/products']);
  }

  toggleCart() {
    this.toggle.emit();
  }

  goHome() {
    this.router.navigate(['/'])
  }

  goToLogIn() {
    this.router.navigate(['auth/login']);
  }

  goToSignUp() {
    this.router.navigate(['auth/register']);
  }
}
