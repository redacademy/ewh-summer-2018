<?php
/**
 * POST TYPES
 *
 * @link  http://codex.wordpress.org/Function_Reference/register_post_type
 */

// Register Custom Post Type
function inhabitent_register_birth_control_methods() {

	$labels = array(
		'name'                  => 'Birth Control Methods',
		'singular_name'         => 'Birth Control Method',
		'menu_name'             => 'Birth Control Methods',
		'name_admin_bar'        => 'Birth Control Methods',
		'archives'              => 'Birth Control Methods Archives',
		'attributes'            => 'Birth Control Methods Attributes',
		'parent_item_colon'     => 'Parent Birth Control Method:',
		'all_items'             => 'All Birth Control Methods',
		'add_new_item'          => 'Add New Birth Control Method',
		'add_new'               => 'Add New',
		'new_item'              => 'New Birth Control Method',
		'edit_item'             => 'Edit Birth Control Method',
		'update_item'           => 'Update Birth Control Method',
		'view_item'             => 'View Birth Control Method',
		'view_items'            => 'View Birth Control Methods',
		'search_items'          => 'Search Birth Control Method',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into Birth Control Method',
		'uploaded_to_this_item' => 'Uploaded to this Birth Control Method',
		'items_list'            => 'Birth Control Methods list',
		'items_list_navigation' => 'Birth Control Methods list navigation',
		'filter_items_list'     => 'Filter Birth Control Methods list',
	);
	$args = array(
		'label'                 => 'Birth Control Method',
		'description'           => 'A post type for Birth Control Methods in the shop',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'revisions' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-cart',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => 'shop',
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'post',
    'show_in_rest'          => true,
    // 'template_lock'         => 'all',
    'template'              => array(
      array(
        'core/paragraph', array(
          'placeholder' => 'Add the Birth Control Method description here.'
        )
      )
    ),
	);
	register_post_type( 'Birth Control Method', $args );

}
add_action( 'init', 'inhabitent_register_birth_control_methods', 0 );
