import { Component, OnInit } from '@angular/core';
import { githubClass } from '../github-class';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class githubFormComponent implements OnInit {

  newEntry = new githubClass("");

  submitTheForm(data){
    console.log(data);
    console.log(data.value.textEntry);
  }
  constructor() { }

  ngOnInit() {
  }

}
