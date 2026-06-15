<?php

use CodeIgniter\Router\RouteCollection;

/** @var RouteCollection $routes */
$routes->get('/', 'Libros::index');

$routes->get('libros', 'Libros::index');
$routes->get('libros/crear', 'Libros::crear');
$routes->post('libros/guardar', 'Libros::guardar');
$routes->get('libros/editar/(:num)', 'Libros::editar/$1');
$routes->post('libros/actualizar', 'Libros::actualizar');
$routes->get('libros/eliminar/(:num)', 'Libros::eliminar/$1');


