import {
  loadProducts,
  selectAllProduct
} from "./chunk-IFVXIMNH.js";
import {
  Component,
  HttpClient,
  Store,
  ViewChild,
  ViewChildren,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  setClassMetadata,
  signal,
  switchMap,
  throttleTime,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-UEDKRKWX.js";

// src/app/features/product/product.ts
var _c0 = ["searchValue"];
var _c1 = ["tbody"];
var _forTrack0 = ($index, $item) => $item.id;
function Product_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 4, 2)(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const x_r1 = ctx.$implicit;
    \u0275\u0275domProperty("id", x_r1.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(x_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r1.name);
  }
}
function Product_ForEmpty_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div");
    \u0275\u0275text(1, "No record found");
    \u0275\u0275domElementEnd();
  }
}
var Product = class _Product {
  http;
  store;
  searchValue;
  children;
  productTableData$;
  productTableDataAll$;
  productTableDataSignal = signal([], ...ngDevMode ? [{ debugName: "productTableDataSignal" }] : []);
  constructor(http, store) {
    this.http = http;
    this.store = store;
    this.productTableData$ = this.store.select(selectAllProduct);
    console.log(this.productTableData$, "this.productTableData$");
    this.productTableDataAll$ = this.store.select(selectAllProduct);
    this.productTableData$.subscribe((response) => {
      console.log(response);
      this.productTableDataSignal.set(response);
    });
  }
  ngOnInit() {
    this.getProductList();
  }
  getProductList() {
    this.store.dispatch(loadProducts());
  }
  ngAfterViewInit() {
    this.searchEvent();
    this.getChildRow();
  }
  getChildRow() {
    this.children.forEach((tbody, index) => {
      const rows = tbody.nativeElement.querySelectorAll("tr");
      console.log(`Tbody ${index} has ${rows} rows`);
      this.children.forEach((tbody2, index2) => {
        const rows2 = tbody2.nativeElement.querySelectorAll("tr");
        console.log(`Tbody ${index2}:`);
        rows2.forEach((row) => console.log(row.textContent));
      });
    });
  }
  searchEvent() {
    fromEvent(this.searchValue.nativeElement, "keyup").pipe(debounceTime(300), throttleTime(500), map((e) => e.target.value), distinctUntilChanged(), switchMap((value) => this.filterSearchProduct(value))).subscribe((filtered) => {
      console.log(filtered, "filtered");
      this.productTableDataSignal.set(filtered);
    });
  }
  filterSearchProduct(value) {
    return this.productTableDataAll$.pipe(map((products) => {
      if (!value)
        return products;
      return products.filter((p) => p.name.toLowerCase().includes(value.toLowerCase()));
    }));
  }
  static \u0275fac = function Product_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Product)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Store));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Product, selectors: [["app-product"]], viewQuery: function Product_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchValue = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.children = _t);
    }
  }, decls: 15, vars: 1, consts: [["searchValue", ""], ["tbody", ""], ["tr", ""], ["type", "text"], [3, "id"]], template: function Product_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div");
      \u0275\u0275domElement(1, "input", 3, 0);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "table")(4, "thead")(5, "tr")(6, "th");
      \u0275\u0275text(7, "Id");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "th");
      \u0275\u0275text(9, "Product");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "tbody", null, 1);
      \u0275\u0275repeaterCreate(12, Product_For_13_Template, 6, 3, "tr", 4, _forTrack0, false, Product_ForEmpty_14_Template, 2, 0, "div");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.productTableDataSignal());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Product, [{
    type: Component,
    args: [{ selector: "app-product", imports: [], template: '<div>\n    <input type="text" #searchValue>\n</div>\n<table >\n    <thead>\n        <tr>\n            <th>Id</th>\n            <th>Product</th>\n        </tr>\n    </thead>\n    <tbody #tbody>\n        @for( x of productTableDataSignal();track x.id){\n <tr [id]="x.id" #tr>\n            <td>{{x.id}}</td>\n            <td>{{x.name}}</td>\n        </tr>\n        }@empty{\n<div>No record found</div>\n        }\n       \n    </tbody>\n</table>\n' }]
  }], () => [{ type: HttpClient }, { type: Store }], { searchValue: [{
    type: ViewChild,
    args: ["searchValue"]
  }], children: [{
    type: ViewChildren,
    args: ["tbody"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Product, { className: "Product", filePath: "src/app/features/product/product.ts", lineNumber: 17 });
})();
export {
  Product
};
//# sourceMappingURL=chunk-TRRQLIC2.js.map
