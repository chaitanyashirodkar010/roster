
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpasswordform: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resetpasswordform = this.formBuilder.group({

      loginpassword: ["", [Validators.required, Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      )]],
      confirmpassword: ["", [Validators.required]],
    })
  }


  onSubmit() {
    // if (this.resetpasswordform.invalid) {
    //   return;
    // }
    if (this.resetpasswordform.controls['loginpassword'].value == this.resetpasswordform.controls['confirmpassword'].value) {
      console.log('object');
    }

  }


  forgotPassword() {

  }
}
