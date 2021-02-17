import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AttendeesFormService} from '../attendees-form.service';
import {Observable} from 'rxjs';

export interface eventPost {
  title: string;
  date: string;
  desc: string;
  host: string;
  icon: string;
  attendants: number;
  image: string;
  attending: boolean;
}


@Component({
  selector: 'app-meetup-group',
  templateUrl: './meetup-group.component.html',
  styleUrls: ['./meetup-group.component.scss']
})
export class MeetupGroupComponent implements OnInit {
  relPath = 'assets/team_image/';
  relPathImg = 'assets/images/';
  attend_icons = ['🙋🏾‍♀️️', '🙋🏿‍♀️️', '🙋🏾‍♂️'];
  form: FormGroup;
  validForm: Observable<boolean>;

  eventCards: eventPost[] = [
    {
      title: 'HTML and CSS basics',
      desc: '',
      attendants: 40,
      date: '24/02/2021',
      icon: `${this.relPath + 'hana_img.png'}`,
      image: '',
      host: 'Hana',
      attending: false
    },
    {
      title: 'In\'s and out of Javascript ',
      desc: '',
      attendants: 31,
      date: '28/02/2021',
      icon: `${this.relPath + 'pedro.png'}`,
      image: '',
      host: 'Pedro',
      attending: false
    },
    {
      title: 'The Beauty of JS Frameworks',
      desc: '',
      attendants: 20,
      date: '05/03/2021',
      icon: `${this.relPath + 'hana_img.png'}`,
      image: 'Hana',
      host: 'Hana',
      attending: false
    },
  ];

  constructor(private sanitizer: DomSanitizer, matIconReg: MatIconRegistry, private formForAttendees: AttendeesFormService) {
    matIconReg.addSvgIcon(
      `share`,
      sanitizer.bypassSecurityTrustResourceUrl(`${this.relPathImg}share.svg`)
    );
  }

  ngOnInit() {
    this.form = this.formForAttendees.attendees_form_group;
    // this.formForAttendees.validForm
  }

  toggle(event:eventPost){
    event.attending = !event.attending
    console.log(event)
    console.log(event.attending)
  }


}
