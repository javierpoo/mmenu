<?php
/**
 * Plugin Name: mmenu - App look-alike menus
 * Plugin URI: http://mmenu.frebsite.nl/wordpress-plugin
 * Description: The best WordPress plugin for app look-alike off-canvas mega menus with sliding submenus for your WordPress website.
 * Version: 2.7.4
 * Author: Fred Heusschen
 * Author URI: http://www.frebsite.nl
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
