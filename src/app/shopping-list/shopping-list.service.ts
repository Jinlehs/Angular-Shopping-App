import { EventEmitter } from "@angular/core";
import { Subject } from 'rxjs'; 

import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService { 
    //event emitter emits custom events of type ??
    ingredientsChanged = new Subject<Ingredient[]>(); 
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes',10)
    ];
    
    getIngredients() { 
        //makes a shallow copy of an array -> copying entire array 
        return this.ingredients.slice(); 
    }
    
    addIngredient(ingredient:Ingredient) { 
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
    addIngredients(ingredients: Ingredient[]) { 
        // for(let ingredient of ingredients) { 
        //     this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}