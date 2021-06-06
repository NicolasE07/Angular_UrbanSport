import { Component, OnInit } from '@angular/core';
const swal = require ('sweetalert');

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  service(){
    swal({
      title: 'Contactanos via whatsapp',
      text: '+57 3114901937',
    })
  }



}
