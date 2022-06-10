import { Component} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private router:Router){}

  condition:boolean=false;

  heading:any;
  amount:any;
  btnname:any;

  name:any;
  resultamount:any;

  ngOnInit() {     
    this.heading = history.state.formname;
    this.amount = history.state.calculateformula;
    this.btnname = history.state.btnname;
    console.log(this.heading);
    console.log(this.amount);
    console.log(this.btnname);
  }

  onChange(e:any){
    if(e.target.value != 0){
      this.condition = true;
    }
    else this.condition = false;
  }
  calculateRes(){
   this.resultamount = parseInt((<HTMLInputElement>document.getElementById("inputsal")).value) * parseInt(this.amount);
   this.name = (<HTMLInputElement>document.getElementById("name")).value;
   console.log(this.resultamount);
   this.router.navigate(['/Result'],{state:{data:{res:this.resultamount,loan:this.heading,name:this.name}}});
  }
}
