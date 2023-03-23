import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeForm!: FormGroup;
  id!: number;
  editMode= false;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      )
  }

  onSubmit() {
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    }else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
  }

  onCancel() {
      this.router.navigate(['../'], {relativeTo: this.route});
  }
  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).clear();
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private initForm() {
      let recipeName ='';
      let recipeImageUrl = '';
      let recipeDescription = '';
      let recipeIngredient = new FormArray<any>([]);

      if(this.editMode) {
        let recipe = this.recipeService.getRecipe(this.id);
        recipeName = recipe.name;
        recipeImageUrl = recipe.imagePath;
        recipeDescription = recipe.description;
        if(recipe['ingredient']){
          for(let ingredient of recipe.ingredient){
            recipeIngredient.push(
              new FormGroup({
                  'name': new FormControl(ingredient.name, Validators.required),
                  'amount' : new FormControl(ingredient.amount, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)
                  ])
              })
            );
          }
        }
      }

      this.recipeForm = new FormGroup ({
        'name': new FormControl(recipeName, Validators.required),
        'imagePath': new FormControl(recipeImageUrl, Validators.required),
        'description': new FormControl(recipeDescription, Validators.required),
        'ingredients' : recipeIngredient
      });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
          'name': new FormControl(null ,Validators.required),
          'amount': new FormControl(null, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
          ])
      })
    )
  }
}
