import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ProductService } from './services/product-service';
import { NotFound } from './not-found/not-found';
import { Products } from './products/products';
import { Cart } from './cart/cart';
import { AddProduct } from './add-product-component/add-product-component';
import { ProductDetails } from './product-details/product-details';
import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import { Contact } from './contact/contact';



export const routes: Routes = [

{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{ path: 'products', redirectTo: 'products/all', pathMatch: 'full' },
{ path: 'products/:category', component: Products },
{ path: 'cart', component: Cart },
{ path: 'sign-in', component: SignIn },
{ path: 'sign-up', component: SignUp },
{ path: 'add-product', component: AddProduct },
{ path: 'product/:id', component: ProductDetails },
{ path: 'contact', component: Contact },
{path:'**',component:NotFound}
];
