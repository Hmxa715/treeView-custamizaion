import { Component,OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig, TreeviewHelper } from 'ngx-treeview';
import {AppService} from './app.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [
        AppService
    ]
})

export class AppComponent implements OnInit {
    dropdownEnabled = true;
    items: TreeviewItem[];
    values;
    config = TreeviewConfig.create({
        hasAllCheckBox: false,
        hasFilter: false,
        hasCollapseExpand: false,
        decoupleChildFromParent: true,
        maxHeight: 400
    });
    constructor(
        private service: AppService
    ) { 
      // this.values = [11,13];
    }

    ngOnInit() {
      this.items = this.service.getBooks();
      this.uncheckAllItems(this.items);
       this.name();
      this.values = [11,22,23];
      let myVal =  this.values;
      for (let i = 0; i < myVal.length; i++) {
        this.preSelect(myVal[i]);
      }
    }
    uncheckAllItems(te) {
      te.forEach(element => {
        element.checked = false;
        element.collapsed = true;
        if (element.internalChildren) {
          this.uncheckAllItems(element.internalChildren);
        }
      });
    }

    preSelect(val){
      // console.log(val);
      let perent = this.items;
      for (let i = 0; i < perent.length; i++) {
        let per = perent[i];
        // perent[i].collapsed = false;
        let child =per['internalChildren'];
        let matched = child.find(e => e.value === val);
        // console.log(test);
        if(matched){
          perent[i].collapsed = false;
          matched.checked = true;
        } 
      }
    }
    name(){
      // console.log(val);
      let arr= [];
      this.values = [11,13,22,23];
      let myVal =  this.values;
      for (let i = 0; i < myVal.length; i++) {
        let val =myVal[i];
        let perent = this.items;
        for (let i = 0; i < perent.length; i++) {
          let per = perent[i];
          // perent[i].collapsed = false;
          let child =per['internalChildren'];
          let matched = child.filter(e => e.value === val).map(x => x.text)[0];
          if(matched !== undefined){
          //  this.arr.push(matched.toString());
            arr.push(matched);
          } 
        }
      }
      // arr.filter(n => n)
        console.log(arr.toString());
    }
  onFilterChange(value: string) {
      console.log('filter:', value);
  }
  
}
