<?php
	header("Content-type: text/javascript", true);

	$src = dirname( dirname( __FILE__ ) ) . '/lib/';
	$arr = array(
		'layout',
		'websitehtml',
		'firstvisit',
		'suboptions',
		'comboboxes',
		'locate',
		'license',
		'colorpicker',
		'breakpoint',
		'header',
		'dashicons',
		'buttons',
		'validation',
		'submit',
		'preview'
	);

$i = 0;
	foreach( $arr as $lib )
	{
		echo @file_get_contents( $src . $lib . '/admin.js' ) . '

';
	}