import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public uiInvalidCredential = false;
  public fbFormGroup = this.fb.group({
    // roundtrip: [],
    // oneway: [],
    // multicity: [],
    //all: [],

    all: [],
    fromCity: ['', Validators.required],
    Tocity: ['', Validators.required],
    departdate: ['', Validators.required],
    returndate: [],
    adt: ['', Validators.required],
    child: ['', Validators.required],
    TravelClass: ['', Validators.required],
    flight: [],



  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }


  //ngOnInit(): void { }
  ngOnInit(): void {

    if (!sessionStorage.getItem("sid")) {

      this.router.navigate(['login']);
    }
  }

  // akash 
  LogoutHere() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }

  async BookHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3600/bookdetails';

    let respp = await this.http.post(url, data).toPromise();
    console.log(respp);
    this.fbFormGroup.reset();
    // this.router.navigate(['sticket']);
  }

  // async getBookings(id){
  //   const data =id;
  //   const url = 'http://localhost:3600/getBoookingsDetails';
  //   await this.http.post(url, data).subscribe((res)=>{
  //     return res;
  //   })
  // }

}
