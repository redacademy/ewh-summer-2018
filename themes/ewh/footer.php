<?php
/**
 * The template for displaying the footer.
 *
 * @package RED_Starter_Theme
 */

?>

			</div><!-- #content -->

	

			<footer id="colophon" class="site-footer" role="contentinfo">

			<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar("footer") ) : ?>
			<?php dynamic_sidebar('footer'); ?>
<?php endif;?>

			</footer><!-- #colophon -->

		<?php	wp_footer(); ?>
		
		</div><!-- #page -->

	</body>
</html>
