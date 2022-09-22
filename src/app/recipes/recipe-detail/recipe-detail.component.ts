import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number; 
  
  
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // this will only work once when it loads 
    // const id = this.route.snapshot.params['id'];
    
    //this allows us to access the parameters and information in a specific route, thus allowing us to supercede the usage of parameter binding and 
    //child to parent binding 
    this.route.params.subscribe((params: Params) => { 
      this.id = +params['id'];
      this.recipe = this. recipeService.getRecipe(this.id);
    })
    
    
  }
  onAddToShoppingList() { 
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  
  onEditRecipe() { 
    //this.router.navigate(['edit'], {relativeTo: this.route});
    //allows user to path to correct webpage relative to this route, which is in this case: http://localhost:61704/recipes/1/
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
  
  onDeleteRecipe() { 
    this.recipeService.deleteRecipe(this.id); 
    this.router.navigate(['/recipes']);
  }

}
