<?php
/**
 * The template for Birth Control Methods and Testimonials
 *
 */

get_header(); ?>

	<div id="primary" class="single-bcm-content-area">
		<main id="main" class="site-main-birth-control" role="main">

			<section class="birth-control-header">	

				<?php while ( have_posts() ) : the_post(); ?>

				<!-- Template from Single Birth Control Method -->

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="bcm-entry-header" container>

		<div class='bcm-title'><?php the_title( '<h1 class="bcm-entry-title">', '</h1>' ); ?></div>

		<div class='bcm-text'><?php
echo CFS()->get('head_line_text') 
?> </div>

		<?php if ( has_post_thumbnail() ) : ?>
			<div class='bcm-img'><?php the_post_thumbnail( 'large' ); ?> </div>
		<?php endif; ?></p>

	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html( 'Pages:' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php ewh_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->


<?php
	// If comments are open or we have at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) :
		comments_template();
	endif;
?>

<?php endwhile; // End of the loop. ?>

		</section>

		<div class="birth-control-container">

	<?php
	$loop = CFS()->get( 'products' );
	if(!is_null($loop )){
		foreach ( $loop as $row ) {
			$product_image = $row['product_image'];
			echo "<h1 class='bcm-title'>" . $row['product_title'] . "</h1>";
			echo "<img class = 'bcm-img' src='" . $product_image . "'/>";
			echo "<p class ='bcm-text'>" .$row['product_text'] . "</p>";
		}
	}
	?>

</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>