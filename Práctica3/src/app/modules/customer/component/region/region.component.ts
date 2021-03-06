import { Component, OnInit } from '@angular/core';
import { Region } from '../../_model/region';
import { RegionService } from '../../_service/region.service';
import { FormBuilder, Validators } from '@angular/forms';

declare var $: any; 

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {  


  regions: Region[] = [];
  region: Region = new Region();
  formulario = this.formBuilder.group({
    id_region: [''],
    region: ['', Validators.required]
  });

  post_region = false;
  submitted  = false;
  cargando = false;

  constructor(
    private region_service: RegionService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(){
    this.region_service.getRegions().subscribe(
      res => {
        this.regions = res;
        console.log(this.regions);
      },
      err => console.log(err)
    )
  }

  getRegion(id_region: number){
    this.region_service.getRegion(id_region).subscribe(
      res => {
        this.region = res;
        console.log(this.region);
      },
      err => console.log(err)
    )
  }




  onSubmit(){
    
    if(this.post_region){
      this.region_service.createRegion(this.formulario.value).subscribe(
        res => {
          this.formulario.reset();
          console.log(this.region);
          this.getRegions();
          this.closeModal(); 
          this.cargando = true;
        },
        err => console.log(err)
      )
    }else{
      this.region_service.updateRegion(this.formulario.value).subscribe(
        res => {
          console.log(this.region);
          this.getRegions();
          this.closeModal();
          this.cargando = true;
        },
        err => console.log(err)
      )
    }
    this.cargando=true;

  }

  createRegion(){
    this.post_region = true;
    this.formulario.reset();
    $("#region_modal").modal("show");
    $( "#title-region" ).text( "Agregar región" );
    $( "#register-button" ).text( "Registrar región" );

  }

  updateRegion(region: Region){
    this.post_region = false;
    this.formulario.controls['id_region'].setValue(region.id_region);
    this.formulario.controls['region'].setValue(region.region);
    $("#region_modal").modal("show");
    $( "#title-region" ).text( "Actualizar   región" );
    $( "#register-button" ).text( "Actualizar región" );
  }

  deleteRegion(id_region: number){
    this.region_service.deleteRegion(id_region).subscribe(
      res =>{
        console.log(this.region);
        this.getRegions();
      },
      err => console.log(err)     
    )
  }

  get f(){
    return this.formulario.controls;
  } 

  closeModal(){
    $("#region_modal").modal("hide");
  }

  resetearValor(){
    this.cargando = false;
  }

  refreshRegion(){
    this.getRegions();
  }


}
