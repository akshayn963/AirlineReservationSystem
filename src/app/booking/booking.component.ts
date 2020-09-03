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
    fromCity: ['', Validators.required],
    Tocity: ['', Validators.required],
    departdate: ['', Validators.required],
    returndate: [],
    adt: ['', Validators.required],
    child: ['', Validators.required],
    TravelClass: ['', Validators.required]

  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }


  ngOnInit(): void { }
  async BookHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3600/bookdetails';

    await this.http.post(url, data).toPromise();
    this.fbFormGroup.reset();
    //this.router.navigate(['login']);
  }

  // async getBookings(id){
  //   const data =id;
  //   const url = 'http://localhost:3600/getBoookingsDetails';
  //   await this.http.post(url, data).subscribe((res)=>{
  //     return res;
  //   })
  // }

}
