import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() data = new EventEmitter<any>();

//   senddata(relval:string){
//     this.data.emit(relval);
//   }
@Output() recipeWasSelected = new EventEmitter<Recipe>()

recipes: Recipe[] = [

  new Recipe('A test recipe',' THis is food magi recipe', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  new Recipe('A test asda recipe',' THis is  maggi recipe', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected( recipe: Recipe){
this.recipeWasSelected.emit(recipe)
  }

}
