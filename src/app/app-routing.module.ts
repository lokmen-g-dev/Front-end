import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { PurchaseGuideComponent } from './purchase-guide/purchase-guide.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareComponent } from './compare/compare.component';
import { AccountComponent } from './account/account.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoresComponent } from './stores/stores.component';
import { MerchantGuideComponent } from './merchant-guide/merchant-guide.component';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ArticleComponent } from './blog/article/article.component';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { TicketComponent } from './ticket/ticket.component';
import { StoreComponent } from './stores/store/store.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'events', component: EventsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'purchase-guide', component: PurchaseGuideComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'apply-as-a-vendor', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'account', component: AccountComponent },
  { path: 'vendor-stores', component: StoresComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'store', component: StoreComponent },
  { path: 'merchant-dashboard', component: MerchantDashboardComponent },
  { path: 'merchant-guide', component: MerchantGuideComponent },
  { path: 'deals', component: ProductsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'filter', component: ProductsFilterComponent },
  { path: 'ticket', component: TicketComponent },


  {
    path: 'oneproduct',
    component: ProductComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
