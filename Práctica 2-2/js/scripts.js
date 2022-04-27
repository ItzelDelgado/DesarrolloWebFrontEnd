/*!
* Start Bootstrap - Shop Homepage v5.0.3 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let selectedProducts = 0
let total = 0

let carrito = []
const catalogo = [{id: 1,
                  producto: "Sudadera Deportiva",
                  precio: 500},
                  {id: 2,
                  producto: "Tenis Geodiver",
                  precio: 1600},
                  {id: 3,
                  producto: "Mochila Star Wars",
                  precio: 250},
                  {id: 4,
                  producto: "Tenis Glow Pink",
                  precio: 500}]

function selectProduct(id){
  addToArray(id);
	selectedProducts++;
	document.getElementById("cart").innerHTML=selectedProducts;
}

function addToArray(id){
  catalogo.forEach(function(element){
    if (element.id == id){
      carrito.push(element);
    }
  });
}

function timeOut(){
  showProducts();
  setTimeout(modalClose,5000);
}

function modalClose(){
  document.getElementById("cancelModal").click();
}

function obtainTotal(){
  total = 0
 carrito.forEach(function(element){
   total += element.precio;
  });
  document.getElementById("productList").innerHTML +=  '<li class="list-group-item fw-bolder">TOTAL: '+ total +'</li>';
}

function showProducts(){
  document.getElementById("productList").innerHTML="";
  carrito.forEach(function(element){
     let list = '<li class="list-group-item">'+element.producto+ '___________________' + element.precio +'</li>';
     document.getElementById("productList").innerHTML += list;
  });
  obtainTotal();
}

function success(){  

swal({
  title: "Compra realizada!",
  text: "Te esperamos pronto",
  type: "success",
  timer: 4000,
  showConfirmButton: true,},
   function(){
      location.reload();
});
     } 


