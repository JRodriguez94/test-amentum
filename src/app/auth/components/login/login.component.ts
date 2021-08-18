import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

// ? Para hacer el enrutado despues de login
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  
  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]]
    });
  }
  
  get f() { return this.loginForm.controls; }

  sendLogIn(event: Event) {
    event.preventDefault();
    console.log('Contenido del formulario antes validacion: ', this.loginForm.value)
    console.log('Valid(? ', this.loginForm.valid)
    if(this.loginForm.valid) {
      console.log(this.loginForm.value)
      const user = this.loginForm.value;
      // ? mandar a llamar la funcion para loguin
      this.authService.logIn(user.email, user.password)
      .then(() => {
        console.log("Usuario identificado :D")
        this.router.navigate(['home'])
      })
      .catch(() => {
        console.log("Error de autenticación :c")
      }) ;
      // ? Hacer la redireccion si el usuario está autenticado
      // ? this.router.navigate('/home')
    } else

    console.log("No es valido")
  }

}
