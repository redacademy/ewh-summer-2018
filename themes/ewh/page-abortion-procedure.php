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

<?php 
	$tab_label_1 = CFS()->get_field_info('before_abortion');
	$tab_content_1 = CFS()->get('before_abortion_text_area');
	?>


<section class='arrow-container'>
<div class="arrow">		
<a class="before"><?php echo $tab_label_1['label']; ?></a>
</div>
<div class="arrow">		
<a class="during">Abortion Procedure</a>
</div>
<div class="arrow">		
<a class="after">After Abortion</a>
</div>

</section>
<div class="CFS-div">
	

</div>
<section class="abortion-procedure-block">
	<div id="tab-1">
		<p><?php echo $tab_content_1; ?></p>
	</div>
</section>
			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>