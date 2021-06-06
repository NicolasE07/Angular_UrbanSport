import { Component, OnInit } from '@angular/core';
const swal = require ('sweetalert');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  swl(){
    swal({
      title: "Contactanos via whatsapp",
      text: "+57 3114901937",

    })
  }



}
