<?php
/**
 * The template for Birth Control Methods and Testimonials
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>


	<div id="primary" class="content-area">
		<main id="main" class="site-main-birth-control" role="main">

			<section class="birth-control container">

				<div class="birth-control-header">

				<?php
$loop = CFS()->get( 'products' );

if ($loop) {
	
foreach ( $loop as $row ) {
	$product_image = $row['product_image'];
    echo "<h1 class='bcm-title'>" . $row['product_title'] . "</h1>";
	echo "<img class = 'bcm-img' src='" . $product_image . "'/>";
	echo "<p class ='bcm-text'>" .$row['product_text'] . "</p>";
}
}?>

				</div>

				<?php while ( have_posts() ) : the_post(); ?>

<?php get_template_part( 'template-parts/content', 'single' ); ?>

<?php the_post_navigation(); ?>

<?php
	// If comments are open or we have at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) :
		comments_template();
	endif;
?>

<?php endwhile; // End of the loop. ?>

		</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>