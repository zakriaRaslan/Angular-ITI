import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges {
  prdlist:Iproduct[];
  totalPrice:number=0;
  prdByCatId:Iproduct[]=[];
  dateTime:string=Date();
  @Input()sentCatId:number=0;
  @Output()totalProductPriceChanged : EventEmitter<number>;
  constructor(){
    this.totalProductPriceChanged=new EventEmitter<number>;

    this.prdlist=[
      {id:100,name:'Acer Aspire 5 A515-56-347N Slim Laptop',quantity:1,price:3690.99,imgURL:'https://fakeimg.pl/250x150/',categoryId:1},
      {id:200,name:'ASUS G614JV-AS73 ROG Strix G16 (2023) ',quantity:0,price:13290.99,imgURL:'https://fakeimg.pl/250x150/',categoryId:1},
      {id:300,name:'Apple iPad (9th Generation)',quantity:4,price:1230.99,imgURL:'https://fakeimg.pl/250x150/',categoryId:2},
      {id:400,name:'SAMSUNG Galaxy Tab A7 Lite 8.7',quantity:6,price:750.99,imgURL:'https://fakeimg.pl/250x150/',categoryId:2},
      {id:500,name:'Apple Iphone 14 Pro Max 512g',quantity:0,price:750.99,imgURL:'https://fakeimg.pl/250x150/',categoryId:3},
      {id:600,name:'Samsung s22 ultra',quantity:2,price:460.99,imgURL:'https://fakeimg.pl/250x150/',categoryId:3},
    ]
    // this.prdByCatId=this.prdlist;
  }
  ngOnChanges(): void {
    this.filterPrdByCatId();
  }

  filterPrdByCatId(){
    if(this.sentCatId==0){
      this.prdByCatId=this.prdlist;
    }else{
    this.prdByCatId=this.prdlist.filter(x=>x.categoryId==this.sentCatId);
    }
  }

// changeCat(){
//   return this.SelectedCatId=1;
// }

  proTrackByFunc(index:number,product:Iproduct):number{
    return product.id;
  }

  Add(Price:number,count:any):void{
    let itemCount = +count
    this.totalPrice += count * Price;
    this.totalProductPriceChanged.emit(this.totalPrice);
  }
}
