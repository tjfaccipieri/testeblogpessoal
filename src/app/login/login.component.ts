import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }

  entrar(){
    let erro = <HTMLDivElement>(document.querySelector('#erro'))
    erro.innerHTML = 'deu ruim'
    erro.style.background = 'var(--vermelho-70)'
    erro.style.color = '#721C24'
    
  }

}
