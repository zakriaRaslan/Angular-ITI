import { Component } from '@angular/core';
import { StoreData } from 'src/app/viewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
 storeInfo:StoreData;
 showImage:boolean=true;
 constructor(){
  this.storeInfo = new StoreData("Raslan","https://picsum.photos/350/200",["Egypt","Germany","Spain" ,"KSA"])
  }

  ImageToggle(){
    this.showImage =! this.showImage;
  }
 }




