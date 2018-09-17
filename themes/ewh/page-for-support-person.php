<?php
/**
 * Template Name: For Support Person
 * 
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

			<div class="for-support-person-container">
<h1>For Support Person</h1>

<?php 
	$tab_label_1 = CFS()->get_field_info('before_abortion');
	$tab_content_1 = CFS()->get('before_abortion_text_area');
	$tab_label_2 = CFS()->get_field_info('after_abortion');
	$tab_content_2 = CFS()->get('after_abortion_text_area');
	?>


<section class='arrow-container'>
<div class="arrow1">		
<a class="before">hi</a>
</div>
<div class="arrow3">		
<a class="after">bye</a>
</div>
</section>

<section class="for-support-person-block">
	<div class="tab-1">
		<?php echo $tab_content_1; ?>
	</div>
	<div class="tab-2">
		<?php echo $tab_content_2; ?>
	</div>
</section>

</div>
			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>