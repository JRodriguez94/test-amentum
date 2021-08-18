import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

// ? Para hacer el enrutado despues de login
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    this.buildForm();
  }


  private buildForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
      passwordConfirmation: ['', [Validators.required, Validators.min(6)]],
    });
  }

  sendRegist(event: Event) {
    this.submitted = true;
    event.preventDefault();
    if(this.registerForm.valid) {
      console.log(this.registerForm.value)
      const newUser = this.registerForm.value;
      if(newUser.password === newUser.passwordConfirmation) {
        console.log('New USer: ', newUser)
        // ? mandar a llamar la funcion para login
        this.authService.createUser(newUser.email, newUser.password)
        console.log('Si pasa de aqui')
        .then(() => {
          console.log('Se registró el usuario :D');
          this.router.navigate(['login'])

        });
      }

      // ? Hacer la redireccion si el usuario está autenticado
      // ? this.router.navigate('/home')
    } else

    console.log("No es valido")
  }
  

}
