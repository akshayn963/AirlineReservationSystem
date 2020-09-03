import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public uiInvalidCredential = false;
  public fbFormGroup = this.fb.group({
    Name: ['', Validators.required],
    Email: ['', Validators.required],
    password: ['', Validators.required],
    cpassword: ['', Validators.required],
    phoneno: ['', Validators.required],


  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void { }
  async RegisterProcessHere() {
    const data = this.fbFormGroup.value;
    if (data.password === data.cpassword) {
      const url = 'http://localhost:3600/adduser';
      const result: any = await this.http.post(url, data).toPromise();
    }
    this.fbFormGroup.reset();
    //this.router.navigate(['login']);
  }

}
