import { Routes } from '@angular/router';
import { MasterComponent } from './component/master/master.component';
import { ClientComponent } from './component/client/client.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ClientProjectComponent } from './component/client-project/client-project.component';

export const routes: Routes = [
      {
            path: "",
            redirectTo: 'master',
            pathMatch :'full'
      },
      {
            path: 'master',
            component: MasterComponent
      },
      {
            path: 'employee',
            component: EmployeeComponent
      },
      {
            path: 'client',
            component: ClientComponent
      },
      {
            path: 'client-project',
            component: ClientProjectComponent
      }
];
