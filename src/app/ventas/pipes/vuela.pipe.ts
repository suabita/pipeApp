import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela' // nombre del pipe
})
export class VuelaPipe implements PipeTransform{
    transform(value: boolean): string {

        return (value) ? "vuela" : "no vuela";
        
    }
}