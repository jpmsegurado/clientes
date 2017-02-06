<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb68194ed6b7d6ef8dac7ca063689b7ac
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitb68194ed6b7d6ef8dac7ca063689b7ac::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb68194ed6b7d6ef8dac7ca063689b7ac::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
