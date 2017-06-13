import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { GitHubComponent }   from './github.component';
import { GitHubUserComponent }      from './githubuser.component';
import { GitHubService }         from './github.service';

@NgModule({
    imports: [                                 
        CommonModule,        
        ReactiveFormsModule,        
        HttpModule,
        RouterModule     
    ],
    declarations: [
        GitHubComponent, 
        GitHubUserComponent
    ],
    exports: [
    ],
    providers: [
        GitHubService        
    ]
})
export class GitHubModule { 
}
