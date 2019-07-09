import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'myfirstapp';
  
  users = ['rayn','joe','rick','bruce','jhon','mary'];
  
  sayHello(){
    alert('Hello');
  }

  DeleteUser(user){
    
    for(let i=0; i < this.users.length; i++){
        if (user==this.users[i]){
          this.users.splice(i,1);
        }
    }
  }

  AddUser(newUser){
    //console.log(newUser.value);
    this.users.push(newUser.value);
    newUser.value='';
    newUser.focus();
    return false;
    
    for(let i=0; i < this.users.length; i++){
        if (newUser==this.users[i]){
          //this.users.splice(i,1);
        }
    }
  }
  //activated: boolean =true;
  /*

  name :string = 'julio veliz';
  age : number;
  address: {
    street: string;
    city:string;
  };
  hobbies : string[] ;

  constructor(){
    this.age=49;
    this.address = {
      street:'calle 39 entre 18 y 19',
      city:'Bqto'
    }
  this.hobbies = ['leer','cantar','jugar','orar']; 

  }
  */
  //hobbies = ['leer','cantar','jugar','orar']



}
