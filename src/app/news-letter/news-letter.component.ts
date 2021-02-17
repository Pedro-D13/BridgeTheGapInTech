import { Component, OnInit } from '@angular/core';
import {AttendeesFormService} from '../attendees-form.service';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';


export interface Tile {
  title: string
  content: string;
  array_of_links?: [
    { text: string; link: string, image: string }
  ]
  rows: number;
  cols: number;

}



@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent  {
  news_letter_form : FormGroup
  constructor(private form:AttendeesFormService,private _snackBar: MatSnackBar) {
    this.news_letter_form = this.form.attendees_form_group
  }

    emailGetter(){
      return this.form.attendees_form_group.get(['emailAddress']).value
    }

    tiles: Tile[] = [
    {title: 'About', content: `
    In 2020, Hana Abdi (HanaCodes)[​https://twitter.com/HanaCodes​] started BTGIT Meetup group out of a desire for an ongoing, accessible, and inclusive tech event for people of color living inLondon. Hana realized that a space was needed, where individuals from non-western cultures would feel welcomed, empowered and comfortable to participate without compromising on their values.
    `, rows: 1, cols: 1},
    {title: 'Code Of Conduct', content: `
    Bridge The Gap In Tech is dedicated to providing a safe, inclusive, welcoming andharassment-free space and experience for all community participants, regardless of sex,disability, physical appearance, age, body size, race, immigration status, social and economicclass, educational level, or nationality. We do not tolerate harassment of community members in any form. Participants violating these rules may be sanctioned or expelled from the community at the discretion of the organizers.Harassment includes offensive verbal or written comments related to gender, disability, physical appearance, age, body size, race, nationality or religious beliefs, deliberate intimidation, threats,stalking, following, harassing, photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.Sexual language and imagery is not appropriate for any of our events or communication channels. Community members asked to stop any harassing behavior are expected to comply immediately.If a community member engages in a  harassing behavior, the organizers may take any action they deem appropriate, including warning the offender, expulsion from the community, and/or removal from an event. If you are being harassed, notice that someone else is being harassed,or have any other concerns, please contact organizers through the [contact form here](link to contact) immediately, or as soon as you feel comfortable doing so
    `, rows: 1, cols: 1},
    {title: 'Contact', content: '', rows: 1, cols: 1},
    {title: 'Social', content: '', array_of_links: [{text: 'twitter', link: '', image: ''}], rows: 1, cols: 1},

  ];


  submit_email_to_backend(fakeEmail) {
    this._snackBar.open(`Successfully registered ${fakeEmail}`, 'undo', {
      duration: 3000,
      panelClass:['snack_bar_container_custom']
    });

  }




}
