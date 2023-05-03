import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModalComponent } from './shared/modal/modal.component';
import { PurchaseGuideComponent } from './purchase-guide/purchase-guide.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { ApplyAsVendorComponent } from './apply-as-vendor/apply-as-vendor.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MobileNavComponent } from './shared/navbar/mobile-nav/mobile-nav.component';
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
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    CategoriesComponent,
    EventsComponent,
    LoginComponent,
    RegisterComponent,
    ModalComponent,
    PurchaseGuideComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    ApplyAsVendorComponent,
    AboutComponent,
    ContactComponent,
    MobileNavComponent,
    CartComponent,
    CheckoutComponent,
    WishlistComponent,
    CompareComponent,
    AccountComponent,
    NotFoundComponent,
    StoresComponent,
    MerchantGuideComponent,
    MerchantDashboardComponent,
    BlogComponent,
    ProductsComponent,
    ProductComponent,
    ArticleComponent,
    ProductsFilterComponent,
    TicketComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
