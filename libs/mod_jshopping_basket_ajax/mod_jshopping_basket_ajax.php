<?php /** Module Basket ajax for JoomShopping
	 /** version 1.0 **/
defined('_JEXEC') or die;
error_reporting(error_reporting() & ~E_NOTICE);
if (!file_exists(JPATH_SITE.'/components/com_jshopping/jshopping.php')){
	JError::raiseError(500,"Please install component \"joomshopping\"");
}
require_once (JPATH_SITE.'/components/com_jshopping/lib/factory.php');
require_once (JPATH_SITE.'/components/com_jshopping/lib/functions.php');
JSFactory::loadCssFiles();
JSFactory::loadLanguageFile();
$doc = JFactory::getDocument();
$doc->addStyleSheet(JURI::base().'modules/mod_jshopping_basket_ajax/css/style.css');
$doc->addScript(JURI::base().'modules/mod_jshopping_basket_ajax/js/ajax.js');
$jshopConfig = JSFactory::getConfig();
JModelLegacy::addIncludePath(JPATH_SITE.'/components/com_jshopping/models');
$cart = JModelLegacy::getInstance('cart', 'jshop');
$cart->load("cart");
$cart->addLinkToProducts(1,$type="cart");
require JModuleHelper::getLayoutPath('mod_jshopping_basket_ajax');