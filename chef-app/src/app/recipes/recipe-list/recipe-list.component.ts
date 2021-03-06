import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a test', 'https://pioneerwoman.files.wordpress.com/2013/05/nachos1.jpg'),
    new Recipe('A test Recipe2', 'This is a test', 'https://pioneerwoman.files.wordpress.com/2013/05/nachos1.jpg'),
    new Recipe('A test Recipe3', 'Lorem Ipsum es simplemente el texto cuales cont pasajes de Lorem Ipsum',
                'https://pioneerwoman.files.wordpress.com/2013/05/nachos1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
