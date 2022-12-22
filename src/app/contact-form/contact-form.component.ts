import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('',[Validators.minLength(2),Validators.required]),
      lastName: new FormControl('',[Validators.minLength(2),Validators.required]),
      email: new FormControl('',[Validators.email,Validators.required]),
      adress: new FormGroup({
        country: new FormControl('us'),
        city: new FormControl('', Validators.required)
      }),
      phone: new FormControl('+'),
      message: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(500)]),
      checkbox: new FormControl('',Validators.required)
    })
  }

  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value}
      console.log(formData)
    }
    this.form.reset()

  }

  setCapital() {
    const cityMap = {
        us: 'Washington',
        ca: 'Ottawa',
        ru: 'Moscow',
        uz: 'Tashkent',
        fr: 'Paris'
    }
    const cityKey = this.form.get('adress').get('country').value
    const city = cityMap[cityKey]
    console.log(city)
    this.form.patchValue({
      adress: {city}
    })
    }
}
