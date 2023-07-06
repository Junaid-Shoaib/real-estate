

<?php

use App\Http\Controllers\admin\AdminAuthController;
use App\Http\Controllers\admin\AdminDiscountCodeController;
use App\Http\Controllers\admin\AdminReviewsController;
use App\Http\Controllers\admin\AdminOrdersController;
use App\Http\Controllers\UIDiscountPromotionController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\AdminBannerController;
use App\Http\Controllers\admin\AdminBlogsController;
use App\Http\Controllers\admin\AdminTestimonialsController;
use App\Http\Controllers\admin\AdminPromotionsController;
use App\Http\Controllers\admin\AdminProductDetailsController;
use App\Http\Controllers\UIController;
use App\Http\Controllers\UIAuthController;
use App\Http\Controllers\admin\AdminInternalNotesController;
use App\Http\Controllers\UICartController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return redirect()->route('admin_login');
//});
/*-----------------------------------------UI-Routes---------------------------------------------- */

/**UI Routes*/
Route::get('/', [UIController::class, 'home'])->name('UI_Home');
Route::get('/product/{product?}', [UIController::class, 'product'])->name('UI_Product');
Route::get('/catproduct/{catproduct}', [UIController::class, 'category'])->name('UI_Catproduct');
Route::post('/post-reviews', [UIController::class, 'postReviews'])->name('postReviews');
Route::get('/shipping', [UIController::class, 'shipping'])->name('UI_Shipping');
Route::get('/payment', [UIController::class, 'payment'])->name('UI_Payment');
Route::get('/contact', [UIController::class, 'contact'])->name('UI_Contact');
Route::get('/faq', [UIController::class, 'faq'])->name('UI_Faq');
Route::get('/customer-service', [UIController::class, 'customerservice'])->name('UI_customerservice');
Route::get('/my_cart', [UICartController::class, 'my_cart'])->name('UI_my_cart');
Route::get('/my_wishlist', [UICartController::class, 'my_wishlist'])->name('UI_my_wishlist');
Route::get('/shop', [UICartController::class, 'shop'])->name('UI_shop');
Route::get('/search', [UICartController::class, 'search'])->name('UI_search');
Route::get('/registry', [UIController::class, 'registry'])->name('UI_registry');
Route::get('/gift', [UIController::class, 'gift'])->name('UI_gift');
Route::get('/blog', [UIController::class, 'blog'])->name('UI_Blog');
Route::get('/blog-detail/{blog_id?}', [UIController::class, 'blog_detail'])->name('UI_Blog_Detail');
Route::get('/logout', [AdminAuthController::class, 'user_logout'])->name('user_logout');
/**UI Policies*/
Route::get('/privacy-policy', [UIController::class, 'privacy_policy'])->name('UI_Privacy_Policy');
Route::get('/refund-policy', [UIController::class, 'refund_policy'])->name('UI_Refund_Policy');
Route::get('/shipping-policy', [UIController::class, 'shipping_policy'])->name('UI_Shipping_Policy');
Route::get('/terms-of-service', [UIController::class, 'terms_of_service'])->name('UI_Terms_Of_Service');

/**UI Auth Routes*/
Route::get('/login', [UIAuthController::class, 'login'])->name('UI_Login');
Route::get('/create-account', [UIAuthController::class, 'create_account'])->name('UI_Create_Account');
Route::get('/forgot-password', [UIAuthController::class, 'forgot_password'])->name('UI_Forgot_Password');

/**UI Post Routes */
Route::post('/create-account-data', [UIAuthController::class, 'create_account_data'])->name('UI_Create_Account_Data');
Route::post('/login-data', [UIAuthController::class, 'login_data'])->name('UI_Login_Data');
Route::post('/shipping-data', [UIController::class, 'shipping_data'])->name('UI_Shipping_Data');
Route::post('/payment-data', [UIController::class, 'payment_data'])->name('UI_Payment_Data');


/**UI Cart Routes*/
Route::post('/add-to-cart/{product_id}', [UICartController::class, 'add_to_cart'])->name('UI_Add_To_Cart');
Route::post('/add-to-wishlist/{product_id}', [UICartController::class, 'add_to_wishlist'])->name('UI_Add_To_Wishlist');
Route::get('/delete-wishlist/{product_id}', [UICartController::class, 'delete_wishlist'])->name('UI_Delete_Wishlist');
Route::get('/update-cart/{product_id}', [UICartController::class, 'update_cart'])->name('UI_Update_Cart');
Route::get('/delete-cart/{product_id}', [UICartController::class, 'delete_cart'])->name('UI_Delete_Cart');

/**UI Discount-Codes Routes*/
Route::post('/discount-code', [UIDiscountPromotionController::class, 'discount_code'])->name('UI_Discount_Code');

