<?php
/**
 * The template for displaying the footer.
 *
 * @package RED_Starter_Theme
 */

?>

			</div><!-- #content -->

			<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar("Footer") ) : ?>
<?php endif;?>

			<footer id="colophon" class="site-footer" role="contentinfo">
			<?php dynamic_sidebar('sidebar-1'); ?>

				<div class="phone-button">
				</div>
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
