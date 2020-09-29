import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';


export class AppService {
    getBooks(): TreeviewItem[] {
        const childrenCategory = new TreeviewItem({
            text: 'Children', value: 1, checked:false, collapsed: false, children: [
                { text: 'Baby 3-5', value: 11 },
                { text: 'Baby 6-8', value: 12 },
                { text: 'Baby 9-12', value: 13 }
            ]
        })
         const childrenCategory2 = new TreeviewItem({
            text: 'Children2', value: 2, checked:false, collapsed: false, children: [
                { text: 'Baba 13-15', value: 21 },
                { text: 'Baba 16-18', value: 22 },
                { text: 'Baba 19-20', value: 23 }
            ]
        });
        // childrenCategory.correctChecked();
        // childrenCategory2.correctChecked();
        return [childrenCategory,childrenCategory2];
    }
}