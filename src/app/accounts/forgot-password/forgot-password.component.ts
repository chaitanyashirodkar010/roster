

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotpassword: FormGroup;

  constructor(private formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.forgotpassword = this.formBuilder.group({
      emailAddress: ["", [Validators.required, Validators.email]]
    })
  }


  onSubmit() {
    if (this.forgotpassword.invalid) {
      return;
    }
    console.log(this.forgotpassword);
  }
  backClicked() {
    this.location.back();
  }
}
