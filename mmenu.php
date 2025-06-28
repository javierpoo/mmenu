<?php
/**
 * Plugin Name: mmenu - App look-alike menus
 * Plugin URI: https://mmenu.frebsite.nl/wordpress-plugin
 * Description: The best WordPress plugin for app look-alike off-canvas mega menus with sliding submenus for your WordPress website.
 * Version: 2.7.5
 * Author: Fred Heusschen
 * Author URI: https://www.frebsite.nl
 * Requires at least: 5.0
* Update URI: false
 * Tested up to: 6.4
 * Requires PHP: 5.6
 */

require_once( dirname( __FILE__ ) . '/php/wp_autoupdate.php' );

if ( is_admin() )
{
	require_once( dirname( __FILE__ ) . '/php/mmenu_backend.php' );
	new MmenuBackend();
}
else
{
	require_once( dirname( __FILE__ ) . '/php/mmenu_frontend.php' );
	new MmenuFrontend();
}
