import { Component, OnInit } from '@angular/core';
import {FetchService} from './fetching.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {ModalComponent} from './modal/modal.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items:Object;
 
  totalCost=0;
  constructor(
    private fetching:FetchService,
    public matDialog:MatDialog
    ){};
  quantity=0;  
  action;
  openModal(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data={"totalCost":this.totalCost};
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
    this.reset();
  }
  
  add(i: number){
    this.action=true;
    this.items[i].quantity=this.items[i].quantity+1;
  }
  decrease(i: number){
    this.action=false;
    if(this.quantity>0){
      this.items[i].quantity=this.items[i].quantity-1;
      this.totalCost=this.totalCost-this.items[i].price;
      this.quantity=this.quantity-1;  
    }
    
  }
  addCart(i: number){
    this.getUpdate(i);
  }
  
  ngOnInit()
  {
    this.GetList();
   
  }
  getUpdate(i){
    this.totalCost = (this.items[i].quantity)*(this.items[i].price) + this.totalCost;
    this.quantity=this.quantity+(this.items[i].quantity);
  }

  async GetList(){
    let resp= await this.fetching.getList();
    let data=await resp.json();
    this.items=data;
    
  }
  reset(){
    
    this.ngOnInit();
    this.totalCost=0;
    this.quantity=0;
  }

  

}
