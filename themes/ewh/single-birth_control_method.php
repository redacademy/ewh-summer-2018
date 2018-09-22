<?php
/**
 * The template for displaying your decision page.
 *
 */
get_header(); ?>
    <div id="primary" class="bcm-content-area">

        <main id="main" class="site-main" role="main">
			
		<div class="bcm-banner-page">
            <?php if (have_posts()) : ?>
            <?php while ( have_posts() ) : the_post(); ?>

               
                <h1 class="single-bcm-title"><?php the_title(); ?></h1>
               
            <div class="single-bcm-container">
                <span class="bcm-image"><?php the_post_thumbnail(); ?></span>
   <p><strong>Effectiveness:</strong> <?php echo CFS()->get('effectiveness'); ?></p>
   <p><strong>Price:</strong> <?php echo CFS()->get('price'); ?></p>
   <p><strong>What is it?</strong> <?php echo CFS()->get('description'); ?></p> 
   <p><?php echo CFS()->get('bc-textarea'); ?></p>
                    </div>

  <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
        <?php else : ?>
            <h2>Nothing found!</h2>
        <?php endif; ?>
		
		
		
		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php get_sidebar(); ?>
<?php get_footer(); ?>
