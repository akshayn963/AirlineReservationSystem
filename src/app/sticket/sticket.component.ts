import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sticket',
  templateUrl: './sticket.component.html',
  styleUrls: ['./sticket.component.css']
})
export class SticketComponent implements OnInit {
  public users: any = [];

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.makeajaxcall();

  }
  async makeajaxcall() {
    const url = "http://localhost:3600/readticket"
    let resp = await this.http.get(url).toPromise();
    //resp.subscribe((data) => this.users = data);
    this.users = resp;
    console.log(resp);

  }



}
