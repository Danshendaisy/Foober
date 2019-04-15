import { AddFoodComponent } from './add-food/add-food.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FoodlistComponent }      from './foodlist/foodlist.component';
import { FoodDetailComponent }  from './food-detail/food-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: FoodDetailComponent },
  { path: 'foodlist', component: FoodlistComponent },
  { path: 'shoppingcart',component:ShoppingCartComponent},
  { path: 'transaction',component:TransactionDetailComponent},
  { path: 'add',component:AddFoodComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}