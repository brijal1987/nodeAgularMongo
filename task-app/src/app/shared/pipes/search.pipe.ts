import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let filteredTasks = value.filter(task => {
      if(task.title.toUpperCase().indexOf(args.toUpperCase()) === -1) {
        return 0;
      } else {
        return 1;
      }
    });
    
    return filteredTasks;
  }

}
