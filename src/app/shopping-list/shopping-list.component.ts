import { Component, OnInit, Input } from '@angular/core';
import { ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() item: string;
ingredients: ingredient[] =[
  new ingredient("Apples" ,7),
  new ingredient("mangoes",9),
];
  constructor() { }

  ngOnInit(): void {
  }
  onIngrediantAdded(Ingredient : ingredient){
    this.ingredients.push(Ingredient);
  }
}