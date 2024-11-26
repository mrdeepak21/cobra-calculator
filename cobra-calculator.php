<?php

/**
 * @version 1.0.0
 * @package cobra-calculator
 * 
 * Plugin Name: COBRA Calculator
 * Description: COBRA calulator plugin using react use shortcode <code>[cobra_calculator]</code> to display it.
 * Author: Heigh10
 * Author uri: https://heigh10.com
 * Version: 1.0.0
 */


if(!defined('ABSPATH')) return wp_die('Not Allowed');

Class Calculator {

     function __construct ( ) {


        add_action( 'wp_enqueue_scripts', 'load_scripts');
         function load_scripts() {
            
            wp_enqueue_script( 'cobra-calculator', trailingslashit( plugin_dir_url( __FILE__ ) ) . "dist/index.js", ['jquery','wp-element'], '1.0',true);
        }

        
        // Adding Shortcode
        add_shortcode( 'cobra_calculator', function() {
            ob_start();
            ?>
            <link id="cobra-calculator-css" rel="stylesheet" href="<?php echo trailingslashit( plugin_dir_url( __FILE__ ) ) . "dist/output.css?ver=1.0" ?>">
            <div id="app">
            <span class="loader"></span>
            </div>
            <?php
            $app = ob_get_contents();
            ob_end_clean();

            return $app;
        });
    }

}

new Calculator();