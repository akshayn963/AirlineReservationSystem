
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { faFacebook, faYoutube, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public faFacebook = faFacebook;
  public faYoutube = faYoutube;
  public faPhone = faPhone;
  public faAt = faAt;

  public uiInvalidCredential = false;
  public fbFormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  gotoforgot(page) {
    this.router.navigate(['forgot']);
  }

  ngOnInit(): void { }

  async enteruser() {


    const data = this.fbFormGroup.value;
    //ajax call
    const url = 'http://localhost:3600/auth-user';
    const result: any = await this.http.post(url, data).toPromise();
    console.log(result);
    // add session here
    if (result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['login']);
    } else {
      this.uiInvalidCredential = true;
    }
    this.fbFormGroup.reset();

  }

  Reghere() {
    this.router.navigate(['register']);
  }

}