<?php
/**
 * Template Name: Abortion Procedure
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>
<h2>What to expect</h2>
<p>Find more information about abortion preparation, abortion procedure and aftercare.</p>		
<section class='arrow-container'>
<div class="arrow">		
<a class="before">Before Abortion</a>
</div>
<div class="arrow">		
<a class="during">Abortion Procedure</a>
</div>
<div class="arrow">		
<a class="after">After Abortion</a>
</div>

</section>

<section class="abortion-procedure-block">

</section>
			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>