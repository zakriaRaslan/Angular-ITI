import { Component } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})


export class OrderMasterComponent {
  catList:Icategory[];
  selectedCatId:number=0;
  receivedTotalPrice:number=0;


constructor(){
  this.catList=[
    {Id:1,name:"Laptops"},
    {Id:2,name:"Tablets"},
    {Id:3,name:"Mobiles"},
  ]

}

onTotalPriceChanged(totalPrice:number){
this.receivedTotalPrice=totalPrice;
}


}
