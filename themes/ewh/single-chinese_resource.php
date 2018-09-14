<?php
/**
 * The template for displaying all single posts.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
                        
         <div class='chinese-div-single'>
        <h1><?php the_title();?></h1>
        <?php the_content(); ?>
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