/*---------------------------------------Admin-Routes---------------------------------------------- */
/**Auth Routes */
Route::get('/admin-login', [AdminAuthController::class, 'login'])->name('admin_login');
Route::post('/admin/login-data', [AdminAuthController::class, 'login_data'])->name('login_data_page');
Route::get('/admin/logout', [AdminAuthController::class, 'logout'])->name('admin_logout');

/**Admin Auth Middleware Starts */
Route::group(['middleware' => ['protectedPage']], function () {

    /**Dashboard Routes */
    Route::get('/admin/dashboard', [AdminBannerController::class, 'dashboard'])->name('admin_dashboard');

    /**Profile Routes */
    Route::get('/admin/profile', [AdminAuthController::class, 'admin_profile'])->name('admin_profile');
    Route::post('/admin/profile-update/{user?}', [AdminAuthController::class, 'admin_profile_update'])->name('admin_profile_update');
    Route::post('/admin/profile-pass-update/{user?}', [AdminAuthController::class, 'admin_password_update'])->name('admin_password_update');

    /**Banner Routes */
    Route::get('/admin/banner-list', [AdminBannerController::class, 'banner'])->name('admin_banners');
    Route::get('/admin/banner-add', [AdminBannerController::class, 'banner_add'])->name('admin_banners_add');
    Route::get('/admin/banner-edit/{id?}', [AdminBannerController::class, 'banner_edit'])->name('admin_banners_edit');
    Route::get('/admin/banner-delete/{banner?}', [AdminBannerController::class, 'banner_delete'])->name('admin_banners_delete');
    Route::post('/admin/banner-add-edit/{banner?}', [AdminBannerController::class, 'banner_add_edit_data'])->name('admin_banners_add_edit');

    /**Blogs Routes */
    Route::get('/admin/blog-list', [AdminBlogsController::class, 'blog_list'])->name('admin_blogs');
    Route::get('/admin/blog-add', [AdminBlogsController::class, 'blog_add'])->name('admin_blogs_add');
    Route::get('/admin/blog-edit/{id?}', [AdminBlogsController::class, 'blog_edit'])->name('admin_blogs_edit');
    Route::get('/admin/blog-delete/{blog?}', [AdminBlogsController::class, 'blog_delete'])->name('admin_blogs_delete');
    Route::post('/admin/blog-add-edit/{blog?}', [AdminBlogsController::class, 'blog_add_edit_data'])->name('admin_blogs_add_edit');


    /**Reviews Routes */
    Route::get('/admin/reviews-list', [AdminReviewsController::class, 'reviews_list'])->name('admin_reviews_list');
    Route::get('/admin/reviews-rev/{id?}', [AdminReviewsController::class, 'reviews_rev'])->name('admin_reviews');
    Route::get('/admin/review-status/{review}/{status}', [AdminReviewsController::class, 'review_status'])->name('admin_review_status');

    /**Testimonials Routes */
    Route::get('/admin/testimonial-list', [AdminTestimonialsController::class, 'testimonial_list'])->name('admin_testimonials');
    Route::get('/admin/testimonial-list', [AdminTestimonialsController::class, 'testimonial_list'])->name('admin_testimonials');
    Route::get('/admin/testimonial-add', [AdminTestimonialsController::class, 'testimonial_add'])->name('admin_testimonials_add');
    Route::get('/admin/testimonial-edit/{id?}', [AdminTestimonialsController::class, 'testimonial_edit'])->name('admin_testimonials_edit');
    Route::get('/admin/testimonial-delete/{testimonial?}', [AdminTestimonialsController::class, 'testimonial_delete'])->name('admin_testimonials_delete');
    Route::post('/admin/testimonial-add-edit/{testimonial?}', [AdminTestimonialsController::class, 'testimonial_add_edit_data'])->name('admin_testimonials_add_edit');

    /**Promotions Routes */
    Route::get('/admin/promotions-list', [AdminPromotionsController::class, 'promotions_list'])->name('admin_promotions');
    Route::get('/admin/promotions-add', [AdminPromotionsController::class, 'promotions_add'])->name('admin_promotions_add');
    Route::get('/admin/promotions-edit/{id?}', [AdminPromotionsController::class, 'promotions_edit'])->name('admin_promotions_edit');
    Route::get('/admin/promotions-assign', [AdminPromotionsController::class, 'promotions_assign'])->name('admin_promotions_assign');
    Route::get('/admin/promotions-promoted-list', [AdminPromotionsController::class, 'promotions_list_assigned'])->name('admin_promotions_promoted');
    Route::get('/admin/promotions-delete/{promotions?}', [AdminPromotionsController::class, 'promotions_delete'])->name('admin_promotions_delete');
    Route::post('/admin/promotions-add-edit/{promotions?}', [AdminPromotionsController::class, 'promotions_add_edit_data'])->name('admin_promotions_add_edit');
    Route::post('/admin/promotions-assign-data', [AdminPromotionsController::class, 'assign_promotion'])->name('admin_assign_promotion');

    /**Discount-code Routes*/
    Route::get('/admin/discount-code-list', [AdminDiscountCodeController::class, 'discount_codes'])->name('admin_discount_codes');
    Route::get('/admin/discount-code-add', [AdminDiscountCodeController::class, 'add_discount_codes'])->name('admin_add_discount_codes');
    Route::get('/admin/discount-code-edit/{discount}', [AdminDiscountCodeController::class, 'edit_discount_codes'])->name('admin_edit_discount_codes');
    Route::get('/admin/discount-code-delete/{discount}', [AdminDiscountCodeController::class, 'delete_discount_codes'])->name('admin_delete_discount_codes');
    Route::post('/admin/discount-code-add-data/{discount?}', [AdminDiscountCodeController::class, 'add_edit_discount_codes'])->name('admin_add_edit_discount_codes');

    /**User Routes*/
    Route::get('/admin/user-list', [AdminAuthController::class, 'user_list'])->name('admin_users');
    Route::get('/admin/user-add', [AdminAuthController::class, 'user_add'])->name('admin_users_add');
    Route::get('/admin/user-edit/{id?}', [AdminAuthController::class, 'user_edit'])->name('admin_users_edit');
    Route::get('/admin/user-delete/{user?}', [AdminAuthController::class, 'user_delete'])->name('admin_users_delete');
    Route::post('/admin/user-add-edit/{user?}', [AdminAuthController::class, 'user_add_edit_data'])->name('admin_users_add_edit');

    /**Order Routes*/
    Route::get('/admin/order-list', [AdminOrdersController::class, 'orders_list'])->name('admin_orders_list');
    Route::get('/admin/order-edit/{order}', [AdminOrdersController::class, 'edit_order'])->name('admin_edit_order');
    Route::get('/admin/order-delete/{order_item}', [AdminOrdersController::class, 'delete_order'])->name('admin_delete_order');
    Route::get('/admin/order-status/{orders}/{status}', [AdminOrdersController::class, 'order_status'])->name('admin_order_status');
    Route::post('/admin/order-add-new-product/{order}', [AdminOrdersController::class, 'addnewproduct'])->name('admin_addnewproduct');

    /**Product Detail Routes*/
    /**Categories Routes */
    Route::get('/admin/categories-list', [AdminProductDetailsController::class, 'categories_list'])->name('admin_categories');
    Route::get('/admin/categories-add', [AdminProductDetailsController::class, 'categories_add'])->name('admin_categories_add');
    Route::get('/admin/categories-edit/{id?}', [AdminProductDetailsController::class, 'categories_edit'])->name('admin_categories_edit');
    Route::get('/admin/categories-delete/{categories?}', [AdminProductDetailsController::class, 'categories_delete'])->name('admin_categories_delete');
    Route::post('/admin/categories-add-edit/{categories?}', [AdminProductDetailsController::class, 'categories_add_edit_data'])->name('admin_categories_add_edit');

    /**Sub-Categories Routes */
    Route::get('/admin/sub-categories-list', [AdminProductDetailsController::class, 'sub_categories_list'])->name('admin_sub_categories');
    Route::get('/admin/sub-categories-add', [AdminProductDetailsController::class, 'sub_categories_add'])->name('admin_sub_categories_add');
    Route::get('/admin/sub-categories-edit/{id?}', [AdminProductDetailsController::class, 'sub_categories_edit'])->name('admin_sub_categories_edit');
    Route::get('/admin/sub-categories-delete/{sub_categories?}', [AdminProductDetailsController::class, 'sub_categories_delete'])->name('admin_sub_categories_delete');
    Route::post('/admin/sub-categories-add-edit/{sub_categories?}', [AdminProductDetailsController::class, 'sub_categories_add_edit_data'])->name('admin_sub_categories_add_edit');
    /**Products Routes */
    Route::get('/admin/products-list', [AdminProductDetailsController::class, 'products_list'])->name('admin_products');
    Route::get('/admin/products-add', [AdminProductDetailsController::class, 'products_add'])->name('admin_products_add');
    Route::get('/admin/products-edit/{id?}', [AdminProductDetailsController::class, 'products_edit'])->name('admin_products_edit');
    Route::get('/admin/products-delete/{products?}', [AdminProductDetailsController::class, 'products_delete'])->name('admin_products_delete');
    Route::post('/admin/internal-notes-add-edit/{internal_notes?}', [AdminInternalNotesController::class, 'add_edit_notes'])->name('add_edit_notes');
    Route::post('/admin/internal-notes', [AdminInternalNotesController::class, 'get_notes'])->name('admin_internal_notes');
    Route::post('/admin/products-add-edit/{products?}', [AdminProductDetailsController::class, 'products_add_edit_data'])->name('admin_products_add_edit');
});
/**Admin Auth Middleware Ends */
