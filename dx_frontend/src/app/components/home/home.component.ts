import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = true;
  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit() {
    console.log("......")
    console.log(this.tokenService.getToken());
    console.log(this.isLoggedIn);
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      //this.router.navigate(['tTenS']);
      console.log(this.isLoggedIn);
      console.log(window.sessionStorage);
      console.log('Home Comp');
    }
    else{
      this.router.navigate([{ outlets: { lg: ['login'] }}]);
    }
    
    
  }
  topTenS(): void{
    this.router.navigate(['tTenS'])
  }
  topTenA(): void{
    this.router.navigate(['tTenA'])
  }

}
