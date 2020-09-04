import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SticketComponent } from './sticket.component';

describe('SticketComponent', () => {
  let component: SticketComponent;
  let fixture: ComponentFixture<SticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
