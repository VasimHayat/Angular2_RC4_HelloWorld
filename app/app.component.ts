import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'root-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    public title :string;
    public displayMsg:string;

    // AppComponent constructor function , we inilize our app title 
    constructor() {       
         this.title = "Hello World";
     }

// ngOnInit is lifecyle hoock , it is execute when Component intilize, we set the displayMsg 
    ngOnInit() { 
         this.displayMsg = "Hi We have succesfully run our Angualr2 App.";
    }
    
}