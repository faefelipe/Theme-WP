<?php
/**
 *  O rodapé do nosso tema.
 *
 * Esse template contém a tag <footer> e fecha a tag <div id="content" class="site-content">
 *
 * @package grau
 */

?>

	</div>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="container-fluid site-container">
			<div class="row">

				<div class="col-xs-12">
					<div class="site-info">
						<?php printf( esc_html__( 'Feito com %1$s por %2$s.', 'grau' ), 'Grau', 'Grau Dev Team' ); ?>
					</div>
				</div>

			</div>
		</div>
	</footer>

</div>

<?php wp_footer(); ?>

</body>
</html>
