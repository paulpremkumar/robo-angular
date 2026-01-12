import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:"fullname"
})
export class Fullname implements PipeTransform{
    transform(fistName: string,middleName:string,lastName:string):string {
        return `${fistName} ${middleName} ${lastName}`;
    }
}