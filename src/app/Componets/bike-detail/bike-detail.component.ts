import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../Services/Bike.service'
import {ActivatedRoute} from '@angular/router'

import { Info_product } from 'src/app/Models/Bike';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})

  
  

export class BikeDetailComponent implements OnInit {

  id: any
  bike: Info_product

  constructor(
    private bikeService: BikeService,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.id = this.activateRouter.snapshot.paramMap.get("id")
     this.bikeService.getBikePorId(this.id)
     .toPromise()
     .then((bicicleta)=>{
       this.bike = bicicleta;
       console.log(this.id)
     })
    // this.getBikeById()
    

    
  }

  // getBikeById(){
  //   this.bikeService.getBikePorId(this.id)
  //   .toPromise()
  //   .then((res)=>{
  //     this.id=res;
  //     console.log(this.id)

  //   })
  //   .catch(error=>{console.log(error)})
    
  // }

  



}
