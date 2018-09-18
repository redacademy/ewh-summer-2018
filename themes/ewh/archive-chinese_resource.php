<?php
/**
 * The template for displaying chinese archive pages.
 *
 */

get_header(); ?>

	<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
<div class="chinese-banner">
    <h2>中文咨讯 Chinese</h2>
</div>
    <section class="chinese-page">
 <?php if (have_posts()) : ?>
                        <?php while (have_posts()) : the_post(); ?>
                        
         <div class='chinese-div'>
         <a href="<?php the_permalink(); ?>">		
        <h2><?php the_title();?></h2>
        </a>
        </div>

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