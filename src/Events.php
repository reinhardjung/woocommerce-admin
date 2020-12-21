<?php
/**
 * Handle cron events.
 * NOTE: DO NOT edit this file in WooCommerce core, this is generated from woocommerce-admin.
 */

namespace Automattic\WooCommerce\Admin;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\Notes\ChooseNiche;
use \Automattic\WooCommerce\Admin\Notes\ChoosingTheme;
use \Automattic\WooCommerce\Admin\Notes\GivingFeedbackNotes;
use \Automattic\WooCommerce\Admin\Notes\InsightFirstProductAndPayment;
use \Automattic\WooCommerce\Admin\Notes\MobileApp;
use \Automattic\WooCommerce\Admin\Notes\NewSalesRecord;
use \Automattic\WooCommerce\Admin\Notes\TrackingOptIn;
use \Automattic\WooCommerce\Admin\Notes\OnboardingEmailMarketing;
use \Automattic\WooCommerce\Admin\Notes\OnboardingPayments;
use \Automattic\WooCommerce\Admin\Notes\PersonalizeStore;
use \Automattic\WooCommerce\Admin\Notes\EUVATNumber;
use \Automattic\WooCommerce\Admin\Notes\WooCommercePayments;
use \Automattic\WooCommerce\Admin\Notes\Marketing;
use \Automattic\WooCommerce\Admin\Notes\StartDropshippingBusiness;
use \Automattic\WooCommerce\Admin\Notes\WooCommerceSubscriptions;
use \Automattic\WooCommerce\Admin\Notes\MigrateFromShopify;
use \Automattic\WooCommerce\Admin\Notes\LaunchChecklist;
use \Automattic\WooCommerce\Admin\Notes\RealTimeOrderAlerts;
use \Automattic\WooCommerce\Admin\RemoteInboxNotifications\DataSourcePoller;
use \Automattic\WooCommerce\Admin\RemoteInboxNotifications\RemoteInboxNotificationsEngine;
use \Automattic\WooCommerce\Admin\Notes\MerchantEmailNotifications\MerchantEmailNotifications;
use \Automattic\WooCommerce\Admin\Loader;
use \Automattic\WooCommerce\Admin\Notes\InsightFirstSale;
use \Automattic\WooCommerce\Admin\Notes\NeedSomeInspiration;
use \Automattic\WooCommerce\Admin\Notes\OnlineClothingStore;
use \Automattic\WooCommerce\Admin\Notes\FirstProduct;
use \Automattic\WooCommerce\Admin\Notes\CustomizeStoreWithBlocks;
use \Automattic\WooCommerce\Admin\Notes\GoogleAdsAndMarketing;
use \Automattic\WooCommerce\Admin\Notes\TestCheckout;
use \Automattic\WooCommerce\Admin\Notes\EditProductsOnTheMove;
use \Automattic\WooCommerce\Admin\Notes\PerformanceOnMobile;
use \Automattic\WooCommerce\Admin\Notes\ManageOrdersOnTheGo;
use \Automattic\WooCommerce\Admin\Notes\NavigationFeedback;
use \Automattic\WooCommerce\Admin\Notes\NavigationFeedbackFollowUp;
use \Automattic\WooCommerce\Admin\Notes\FilterByProductVariationsInReports;

/**
 * Events Class.
 */
class Events {
	/**
	 * The single instance of the class.
	 *
	 * @var object
	 */
	protected static $instance = null;

	/**
	 * Constructor
	 *
	 * @return void
	 */
	protected function __construct() {}

	/**
	 * Get class instance.
	 *
	 * @return object Instance.
	 */
	final public static function instance() {
		if ( null === static::$instance ) {
			static::$instance = new static();
		}
		return static::$instance;
	}

	/**
	 * Cron event handlers.
	 */
	public function init() {
		add_action( 'wc_admin_daily', array( $this, 'do_wc_admin_daily' ) );
	}

	/**
	 * Daily events to run.
	 *
	 * Note: Order_Milestones::other_milestones is hooked to this as well.
	 */
	public function do_wc_admin_daily() {
		$this->possibly_add_notes();

		if ( $this->is_remote_inbox_notifications_enabled() ) {
			DataSourcePoller::read_specs_from_data_sources();
			RemoteInboxNotificationsEngine::run();
		}

		if ( $this->is_merchant_email_notifications_enabled() || true ) {
			MerchantEmailNotifications::possible_send();
		}
	}

	/**
	 * Adds notes that should be added.
	 */
	protected function possibly_add_notes() {
		NewSalesRecord::possibly_add_note();
		MobileApp::possibly_add_note();
		TrackingOptIn::possibly_add_note();
		OnboardingEmailMarketing::possibly_add_note();
		OnboardingPayments::possibly_add_note();
		PersonalizeStore::possibly_add_note();
		WooCommercePayments::possibly_add_note();
		EUVATNumber::possibly_add_note();
		Marketing::possibly_add_note();
		GivingFeedbackNotes::possibly_add_note();
		StartDropshippingBusiness::possibly_add_note();
		WooCommerceSubscriptions::possibly_add_note();
		MigrateFromShopify::possibly_add_note();
		InsightFirstSale::possibly_add_note();
		LaunchChecklist::possibly_add_note();
		NeedSomeInspiration::possibly_add_note();
		OnlineClothingStore::possibly_add_note();
		FirstProduct::possibly_add_note();
		ChooseNiche::possibly_add_note();
		RealTimeOrderAlerts::possibly_add_note();
		CustomizeStoreWithBlocks::possibly_add_note();
		GoogleAdsAndMarketing::possibly_add_note();
		TestCheckout::possibly_add_note();
		EditProductsOnTheMove::possibly_add_note();
		PerformanceOnMobile::possibly_add_note();
		ManageOrdersOnTheGo::possibly_add_note();
		NavigationFeedback::possibly_add_note();
		NavigationFeedbackFollowUp::possibly_add_note();
		FilterByProductVariationsInReports::possibly_add_note();
		ChoosingTheme::possibly_add_note();
		InsightFirstProductAndPayment::possibly_add_note();
	}

	/**
	 * Checks if remote inbox notifications are enabled.
	 *
	 * @return bool Whether remote inbox notifications are enabled.
	 */
	protected function is_remote_inbox_notifications_enabled() {
		// Check if the feature flag is disabled.
		if ( ! Loader::is_feature_enabled( 'remote-inbox-notifications' ) ) {
			return false;
		}

		// Check if the site has opted out of marketplace suggestions.
		if ( 'yes' !== get_option( 'woocommerce_show_marketplace_suggestions', 'yes' ) ) {
			return false;
		}

		// All checks have passed.
		return true;
	}

	/**
	 * Checks if merchant email notifications are enabled.
	 *
	 * @return bool Whether merchant email notifications are enabled.
	 */
	protected function is_merchant_email_notifications_enabled() {
		// Check if the feature flag is disabled.
		if ( ! Loader::is_feature_enabled( 'merchant-email-notifications' ) ) {
			return false;
		}

		// All checks have passed.
		return true;
	}
}
