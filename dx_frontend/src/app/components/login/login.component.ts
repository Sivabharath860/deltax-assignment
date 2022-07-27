import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(private router: Router, private loginService: LoginService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(['']);
    }
    console.log(this.isLoggedIn);
    console.log(window.sessionStorage);
  }
  onSubmit(): void{
    const { username, password } = this.form;
    console.log("login"+username+" "+password);
    this.loginService.login(username, password).subscribe(
      data=>{
        console.log(data);
        if(data.length>0){
          this.tokenService.saveToken(data[0].userId);
          this.tokenService.saveUser(data[0].userId);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();
          this.router.navigate(['']);
        }else{
          this.errorMessage = "Username Or Password did not match";
          this.isLoginFailed = true;
        }
      }
    )
    
  }
  reloadPage(): void {
    window.location.reload();
  }

}
