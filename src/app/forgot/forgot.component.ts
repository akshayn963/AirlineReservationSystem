import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    cpassword: ['', Validators.required]

  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }
  gotoLogin(page) {
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
  }

  async changepass() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3600/changepass';
    if (data.password === data.cpassword) {
      const result: any = await this.http.post(url, data).toPromise();
    }
    this.fbFormGroup.reset();
  }

}
