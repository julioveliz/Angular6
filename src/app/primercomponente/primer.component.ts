
import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    templateUrl: './primer.component.html',
    styleUrls:['./primer.component.css'],
    /*
    template:  `
    <div class="hello-world" >
        <h1>Hola Mundo</h1> 
        <h2>Subtitulo</h2> 
    </div>
    `,
    
    styles:[`.hello-world { 
        background: #000; 
        color:#fff;}
        `],
        */
})
export class HelloWorld{

title = 'welcome to angular';
}