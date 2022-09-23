import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{ 
    collapsed = true; 
    isAuthenticated = false;
    private userSub: Subscription; 
    
    // // We are allowing this feaure to be emitted from child comp to parent comp --> data passed to app component 
    // @Output() featureSelected = new EventEmitter<string>(); 
    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}
    
    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user => { 
            this.isAuthenticated = !user ? false : true; 
        }); 
    }
    
    ngOnDestroy(): void {
        this.userSub.unsubscribe(); 
    }
    
    onSaveData() { 
        this.dataStorageService.storeRecipes();
    }
    
    onFetchData() { 
        this.dataStorageService.fetchRecipes().subscribe(); 
    }
    
    onLogout() { 
        this.authService.logout();
    }
}