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
			<div class="abortion-procedure-container">
<h1 class="wtx">What to expect</h1>
<p class="wtxp">Find more information about abortion preparation, abortion procedure and aftercare.</p>	

<?php 
	$tab_label_1 = CFS()->get_field_info('before_abortion');
	$tab_content_1 = CFS()->get('before_abortion_text_area');
	$tab_label_2 = CFS()->get_field_info('abortion_procedure');
	$tab_content_2 = CFS()->get('abortion_procedure_text_area');
	$tab_label_3 = CFS()->get_field_info('after_abortion');
	$tab_content_3 = CFS()->get('after_abortion_text_area');
	?>


<section class='arrow-container'>
<div class="arrow1">		
<a class="before"><?php echo $tab_label_1['label']; ?></a>
</div>
<div class="arrow2">		
<a class="during"><?php echo $tab_label_2['label']; ?></a>
</div>
<div class="arrow3">		
<a class="after"><?php echo $tab_label_3['label']; ?></a>
</div>
</section>

<section class="abortion-procedure-block">
	<div class="tab-1">
		<?php echo $tab_content_1; ?>
	</div>
	<div class="tab-2">
		<?php echo $tab_content_2; ?>
	</div>
	<div class="tab-3">
	<?php echo $tab_content_3; ?>
	</div>
</section>
</div>
			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>