import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dx_frontend';
  isLoggedIn = false;
  constructor(private tokenService: TokenService, private router: Router){}
  ngOnInit(){
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(['']);
      console.log(this.isLoggedIn);
      console.log(window.sessionStorage);
      console.log('Home Comp');
    }
    else{
      this.router.navigate([{ outlets: { lg: ['login'] }}]);
    }
  }
}
