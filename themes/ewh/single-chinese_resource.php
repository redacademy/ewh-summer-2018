<?php
/**
 * The template for displaying all chinese resource pages.
 *
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>

    <h1 class="chinese-single-title"><?php the_title();?></h1>

         <div class='chinese-div-single'>
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
