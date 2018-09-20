<?php
/**
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 */

if ( ! function_exists( 'ewh_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function ewh_setup() {
	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	// Let WordPress manage the document title.
	add_theme_support( 'title-tag' );

	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html( 'Primary Menu' ),
	) );

	// Switch search form, comment form, and comments to output valid HTML5.
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

}
endif; // ewh_setup
add_action( 'after_setup_theme', 'ewh_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * @global int $content_width
 */
function ewh_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'ewh_content_width', 640 );
}
add_action( 'after_setup_theme', 'ewh_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */

/**
 * Filter the stylesheet_uri to output the minified CSS file.
 */
function ewh_minified_css( $stylesheet_uri, $stylesheet_dir_uri ) {
	if ( file_exists( get_template_directory() . '/build/css/style.min.css' ) ) {
		$stylesheet_uri = $stylesheet_dir_uri . '/build/css/style.min.css';
	}

	return $stylesheet_uri;
}
add_filter( 'stylesheet_uri', 'ewh_minified_css', 10, 2 );

/**
 * Enqueue scripts and styles.
 */
function ewh_scripts()
{
		wp_enqueue_style('ewh-style', get_stylesheet_uri());
		wp_enqueue_style('google-font', 'https://fonts.googleapis.com/css?family=Arsenal:100,400,700|Arya:100,400,700|Catamaran:100,400,700', array(), true);
		wp_enqueue_style( 'font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css', array(), '4.4.0' );

  wp_enqueue_script('ewh-skip-link-focus-fix', get_template_directory_uri() . '/build/js/skip-link-focus-fix.min.js', array(), '20130115', true);
	wp_enqueue_script('font-awesome', 'https://use.fontawesome.com/releases/v5.2.0/js/all.js', array(), true);
	wp_enqueue_script('ewh-scripts', get_template_directory_uri() . '/build/js/arrow-clicks.min.js', array('jquery'), '1.0.0', true);
	wp_enqueue_script('ewh1-scripts', get_template_directory_uri() . '/build/js/hamburger.min.js', array('jquery'), '1.0.0', true);
	wp_enqueue_script('ewh2-scripts', get_template_directory_uri() . '/build/js/abortion-page.min.js', array('jquery'), '1.0.0', true);


    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}

add_action('wp_enqueue_scripts', 'ewh_scripts');

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

function ewh_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html( 'Footer' ),
		'id'            => 'footer',
		'description'   => '',
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'ewh_widgets_init' );

// Allow SVG to be uploaded to WordPress
function cc_mime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
  }
  add_filter('upload_mimes', 'cc_mime_types');

// Chinese Make Appointment Page Redirect
	function make_appointment_template_redirect()
	{
		$current_post_id = get_queried_object_id();

			if( $current_post_id === (870) && ! is_user_logged_in() )
			{
					wp_redirect( home_url( '/contact-us/' ) );
					die;	
			}
	}
	add_action( 'template_redirect', 'make_appointment_template_redirect' );