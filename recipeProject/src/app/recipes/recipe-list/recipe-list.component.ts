import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
recipes:Recipe[]=[
  new Recipe('Test Recipe',"This is simply a test","https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/Turkish-recipes.jpg"),
  new Recipe('Test Recipe',"This is simply a test","https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/Turkish-recipes.jpg")
];
}
