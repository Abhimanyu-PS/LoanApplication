import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

export class Loan{
  constructor(
    public formname:string,
    public btnname:string,
    public calculateformula:number
  ){}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title='LoanApplication';

  public homeloan:Loan;
  public persloan:Loan;
  public eduloan:Loan;

  constructor(private router:Router){
    this.homeloan=new Loan('Home-Loan Application','Get HomeLoan',17);
    this.persloan=new Loan('Personal-Loan Application','Get Personal Loan',19);
    this.eduloan= new Loan('Education-Loan Application','Get Education Loan',23);
  }

  sendDataHome(){
    this.router.navigate(['/HomeForm'], {state:this.homeloan});
  }
  sendDataPers(){
    this.router.navigate(['/PersForm'], {state:this.persloan});
  }
  sendDataEdu(){
    this.router.navigate(['/EduForm'], {state:this.eduloan});
  }
}
