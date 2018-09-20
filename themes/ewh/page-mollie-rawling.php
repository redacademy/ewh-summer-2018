<?php
/**
 * The template for displaying Mollie Rawling page.
 *
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

<div class="regular-banner-page mollie-page">

<?php if ( has_post_thumbnail() ): ?>
	<div class="mollie-banner" style="background-image: url('<?php the_post_thumbnail_url(); ?>');">
	<h1 class="mollie-title"> <?php the_title(); ?> </h1>
	</div>
<?php endif; ?>

<div class="container">
	
<?php while ( have_posts() ) : the_post(); ?>

	<?php get_template_part( 'template-parts/content', 'page' ); ?>

<?php endwhile; // End of the loop. ?>

</div>
</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>