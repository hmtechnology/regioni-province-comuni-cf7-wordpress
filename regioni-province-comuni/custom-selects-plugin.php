<?php
/*
Plugin Name: Regioni Province Comuni for CF7
Description: Allows dynamic selection of Italian regioni, province, and comuni in Contact Form 7
Version: 1.0
Author: {e}volutiv³
Author URI: https://this-is-evolutive.com/
*/

// Include jQuery script and CSS style sheet 
function custom_location_dropdowns_enqueue_script() {
    // Get the content of the current post
    global $post;
    $post_content = $post->post_content;

    // Check if the current page contains the Contact Form 7 shortcode with title="RPC
    if (preg_match('/\[contact-form-7 id="[\w-]+" title="RPC [\w\s\d-]+"\]/', $post_content)) {
        // Include the jQuery script
        wp_enqueue_script('custom-location-dropdowns', plugin_dir_url(__FILE__) . 'custom-location-dropdowns.js', array('jquery'), '1.0', true);

        // Include the CSS style sheet
        wp_enqueue_style('custom-location-styles', plugin_dir_url(__FILE__) . 'custom-location-styles.css', array(), '1.0');

        // Pass the URL of the data.php file to the jQuery script
        wp_localize_script('custom-location-dropdowns', 'custom_location_data', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'dati_url' => plugin_dir_url(__FILE__) . 'dati.php'
        ));
    }
}

add_action('wp_enqueue_scripts', 'custom_location_dropdowns_enqueue_script');
