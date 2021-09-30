<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'i7528353_wp1' );

/** MySQL database username */
define( 'DB_USER', 'i7528353_wp1' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Q.9D61Xq14eCwOpddCO00' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'RJycVddO4L0k519FHWojwllfwUltQBZZPLyZ3TngxEeGOP5mFpWF4SvtWQBmiQL6');
define('SECURE_AUTH_KEY',  'B21qAzMGLppDsEOuKP0ZTsgVbcL8m2eE9mLq39Y2rmnSdQSpvvySgEtXqnUtPZk4');
define('LOGGED_IN_KEY',    'mBzdykMQAFVGlPLKlXBSNlTfkLuhzHNfTtL9UDXVE6Q7KrsiI2wU1qXK5nL0Qkhf');
define('NONCE_KEY',        'flx98PLcg3Wf2rCQCCrsEuD5j5UplSgNOOAcTsNeGgYSZgf7zrRBxkXWVIRAfNmC');
define('AUTH_SALT',        '5UO9a4wUoZ8XviD0rNeHJvRcQt0xLqzJiybKRjKJrokC0CHr2vfB4vw6NK3147Tt');
define('SECURE_AUTH_SALT', '0dy9zCcPB9qx1fzKbb7myGKfO2LeqBr57uKWosm1XJTOnojhjJODbOHfK9Sv31tH');
define('LOGGED_IN_SALT',   'AeFHpTYLdJVhwm9by32WBiH6j0OdTXfoGHOJ2FkpYohtlwWeq0el776ARUVJqL4L');
define('NONCE_SALT',       'TrxIUryYv0efXdP0OpK1PLkApgT7iLWqxRkyNDhSNBEaXsJRgopd8OZnMWiz2wWu');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');
define('FS_CHMOD_DIR',0755);
define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed externally by Installatron.
 * If you remove this define() to re-enable WordPress's automatic background updating
 * then it's advised to disable auto-updating in Installatron.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
