import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ContactService } from '../../Services/contact-us.service'
const swal = require('sweetalert');

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  createContactUsForms: FormGroup
  

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
    this.validator();
   }

  ngOnInit(): void {
  }

  validator(){
    this.createContactUsForms = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      text: ['', [Validators.required, Validators.maxLength(100)]]
    })
  }

  send(){
    if(this.createContactUsForms.valid){
      this.contactService.sendContact(this.createContactUsForms.value).subscribe(
        (sendcorrect)=>{
          swal('Envio exitoso', 'Gracias por contactarnos')
          
        },
        (error)=>{
          swal('error', 'no se ah podido enviar')
        }
      )
    }
  }

}
