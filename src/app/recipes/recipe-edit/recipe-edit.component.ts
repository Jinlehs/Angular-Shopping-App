import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number; 
  editMode = false; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      //adding + converts into number 
      this.id = +params['id'];
      //params will only be not undefined if we are in edit mode -> then an id will be present 
      this.editMode = params['id'] != null; 
    })
  }

}
