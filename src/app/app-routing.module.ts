import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaStyleGuideComponent} from './ma-style-guide/ma-style-guide.component';
import {MaTopHeaderComponent} from './ma-top-header/ma-top-header.component';
import {MaInnerHeaderComponent} from './ma-inner-header/ma-inner-header.component';
import {MaTopCategoriesComponent} from './ma-top-categories/ma-top-categories.component';
import {MaImageCardFullComponent} from './ma-image-card-full/ma-image-card-full.component';
import {MaImageCardPrimaryComponent} from './ma-image-card-primary/ma-image-card-primary.component';
import {MaLandingPageComponent} from './ma-landing-page/ma-landing-page.component';
import {MaAppDownloadComponent} from './ma-app-download/ma-app-download.component';
import {MaImageCardSecondaryComponent} from './ma-image-card-secondary/ma-image-card-secondary.component';
import {MaFooterComponent} from './ma-footer/ma-footer.component';
import {MaCarouselComponent} from './ma-carousel/ma-carousel.component';
import {MaVendorServicesComponent} from './ma-vendor-services/ma-vendor-services.component';
import {MaVendorPageComponent} from './ma-vendor-page/ma-vendor-page.component';
import {MaProductPageComponent} from './ma-product-page/ma-product-page.component';
import {MaImageCardDetailedComponent} from './ma-image-card-detailed/ma-image-card-detailed.component';
import {MaFloatingContainerComponent} from './ma-floating-container/ma-floating-container.component';
import {MaSectionTabsComponent} from './ma-section-tabs/ma-section-tabs.component';
import {MaImageCardDescribedComponent} from './ma-image-card-described/ma-image-card-described.component';
import { MaProductSelectComponent } from './ma-product-select/ma-product-select.component';
import {MaProductDetailsComponent} from './ma-product-details/ma-product-details.component';
import {MaImageCardVerticleComponent} from './ma-image-card-verticle/ma-image-card-verticle.component';
import {MaMenuComponent} from './ma-menu/ma-menu.component';
import {MaCarouselSecondaryComponent} from './ma-carousel-secondary/ma-carousel-secondary.component';
import {MaSignInPageComponent} from './ma-sign-in-page/ma-sign-in-page.component';
import {MaSignUpPageComponent} from './ma-sign-up-page/ma-sign-up-page.component';
import {MaSearchItemCardComponent} from './ma-search-item-card/ma-search-item-card.component';
import {MaSearchResultFilterComponent} from './ma-search-result-filter/ma-search-result-filter.component';
import {MaSearchResultPageComponent} from './ma-search-result-page/ma-search-result-page.component';
import {MaAllPopupsComponent} from './ma-all-popups/ma-all-popups.component';
import {MaCartItemComponent} from './ma-cart-item/ma-cart-item.component';
import {MaCartBlockComponent} from './ma-cart-block/ma-cart-block.component';
import {MaCartPageComponent} from './ma-cart-page/ma-cart-page.component';


const routes: Routes = [
  { path: 'style-guide', component: MaStyleGuideComponent },
  { path: 'top-header', component: MaTopHeaderComponent },
  { path: 'inner-header', component: MaInnerHeaderComponent },
  { path: 'top-categories', component: MaTopCategoriesComponent },
  { path: 'image-card-full', component: MaImageCardFullComponent },
  { path: 'image-card-primary', component: MaImageCardPrimaryComponent },
  { path: 'image-card-secondary', component: MaImageCardSecondaryComponent },
  { path: 'landing-page', component: MaLandingPageComponent },
  { path: 'download-component', component: MaAppDownloadComponent },
  { path: 'footer', component: MaFooterComponent },
  { path: 'carousel', component: MaCarouselComponent },
  { path: 'vendor-services', component: MaVendorServicesComponent },
  { path: 'vendor-page', component: MaVendorPageComponent },
  { path: 'product-page', component: MaProductPageComponent },
  { path: 'image-card-detailed', component: MaImageCardDetailedComponent },
  { path: 'floating-container', component: MaFloatingContainerComponent },
  { path: 'section-tabs', component: MaSectionTabsComponent },
  { path: 'image-card-described', component: MaImageCardDescribedComponent },
  { path: 'product-details', component: MaProductDetailsComponent },
  { path: 'product-select', component: MaProductSelectComponent },
  { path: 'image-card-verticle', component: MaImageCardVerticleComponent },
  { path: 'menu', component: MaMenuComponent },
  { path: 'carousel-secondary', component: MaCarouselSecondaryComponent },
  { path: 'sign-in-page', component: MaSignInPageComponent },
  { path: 'sign-up-page', component: MaSignUpPageComponent },
  { path: 'search-item-card', component: MaSearchItemCardComponent },
  { path: 'search-result-filter', component: MaSearchResultFilterComponent },
  { path: 'search-result-page', component: MaSearchResultPageComponent },
  { path: 'all-popups', component: MaAllPopupsComponent },
  { path: 'cart-item', component: MaCartItemComponent },
  { path: 'cart-block', component: MaCartBlockComponent },
  { path: 'cart-page', component: MaCartPageComponent },

  { path: '', redirectTo: '/sign-in-page', pathMatch: 'full' },
  { path: '**', redirectTo: '/sign-in-page', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
