import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupGroupComponent } from './meetup-group.component';

describe('MeetupGroupComponent', () => {
  let component: MeetupGroupComponent;
  let fixture: ComponentFixture<MeetupGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
