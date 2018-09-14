<?php
/**
 * The header for our theme.
 *
 * @package RED_Starter_Theme
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>

		<div id="page" class="hfeed site">
			<a class="skip-link screen-reader-text" href="#content"><?php esc_html( 'Skip to content' ); ?></a>


			<header id="masthead" class="site-header" role="banner">
				<div class="site-branding">
					<h1 class="site-title screen-reader-text"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<p class="site-description"><?php bloginfo( 'description' ); ?></p>
				</div><!-- .site-branding -->

				<nav id="site-navigation" class="main-navigation" role="navigation">

					<span class="hamburger">
					<i class="fas fa-bars"></i>
					</span>

					<span class="exit-nav">
					<i class="fas fa-times"></i>
					</span>

					<span class="span-home-logo">
						<a href="<?php echo home_url() ?>">
						<img class="home-logo" src="<?php echo get_template_directory_uri() ?>/images/home-logo.svg">
						</a>
					</span>				

					<a class="span-chinese-nav" href='<?php echo home_url(); ?>/chinese_resources'>
					<p class="chinese-nav">中国资源</p>
					</a>

					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>

					<?php $menu = wp_get_nav_menu_items('Navigation Menu'); ?>
					
					<div class="span-donate-button">
					<a class="donate-button" href='<?php echo home_url(); ?>/donate'>Donate</a>
					</div>

				</nav><!-- #site-navigation -->
			</header><!-- #masthead -->

			

			<div id="content" class="site-content">
