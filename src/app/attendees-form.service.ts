import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {map, mapTo} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendeesFormService {
  attendees_form_group: FormGroup;
  validForm: Observable<boolean>;

  constructor(private fb: FormBuilder) {
    this.attendees_form_group = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
    });
  }

}
