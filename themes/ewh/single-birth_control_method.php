<?php
/**
 * The template for displaying your decision page.
 *
 */
get_header(); ?>
    <div id="primary" class="bcm-content-area">

        <main id="main" class="site-main" role="main">
			
		<div class="bcm-banner-page">
            <?php if ( has_post_thumbnail() ): ?>
               
                <h1 class="div-bcm-title"> <?php the_title(); ?> </h1>
               
            <?php endif; ?>
            <div class="-bcm-container">
                
			
			<?php while ( have_posts() ) : the_post(); ?>

				<?php the_content(); ?>

			<?php endwhile; // End of the loop. ?>
        </div>
		
		
		
		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php get_sidebar(); ?>
<?php get_footer(); ?>
