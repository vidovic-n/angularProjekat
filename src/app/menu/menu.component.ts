import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit() {
 
  }

  changeTextToRed($event){
  	this.childEvent.emit("Change text to red");
  }

   borderText($event){
    this.childEvent.emit("Border text");
  }

  shadowText($event){
    this.childEvent.emit("Shadow text");
  }



  moveText($event){
    if(document.getElementById("menuItemMoveText").innerText == "Move text to center") {
      this.childEvent.emit("Move text to center");
      document.getElementById("menuItemMoveText").innerText = "Move text to right";
    } else {
      this.childEvent.emit("Move text to right");
      document.getElementById("menuItemMoveText").innerText = "Move text to center";
    }
  }

  toggleText($event){

    if(document.getElementById("menuItemToggleText").innerText == "Hide text") {
      this.childEvent.emit("Hide text");
      document.getElementById("menuItemToggleText").innerText = "Show text";
    } else {
      this.childEvent.emit("Show text");
      document.getElementById("menuItemToggleText").innerText = "Hide text";
    }
    
  }

  logout($event) {
    sessionStorage.removeItem("isUserLoggedIn");
    this.router.navigate(['/login']);
  }

 

}
