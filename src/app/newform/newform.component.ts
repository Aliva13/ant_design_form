import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      description: '',
      phoneNumber: '',
      birthDate: null,
      designation: null,
      hobbies: [],
      technicalSkills: []
    });
  }
  ngOnInit() {
  }
}
