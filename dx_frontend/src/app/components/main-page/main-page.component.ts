import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import * as $ from 'jquery';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router, private _location: Location,
    private tokenService: TokenService) { }

  ngOnInit() {
    //Toggle Click Function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    //this.router.navigate(['home']);
    //this.router.navigate([{ outlets: { lg: [ 'login' ] }}])
  }
  backClicked() {
    this._location.back();
  }
  logout(){
    this.tokenService.signOut();
    window.location.reload();
    this.router.navigate(['']);
  }

}
