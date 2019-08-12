import { Component, OnInit } from '@angular/core';
import { _products } from '../../../../src/data.js'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
data=_products
item=false
  constructor() { }

  ngOnInit() {
  }
  public selectItem(event) {
    Swal.fire({
      title: `<strong><u>${event.ProductName}</u></strong>`,
      html:`<style>
      #products {
        font-family: 'Roboto', sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      #products td, #products th {
        border: 1px solid #ddd;
        padding: 8px;
      }
      #products tr:hover {background-color: #ddd;}
      </style>
  <table id="products">
  <thead>
  <tr >
  <td><strong>Category</strong></td>
  <td>${event.Category.CategoryName}</td>
  </tr>
  <tr >
  <td><strong>Description</strong></td>
  <td>${event.Category.Description}</td>
  </tr>
</thead>
</table>`,
confirmButtonColor: "#59de00"
    })
  }
}
