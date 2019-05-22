import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  public message="";

  public componentText = "This is default text";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleEvent($event) {

  let componentTextDiv = document.getElementById("componentTextId");

   	if($event == "Change text to red") { 
  		componentTextDiv.style.color = "red";
  	} else if($event == "Hide text"){
      componentTextDiv.style.display = "none";
    } else if($event == "Show text"){
      componentTextDiv.style.display = "block";
    }else if($event == "Move text to center"){
      componentTextDiv.className = "";
      componentTextDiv.classList.add("italic-text");
    }else if($event == "Move text to right"){
      componentTextDiv.className = "";
      componentTextDiv.classList.add("rigth-text");
    }else if($event == "Border text"){
      componentTextDiv.className = "";
      componentTextDiv.classList.add("double-border");
    }else if($event == "Shadow text"){
      componentTextDiv.className = "";
      componentTextDiv.classList.add("shadow-text");
    }
  }

}
