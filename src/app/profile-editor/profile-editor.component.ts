import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.scss'
})
export class ProfileEditorComponent implements OnInit {
  form!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      name: [''],
      surname: ['Gvari'],
      phoneNumber: [''],
      email: [''],
      address: this.formBuilder.group({
        street: [],
        city: [],
        country: [],
      })
    })
  }


  onSubmit() {
    this.form.patchValue({
      phoneNumber: '+995'
    })

    console.log(this.form.value)
  }

  setValues() {
    this.form.setValue({
      name: 'Nika',
      email: '@',
      surname: 'rame',
      phoneNumber: '+995'
    })

  }
}
