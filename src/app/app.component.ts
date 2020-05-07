import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent  {
  title = 'UdemyNg';
  currentItem =" Hey Ravi";
  recipe ="Maggie";
  loadedFeature ='recipe';

  onNavigate(feature: string){
 this.loadedFeature = feature;
  }
  // recipesNames =[
  //   {name: "Maggie", type:"spicy", state:"solid", temp: "hot" },
  //   {name: "Noodles", type:"spicy", state:"solid", temp: "hot" },
  //   {name: "Lassi", type:"Cool", state:"Liquid", temp: "Chill" }
  //          ];
//  holdValues: any = ['item1', 'item2', 'item3', 'item4' ]; 
//  items = ['item1', 'item2', 'item3', 'item4'];

//  addItem(newItem: string) {
//    this.items.push(newItem);
//  }

//  reciveDataFromChild(recievedValues: string){
//     this.holdValues.push(recievedValues);
//  }
    
}
