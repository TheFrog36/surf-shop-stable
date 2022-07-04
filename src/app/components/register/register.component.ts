import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMath } from 'src/app/custom-validators/password-match.validator';
import { passwordValidator } from 'src/app/custom-validators/password.validator';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  registerForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    dob: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordValidator]],
    passwordConfirm: ['', [Validators.required, passwordValidator]],
    addres: ['', [Validators.required]],
    city: ['', [Validators.required]],
    cardnumber: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]]
  }, {Validators: [ passwordMath]})

  register(){
    this.userService.register(this.registerForm.value)
    console.log(this.registerForm.value)
  }
  ngOnInit(): void {
  }

}
