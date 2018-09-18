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
<div class="fsp-div">
<p>If you are able to show her that you care, listen to her in a non-judgmental way, and be physically and emotionally present when she needs you, you can make a huge difference in her experience. Here are some general tips on how to be a caring and effective support person during this time and how to also take care of yourself during this process.</p>
<p>Here are some general tips on how to be a caring and effective support person during this time and how to also take care of yourself during this process; how to support a woman during a pregnancy decision/before an abortion here and how to support someone after an abortion here.</p>
</div>

<?php 
	$tab_content_1 = CFS()->get('before_abortion_support_text_area');
	$tab_content_2 = CFS()->get('after_abortion_support_text_area');
	?>


<section class='arrow-container'>
<div class="arrow1">		
<a class="before">Before Abortion</a>
</div>
<div class="arrow3">		
<a class="after">After Abortion</a>
</div>
</section>

<section class="for-support-person-block">
	<div class="tab-1">
		<?php echo $tab_content_1; ?>
	</div>
	<div class="tab-3">
		<?php echo $tab_content_2; ?>
	</div>
</section>

<div class="ap-contact-us">
	<p>Call Everywoman’s Health to book an appointment, to discuss your decision with a counsellor or to book a follow up appointment. Counselling sessions are free of charge and can be in person or over the telephone.</p>
	<a class="ap-contact-button" href="<?php echo home_url(); ?>/contact-us">Contact Us</a>
</div>

</div>
			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>