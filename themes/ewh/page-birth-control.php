<?php
/**
 * The template for Birth Control Methods and Testimonials
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main-birth-control" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'template-parts/content', 'page' ); ?>

			<?php endwhile; // End of the loop. ?>

			<section class="birth-control container">

			<div class="birth-control-methods-blue">
		<h2> IUD </h2>
		<p> 99.8% Effective <br>
$300-400 </p>
		</div>

		<div class="birth-control-methods-blue">
		<h2> Birth Control </h2>
		<p> 99.8% Effective <br>
$300-400 </p>
		</div>

		<div class="birth-control-methods-teal">
		<h2> Birth Control Pills </h2>
		<p> 99.8% Effective <br>
$300-400 </p>
		</div>

		<div class="birth-control-methods-teal">
		<h2> Birth Control Patch </h2>
		<p> 99.8% Effective <br>
$300-400 </p>
		</div>

		<div class="birth-control-methods-blue">
		<h2> NuvaRing </h2>
		<p> 99.8% Effective <br>
$300-400 </p>
		</div>

		<div class="birth-control-methods-blue">
		<h2> Condoms </h2>
		<p> 99.8% Effective <br>
$300-400 </p>
		</div>


		<div class="birth-control-methods-teal">
		<h2> Spermicides </h2>
		<p> 99.8% Effective <br>
$300-400 </p>
		</div>

		<div class="birth-control-methods-teal">
		<h2> Emergency Pills </h2>
		<p> 99.8% Effective <br>
$300-400 </p>
		</div>

		<div class="birth-control-methods-blue">
		<h2> Vasectomy </h2>
		<p> 99.8% Effective <br>
$300-400 </p>
		</div>

		<div class="birth-control-methods-blue">
		<h2> Tubal Ligation</h2>
		<p> 99.8% Effective <br>
$300-400 </p>
		</div>

		<div class="birth-control-methods-teal">
		<h2> Withdrawal Method </h2>
		<p> 99.8% Effective <br>
$300-400 </p>
		</div>

		<div class="birth-control-methods-teal">
		<h2> Calendar Method </h2>
		<p> 99.8% Effective <br>
$300-400 </p>
		</div>

		</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>