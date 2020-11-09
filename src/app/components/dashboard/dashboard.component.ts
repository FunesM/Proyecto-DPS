import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'

//Service
import { AuthService } from "../../services/auth.service";

@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
registro=[];
cliente:any;
nombre:string; 
visita:number;
dui:number; 
mascota:string;
tratamiento:string;
medicamento:string;
costo:number;
contador:number; 
descuento:number;
total:number;

constructor(public authService: AuthService) { }

ngOnInit(): void {
this.costo=0; 
this.cliente=''; 
this.contador=0;
}
ingresar(){ 
if(this.visita >=2){ 
this.descuento=this.costo*0.05; 
this.total=this.costo-this.descuento;   
}
if(this.visita >=5) {
this.descuento= this.costo*0.08;
this.total=this.costo-this.descuento;

}
if(this.visita <=1){
this.descuento=0.00;
this.total=this.costo;
}

this.cliente={"nombre":this.nombre,"costo":this.costo,"visita":this.visita,"mascota":this.mascota, "tratamiento":this.tratamiento,"medicamento":this.medicamento, "dui":this.dui, "total":this.total, "descuento":this.descuento}; 
this.registro.push(this.cliente); 
this.contador++;
}

}
