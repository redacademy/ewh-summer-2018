<?php
/**
 * Custom functions that act independently of the theme templates.
 *
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function ewh_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	return $classes;
}
add_filter( 'body_class', 'ewh_body_classes' );

// Change Login image/link
function ewh_login_logo() {
	echo '<style>                                                                   
			h1 a { background-image:url("'.get_stylesheet_directory_uri().'/images/home-logo.svg") !important; height: 100px !important; width: 320px !important; background-size: 310px !important;}                            
	</style>';
}
add_action('login_head', 'ewh_login_logo');
