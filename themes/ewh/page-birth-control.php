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


				<?php

			$args = array( 'posts_per_page' => 12, 'post_type'=> 'birth_control_method' );

			$birth_control_posts = get_posts( $args );
			foreach ( $birth_control_posts as $post ) : setup_postdata( $post ); ?>
			<div class="birth-control-methods-blue">
				<h2>
					<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
				</h2>


				<?php echo CFS()->get( "effectiveness"); ?>
				<br>
				<div class ="hide-description"><?php echo CFS()->get( "description"); ?></div>
				<br>
				<?php echo CFS()->get( "price"); ?>
				

			</div>

				<?php

// 			<?php 

			endforeach; 
			wp_reset_postdata();?>

		</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>