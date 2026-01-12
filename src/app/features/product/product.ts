import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Iproduct } from '../../shared/interface/Iproduct';
import { loadProducts, loadProductSuccess } from '../../store/actions/product.action';
import { selectAllProduct } from '../../store/selectors/product.selector';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, switchMap,filter, of, throttleTime } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @ViewChild("searchValue") searchValue!:ElementRef;  
  @ViewChildren('tbody')  children!:QueryList<ElementRef<HTMLTableSectionElement>>
    productTableData$: Observable<Iproduct[]>;
    productTableDataAll$: Observable<Iproduct[]>;
    productTableDataSignal = signal<Iproduct[]>([]);
  constructor(private http:HttpClient,private store:Store<{product:{error:string,loading:boolean,product:Iproduct}}>){
   this.productTableData$=this.store.select(selectAllProduct);
   console.log(this.productTableData$,"this.productTableData$");
   this.productTableDataAll$=this.store.select(selectAllProduct);
   this.productTableData$.subscribe((response: Iproduct[]) => {
      console.log(response);
      this.productTableDataSignal.set(response); // ✅ This works
    });
  }
 ngOnInit():void{
this.getProductList();
 }
 getProductList(){
//   this.http.get("https://api.escuelajs.co/api/v1/products").subscribe((response:any)=>{
//     console.log(response);
//     let product:Iproduct[]=[];
//     response.forEach((item:any)=>{
// product.push({id:item.id,name:item.title});
//     });

//     this.store.dispatch(loadProductSuccess({product:product}));
//   })

 this.store.dispatch(loadProducts());
 }
 ngAfterViewInit(){
  this.searchEvent();
  this.getChildRow();
 }
 getChildRow(){
  this.children.forEach((tbody, index) => {
      const rows = tbody.nativeElement.querySelectorAll('tr');
      console.log(`Tbody ${index} has ${rows} rows`);
      this.children.forEach((tbody, index) => {
      const rows = tbody.nativeElement.querySelectorAll('tr');
      console.log(`Tbody ${index}:`);
      rows.forEach(row => console.log(row.textContent));
    });
    });
 }
 searchEvent(){
 fromEvent(this.searchValue.nativeElement,"keyup")
   .pipe(
    debounceTime(300),
    throttleTime(500),
    map((e:any)=>e.target.value),
    distinctUntilChanged(),
    switchMap((value)=>this.filterSearchProduct(value))
   ).subscribe(filtered=>{
    console.log(filtered,"filtered");
    //this.productTableData$=of(filtered);
     this.productTableDataSignal.set(filtered);
   })
 }
 filterSearchProduct(value:string):Observable<Iproduct[]>{
   return this.productTableDataAll$.pipe(
    map((products: Iproduct[]) => {
      if (!value) return products;
      return products.filter(p =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
    })
  );

 }
}


