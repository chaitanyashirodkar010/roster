import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-check-mail',
  templateUrl: './check-mail.component.html',
  styleUrls: ['./check-mail.component.scss']
})
export class CheckMailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  resendmail() {

  }
  backClicked() {
    this.location.back();
  }
}

