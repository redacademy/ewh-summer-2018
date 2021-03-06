<?php
/**
 * The template for displaying contact us page.
 *
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			
			<?php while ( have_posts() ) : the_post(); ?>
<div class="contact-us-container">
				<?php get_template_part( 'template-parts/content', 'page' ); ?>
</div>
			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>