# books-nest
 actividad

 # INSTRUCCIONES DEL PROYECTO


Descripción: Un sitio web para organizar y gestionar los libros usados que posee la gente para prestarlos a sus vecinos.

Funcionalidad: 
- Los usuarios pueden registrarse en la plataforma.
- Los usuarios pueden pedir prestado y/o también prestar sus propios libros.
- Debe haber un buscador de libros por categoría, y/o título de toda la comunidad.
- Debo poder ver solo mis libros, y crear un formulario para dar de alta un libro nuevo.
- en la galería de libros, cada libro debe tener título, imagen, categoría y un ranking de 1 a 5 estrellas.
- La página de un libro me muestra los datos anteriores, mas una sinópsis, una lista de los usuarios que lo tienen, reseñas de usuarios del libro.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

Los datos deben estar en variables listas/objetos de JS, por ejemplo:

- userData (datos del usuario que inicio sesión)
- allUsersData (datos de todos los usuarios)
- booksData (array de libros)
- rentalData (lista de alquileres + id usuario + id libro)
- reviewsData (todas las reviews + id libro)

La página no debe funcionar (sin usar hooks de ningún tipo), solo los links e interfaces.

Secciones:
Landing Page (página de Inicio, explica la idea con Hero a sumarse al proyecto) // PÁGINA [X]
Términos y condiciones - TyC - (https://termly.io/es/recursos/plantillas/) // COMPONENTE [X]
Perfil del usuario // PÁGINA [X]
GRID (buscador de libros) // PAGINA  [X]
GRID (mis libros) // COMPONENTE / Perfil de usuario [X]
Tabla con lista de libros que alquiló el usuario con fecha de alquiler/devolución y mi ranking + comentario. // COMPONENTE / Perfil de usuario [X]
Vista de 1 libro + Reseñas del libro // COMPONENTE / buscador de libros []
Login / Registro (Formulario) // PÁGINAS [X]
Dar de alta un nuevo libro (Formulario) // COMPONENTE / Perfil usuario [X]

