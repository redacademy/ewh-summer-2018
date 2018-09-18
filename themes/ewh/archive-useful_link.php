<?php
/**
 * The template for displaying archive useful links page.
 *
 */

get_header(); ?>

	<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

<section class="useful-page">
 <?php if (have_posts()) : ?>
                        <?php while (have_posts()) : the_post(); ?>
     <button class='useful-link-div-single'>  
       <h2><?php the_title();?></h2>
        <?php the_content(); ?>
</button>
  <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
        <?php else : ?>
            <h2>Nothing found!</h2>
        <?php endif; ?>
</section>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>