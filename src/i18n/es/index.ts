export default {
  //header
  myPortfolio: 'Mi Portafolios !',
  mySpecialities: 'Mis especialidades',
  contactMe: 'Contáctame',
  home: 'Inicio',
  myWorks: 'Mis trabajos',
  aboutMe: 'Acerca de mi',
  goBack: 'Regresar',
  //footer
  wContactMe: '¿Quieres contactarme?',
  copyright: 'Todos los derechos reservados',
  //card work
  git: 'Git',
  viewSite: 'Ver sitio',
  //sections
  //about me
  aboutMeLine1: "TSU. en Informática desde el 2.007 e Ingeniero en informática desde el año 2.013, empecé desarrollando aplicaciones de escritorio para Windows, principalmente de facturación e inventarios en Visual Basic. Pronto migré al desarrollo web, empecé con CakePHP que para el momento era de los mejores frameworks mvc disponibles, robusto en terminos de seguridad y de buenas prestaciones. Luego conocería Yii framework y posteriormente Laravel.",
  aboutMeLine2: "Con más de 10 años en el negocio del desarrollo he tenido ocasión de utilizar diversas tecnologías, arquitecturas, patrones de diseño y afines. Autodidacta, curioso y comprometido con el cumplimiento de las metas, con capacidad de aportar soluciones e innovar cuando es necesario, me gusta mantenerme actualizado y siempre estudiando nuevas tecnologías y nuevas formas de afrontar retos que nunca faltan.",
  //portfolio
  portfolio: 'Mis trabajos',
  gbetReview: 'Sitio de apuestas escrito en Laravel, utiliza Pusher para las notificaciones en tiempo real, cuenta con un dashboard para los procesos internos y una zona pública para el perfil de los clientes que permite consultar su historial de apuestas, balance general, saldos, etc.',
  invoicerReview: 'Se trata de un sistema de facturación e inventarios que cuenta con modulo de ventas, presupestos, arqueo diario de cajas, cuentas por cobrar, clientes, compras, cotizaciones, gastos, cuentas por pagar, proveedores, productos, consumos, etc.',
  cakeReview: 'Una tienda online con carrito de compras y sistema de seguimiento de pedidos desarrollada en CakePHP, HTML5, Css, Jquery (con un par de plugins adicionales) y MySQL para la base de datos. Tiene un panel administrativo para el cual ocupé AdminLTE.',
  portfolioReview: 'Donde te muestro algunos de los trabajos que he realizado. Desarollado en VueJs + Quasar Framework exclusivamente.',
  //specialities
  mySpecialitiesReview: "Una lista un poco resumida de las tecnologías que ocupo actualmente para mis desarrollos.",
  //pages
  pages: {
    gbet: {
      line1: 'Un sitio de apuestas escrito en Laravel con un motor de apuestas hecho a pedido. Básicamente una persona lanza su apuesta por un lado, dicha apuesta se encuetra a la espera hasta que otro cliente vaya por el lado opuesto con un monto similar al del contendiente.',
      line2: 'Utiliza Pusher para las notificaciones en tiempo real. Se notifica por ejemplo el tipo de cierre de apuestas: la cantidad que se paga se ve alterada y depende de la cantidad de apostadores a favor de un ejemplar. Ésta información la puede utilizar el apostador a su favor.',
      line3: 'Se notifica si la apuesta juega, si no juega. Si el apostador ganó o perdió, cuanto ganó, etc.',
      line4: 'Cuenta con un dashboard para los procesos internos y una zona para el perfil de los clientes que permite consultar su historial de apuestas, balance general, saldos, etc.',
    },
    invoicer: {
      line1: 'Se trata de un sistema de facturación e inventarios que cuenta con modulo de ventas, presupestos, arqueo de cajas, asignación de cajas por operador, cuentas por cobrar, clientes, compras, cotizaciones, gastos, cuentas por pagar, proveedores, productos, consumos para registro de perdidas, por ejemplo extravío o mermas, etc.',
      line2: 'Posee una capa de persistencia para almacenar los documentos a la espera en localStorage, soporta múltiples tipos de pago y 2 modos para registrar los mismos, con tracking y sin tracking.',
      line3: 'Seguridad basada en ACL, cada permiso (end point) puede y debe ser configurado para cada grupo de acceso.',
      line4: 'Soporta multiples idiomas: espáñol e inglés, con posibilidad de agregar mas si es necesario.',
      line5: 'Una sección para configuración de moneda, formatos de fecha-hora y correos para enviar las facturas por correo por ejemplo.',
      line6: ' El front end há sido escrito en Vue 3 y Quasar framework.',
      line7: ' El back end (REST API) en Express/NestJs con TypeORM y PostgreSQL para la base de datos. ',
    },
    cake: {
      line1: 'Una tienda online con carrito de compras y sistema de seguimiento de pedidos desarrollada en CakePHP, HTML5, Css, Jquery (con un par de plugins adicionales) y MySQL para la base de datos. Tiene un panel administrativo para el cual ocupé AdminLTE.',
      line2: 'Con las ventajas que ofrece CakePHP con mínimos ajustes: componentes de seguridad y sesión, lista de control de acceso, CSRF Protection Middleware, Prevención XSS e inyección SQL, etc.',
      line3: 'El proceso a resumidas cuentas es el siguiente: un cliente realiza su pedido, el operador confirma en las cuentas del banco  el pago segun los datos del pedido, realiza el envio según el servicio de entrega seleccionado por el cliente en el formulario de pedidos.',
      line4: 'Permite actualizar desde el panel administrativo el tracking del pedido, una vez recibido el cliente valora el servicio y marca el pedido como recibido si es el caso.',
      line5: 'El panel administrativo posee varios modulos y herramientas para facilitar las tareas: permite registrar productos, proveedores, marcas, presentaciones, laboratorios, punto de venta integrado, reportes varios, salidas en formato CSV, operaciones varias por lotes, etc.',
    },    
    portfolio: {
      line1: 'Donde te muestro algunos de los trabajos que he realizado. Desarollado en VueJs + Quasar Framework exclusivamente.',
      line2: 'Tiene un par de cosas interesantes, por ejemplo hacer las variables de uso global al estilo de Quasar sin necesidad de importarlas en los archivos vue.',
      line3: 'El Scrollspy de la barra de navegación que con Bootstap es trivial, así como realizar internacionalización con vue-i18n.',
      line4: 'Si te resulta de utilidad puedes ver o clonar la repo y adaptarlo a tus necesidades.',
    },    
  }
};
