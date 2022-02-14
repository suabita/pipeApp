import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas' // nombre del pipe
})
export class MayusculasPipe implements PipeTransform{
    transform(value: string, enMayusculas: boolean = true): string {

        return (enMayusculas) ? value.toUpperCase() : value.toLocaleLowerCase();
        
    }
}