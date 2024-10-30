<?php
/**
 * Plugin Name: Hide posts for specific roles
 * Plugin URI: http://www.marcelotorresweb.com/hide-posts-for-specific-roles/
 * Description: Hide posts(post, page, post types, attachments) for specific roles
 * Author: marcelotorres
 * Author URI: http://marcelotorresweb.com/
 * Version: 1.1.0
 * License: GPLv2 or later
 * Text Domain: hpfsr
 * Domain Path: /languages/
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

//Load the plugin text domain for translation. 
function hpfsr_load_plugin_textdomain() {
	load_plugin_textdomain( 'hpfsr', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}
add_action( 'plugins_loaded', 'hpfsr_load_plugin_textdomain' );

//Add custom meta links for plugins page
add_filter( 'plugin_row_meta', 'hpfsr_custom_plugin_row_meta', 10, 2 );
function hpfsr_custom_plugin_row_meta( $links, $file ) {
	if ( strpos( $file, 'hide-posts-for-specific-roles.php' ) !== false ) {
		$new_links = array(
				'<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G85Z9XFXWWHCY" target="_blank"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" alt="PayPal - The safer, easier way to pay online!" border="0"></a>'
			);
		$links = array_merge( $links, $new_links );
	}
	return $links;
}

//Add custom action links for plugins page
add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), 'hpfsr_custom_plugin_manage_link', 10, 4 );
function hpfsr_custom_plugin_manage_link( $actions, $plugin_file, $plugin_data, $context ) {
    return array_merge( array(
		'<a href="' . esc_url( admin_url( '/tools.php?page=hpfsr-settings' ) ) . '">' . __( 'Configure', 'hpfsr' ) . '</a>'
	), $actions );
}

//include classes
include( 'classes/class-hide-posts-for-specific-roles.php' );

//Initialize the plugin
(new Hide_Posts_For_Specific_Roles());