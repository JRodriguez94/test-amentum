import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService,) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut()
      .then(() => {
        this.router.navigate(['home']);
      }).catch(() => {
        console.log('Error al cerrar sesión :c')
      })
  }

}
