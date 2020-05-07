import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],

})
export class RecipesComponent  {
  @Input() recipeName :string;
  selectedRecipe : Recipe
  recipes: Recipe[] = [ 
    new Recipe('A test recipe',' THis is food magi recipe',
     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
     new Recipe('A test another recipe',' THis is food magi recipe', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    ];
// constructor() { 
//   console.log("constructor called")
// }
// ngOnChanges(changes: SimpleChanges){
//   console.log("Onchanges called")
//   console.log(changes)
// }
// ngOnInit(){
//   console.log("OnInIt called")
// }
// ngDoCheck(){
//   console.log("DoCheck called")
// }
// ngAfterContentInit(){
//   console.log("ngAfterContentInit called")
// }
// ngAfterContentChecked(){
//   console.log("ngAfterContentChecked called")

// }


  // @Input() recipes :  [{name: string, type: string, state: string, temp: string  }]

//   stores = ['item1','item2', 'item3'];
//   @Output() value = new EventEmitter<any>();
//   @Output() newItemEvent = new EventEmitter<string>();

//   sendDatatoParent(val :string){
//     this.value.emit(val);
//   }

//   addNewItem(name: string) {
//     this.newItemEvent.emit(name);
//   }

//   storedata(storevalues: string){
//  this.stores.push(storevalues);
//   }
 

}
