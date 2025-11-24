import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const articles = [
  {
    id: 12938,
    title: "Derechos de los Inmigrantes en Estados Unidos – Lo Que Debes Saber",
    url: "/proteccion-legal-para-migrantes/derechos-de-los-inmigrantes-en-estados-unidos",
    author: "Dan Motzer",
    date: "febrero 18, 2025",
    isoDate: "2025-02-18",
    excerpt: "El Bufete del Abogado Manuel Solis destaca que todos los inmigrantes, sin importar su estatus migratorio, tienen derechos fundamentales protegidos en EE.UU. Es clave conocer estos derechos para defenderse ante situaciones adversas."
  },
  {
    id: 12340,
    title: "Solicitar Asilo En EE.UU.: Conoce los Requisitos",
    url: "/proteccion-legal-para-migrantes/solicitar-asilo-en-ee-uu-conoce-los-requisitos",
    author: "Julio César Sánchez",
    date: "diciembre 3, 2024",
    isoDate: "2024-12-03",
    excerpt: "Solicitar asilo en Estados Unidos permite a quienes temen persecución en su país de origen obtener protección. Si experimentas persecución por raza, religión, nacionalidad, pertenencia a un grupo social específico o tus opiniones políticas, puedes solicitar asilo."
  },
  {
    id: 12084,
    title: "Visa U: Requisitos Básicos para Solicitarla",
    url: "/proteccion-legal-para-migrantes/requisitos-basicos-para-solicitar-la-visa-u",
    author: "Julio César Sánchez",
    date: "noviembre 29, 2024",
    isoDate: "2024-11-29",
    excerpt: "La migración a Estados Unidos es una experiencia llena de desafíos, especialmente para aquellos que han enfrentado delitos graves en este país. Para estas personas, la Visa U representa no solo una solución legal, sino una segunda oportunidad."
  },
  {
    id: 11467,
    title: "Protección Legal Urgente para Migrantes en EE.UU.: Qué Hacer si la Necesitas",
    url: "/proteccion-legal-para-migrantes/que-hacer-si-necesitas-proteccion-legal-urgente-en-ee-uu",
    author: "Julio César Sánchez",
    date: "noviembre 26, 2024",
    isoDate: "2024-11-26",
    excerpt: "Si enfrentas una situación legal inesperada en EE.UU., la rapidez y precisión en tus acciones son cruciales. Ya sea que te enfrentes a una detención, problemas con tu estatus migratorio o cualquier emergencia, actuar adecuadamente puede marcar la diferencia."
  },
  {
    id: 11336,
    title: "Opciones Legales para Migrantes en Proceso de Deportación",
    url: "/proteccion-legal-para-migrantes/opciones-legales-para-migrantes-en-proceso-de-deportacion",
    author: "Julio César Sánchez",
    date: "noviembre 25, 2024",
    isoDate: "2024-11-25",
    excerpt: "Un procedimiento de deportación puede ser una experiencia desoladora y abrumadora para las personas sin papeles y sus familias. Sin embargo, existen múltiples opciones legales para migrantes que pueden ayudar a frenar o incluso detener este proceso."
  },
  {
    id: 11227,
    title: "Servicios Legales para Migrantes en Situaciones de Riesgo",
    url: "/proteccion-legal-para-migrantes/servicios-legales-para-migrantes",
    author: "Julio César Sánchez",
    date: "noviembre 23, 2024",
    isoDate: "2024-11-23",
    excerpt: "En los Estados Unidos, millones de migrantes enfrentan desafíos legales, sociales y económicos que pueden poner en riesgo su bienestar y estabilidad. Desde detenciones por agentes de inmigración hasta discriminación laboral o acceso limitado a servicios esenciales."
  },
  {
    id: 11130,
    title: "Protección legal para migrantes: Obtenla en Estados Unidos",
    url: "/proteccion-legal-para-migrantes/proteccion-legal-para-migrantes-obtenla-en-estados-unidos",
    author: "Julio César Sánchez",
    date: "noviembre 22, 2024",
    isoDate: "2024-11-22",
    excerpt: "Miles de personas enfrentan una vida llena de incertidumbre y obstáculos debido a la falta de un estatus legal en Estados Unidos. Vivir sin documentos puede causar preocupaciones constantes y el temor a la separación familiar."
  },
  {
    id: 9858,
    title: "Nombre del Puesto: Analista de sistemas informáticos",
    url: "/proteccion-legal-para-migrantes/titulo-profesional-analista-de-sistemas-informaticos",
    author: "Raul Zepeda",
    date: "agosto 16, 2024",
    isoDate: "2024-08-16",
    excerpt: "Requisitos: Se requiere Licenciatura en Sistemas de Información Gerencial. 40 horas semanales. Lunes a viernes: 9:00 a. m. a 5:00 p. m."
  },
  {
    id: 6555,
    title: "Negligencia Medica",
    url: "/proteccion-legal-para-migrantes/malpractica-medica",
    author: "Raul Zepeda",
    date: "noviembre 13, 2021",
    isoDate: "2021-11-13",
    excerpt: "La negligencia médica es una atención deficiente proporcionada por un profesional médico a un paciente, que puede causar lesiones directamente o empeorar una condición existente."
  },
  {
    id: 5439,
    title: "Accidentes",
    url: "/proteccion-legal-para-migrantes/los-accidentes-son-definidos-como-sucesos-imprevistos-que-alteran-el-orden-normal-o-previsto-de-las-cosas-especialmente-si-causan-danos-a-una-persona-o-cosa",
    author: "Raul Zepeda",
    date: "noviembre 7, 2021",
    isoDate: "2021-11-07",
    excerpt: "Los accidentes son definidos como sucesos imprevistos que alteran el orden normal o previsto de las cosas, especialmente si causan daños a una persona o cosa."
  },
  {
    id: 5483,
    title: "ACCIDENTES DE CAMIONES DE CARGA",
    url: "/proteccion-legal-para-migrantes/accidentes-de-camiones-de-carga",
    author: "Raul Zepeda",
    date: "octubre 16, 2021",
    isoDate: "2021-10-16",
    excerpt: "Los camiones de carga tipo trailer, son vehículos extremadamente peligrosos y vulnerables. Son normalmente grandes, pesados y difíciles de maniobrar. Pero si a estos factores agregamos el hecho de que muchas veces las compañías no dan el mantenimiento adecuado a sus vehículos."
  },
  {
    id: 5489,
    title: "NUEVAS ESPERANZAS PARA ALGUNOS DEPORTADOS Y SUS FAMILIAS EN LOS ESTADOS UNIDOS",
    url: "/proteccion-legal-para-migrantes/nuevas-esperanzas-para-algunos-deportados-y-sus-familias-en-los-estados-unidos",
    author: "Raul Zepeda",
    date: "septiembre 3, 2021",
    isoDate: "2021-09-03",
    excerpt: "Uno de los compromisos de la Administración Biden ha sido el de revisar miles de casos de deportación y reunir a los que reúnen los requisitos con sus familias estadounidenses."
  },
  {
    id: 5925,
    title: "LA USICS PRESIDE UN NUEVO GRUPO DE TRABAJO A FAVOR DE LOS MIGRANTES",
    url: "/proteccion-legal-para-migrantes/la-usics-preside-un-nuevo-grupo-de-trabajo-a-favor-de-los-migrantes",
    author: "Raul Zepeda",
    date: "agosto 13, 2021",
    isoDate: "2021-08-13",
    excerpt: "En respuesta a la Orden Ejecutiva sobre la Restauración de la Fe en Nuestros Sistemas de Inmigración Legal, la oficina del Servicio de Ciudadanía e Inmigración de Estados Unidos (USCIS) ha encabezado un nuevo Grupo de Trabajo enfocado en la Naturalización."
  },
  {
    id: 5931,
    title: "CAMBIOS IMPORTANTES EN LAS POLÍTICAS DE INMIGRACIÓN EN LOS PRIMEROS 100 DÍAS DE BIDEN COMO PRESIDENTE",
    url: "/proteccion-legal-para-migrantes/cambios-importantes-en-las-politicas-de-inmigracion-en-los-primeros-100-dias-de-biden-como-presidente",
    author: "Raul Zepeda",
    date: "mayo 25, 2021",
    isoDate: "2021-05-25",
    excerpt: "Durante su presidencia, Donald Trump estableció más de 400 acciones ejecutivas concernientes a la inmigración. Desde que Biden tomó la presidencia, ya ha revocado o hecho cambios a un buen número de ellos."
  },
  {
    id: 6011,
    title: "¿SUFRIÓ DAÑOS Y PÉRDIDAS DESPUÉS DE LA GRAN TORMENTA INVERNAL?",
    url: "/proteccion-legal-para-migrantes/sufrio-danos-y-perdidas-despues-de-la-gran-tormenta-invernal",
    author: "Raul Zepeda",
    date: "marzo 2, 2021",
    isoDate: "2021-03-02",
    excerpt: "Si su casa o propiedad fue dañada o sufrió otras pérdidas debido al clima y/o cortes de energía, la siguiente es información importante que debe saber."
  },
  {
    id: 6122,
    title: "QUE HACER CUANDO SU TUBERIA SE DAÑA DEBIDO AL FRIO",
    url: "/proteccion-legal-para-migrantes/que-hacer-cuando-su-tuberia-se-dana-debido-al-frio",
    author: "Raul Zepeda",
    date: "febrero 20, 2021",
    isoDate: "2021-02-20",
    excerpt: "Con la tormenta invernal histórica que ha afectado a nuestro estado en los últimos días, los propietarios de viviendas podrían encontrarse con que muchas de sus tuberías se han reventado o roto."
  },
  {
    id: 6132,
    title: "PLAN DE INMIGRACIÓN DE BIDEN PARA INMIGRANTES INDOCUMENTADOS",
    url: "/proteccion-legal-para-migrantes/plan-de-inmigracion-de-biden-para-inmigrantes-indocumentados",
    author: "Raul Zepeda",
    date: "enero 22, 2021",
    isoDate: "2021-01-22",
    excerpt: "Uno de los primeros actos del presidente Joe Biden ha sido enviar al Congreso su propuesta para un plan de inmigración que incluye ofrecer un camino hacia la ciudadanía que tomaría ocho años para las aproximadamente 11 millones de personas sin estatus legal."
  },
  {
    id: 6158,
    title: "ALGUNAS BUENAS NOTICIAS PARA INMIGRANTES",
    url: "/proteccion-legal-para-migrantes/algunas-buenas-noticias-para-inmigrantes",
    author: "Raul Zepeda",
    date: "diciembre 24, 2020",
    isoDate: "2020-12-24",
    excerpt: "Biden ha prometido revocar rápidamente muchas de las políticas de inmigración que la administración Trump pudo implementar a través de una orden ejecutiva y que dificultó para muchos el proceso de regularizar su situación migratoria."
  },
  {
    id: 6166,
    title: "BUENAS NOTICIAS PARA LOS QUE CALIFICAN PARA DACA",
    url: "/proteccion-legal-para-migrantes/buenas-noticias-para-los-que-califican-para-daca",
    author: "Raul Zepeda",
    date: "diciembre 12, 2020",
    isoDate: "2020-12-12",
    excerpt: "Hay buenas noticias para las más de un millón de personas – de hecho se estima que son alrededor de 1,3 millones – que han llegado a calificar para DACA desde que la Administración Trump terminó el programa en septiembre de 2017."
  },
  {
    id: 6172,
    title: "POSIBLES CAMBIOS Y NUEVAS POLÍTICAS BAJO LA PRESIDENCIA DE BIDEN",
    url: "/proteccion-legal-para-migrantes/posibles-cambios-y-nuevas-politicas-bajo-la-presidencia-de-biden",
    author: "Raul Zepeda",
    date: "diciembre 4, 2020",
    isoDate: "2020-12-04",
    excerpt: "Una pregunta que muchos hispanos han hecho es… ¿Cómo afectará una presidencia de Biden a su Comunidad? Aunque las siguientes no son políticas o propuestas dirigidas directamente a los hispanos, si les afectarán como a toda la población."
  },
  {
    id: 6179,
    title: "EL PODER DEL VOTO HISPANO EN LAS ELECCIONES 2020",
    url: "/proteccion-legal-para-migrantes/el-poder-del-voto-hispano-en-las-elecciones-2020",
    author: "Raul Zepeda",
    date: "noviembre 14, 2020",
    isoDate: "2020-11-14",
    excerpt: "¿Votó en las elecciones que acabamos de tener? Si su respuesta es sí … ¡felicidades! Su voto tiene poder. De hecho, En 2020, los hispanos ahora son la “minoría” con la mayor cantidad de votantes en los Estados Unidos."
  },
  {
    id: 6185,
    title: "LAS POLÍTICAS DE INMIGRACIÓN DE TRUMP Y BIDEN",
    url: "/proteccion-legal-para-migrantes/las-politicas-de-inmigracion-de-trump-y-biden",
    author: "Raul Zepeda",
    date: "octubre 30, 2020",
    isoDate: "2020-10-30",
    excerpt: "Inmigración – ¿Cómo podría ser bajo cada administración? Esta es una pregunta que muchos hacen – de hecho, es el sexto tema más importante al decidir por quién votar."
  },
  {
    id: 6191,
    title: "¡EJERZA SU DERECHO!",
    url: "/proteccion-legal-para-migrantes/ejerza-su-derecho",
    author: "Raul Zepeda",
    date: "octubre 17, 2020",
    isoDate: "2020-10-17",
    excerpt: "Votar en las elecciones es un gran privilegio, porque es su oportunidad para ayudar a decidir quién será presidente de los Estados Unidos y quiénes lo representarán a usted en el Congreso de los Estados Unidos."
  },
  {
    id: 6200,
    title: "¡OBTENER LA CIUDADANÍA OFRECE BENEFICIOS IMPORTANTES!",
    url: "/proteccion-legal-para-migrantes/obtener-la-ciudadania-ofrece-beneficios-importantes",
    author: "Raul Zepeda",
    date: "octubre 2, 2020",
    isoDate: "2020-10-02",
    excerpt: "Si usted o seres queridos califican para la ciudadanía y la han estado posponiendo por alguna razón, puede que ahora sea el momento de proceder."
  },
  {
    id: 6206,
    title: "EL 2 DE OCTUBRE EL GOBIERNO AUMENTA TARIFAS PARA SERVICIOS DE INMIGRACIÓN",
    url: "/proteccion-legal-para-migrantes/el-2-de-octubre-el-gobierno-aumenta-tarifas-para-servicios-de-inmigracion",
    author: "Raul Zepeda",
    date: "septiembre 18, 2020",
    isoDate: "2020-09-18",
    excerpt: "Si usted tiene planes de meter su petición para la ciudadanía americana – o si está necesitando solicitar o renovar su permiso para trabajar en los Estados Unidos, hágalo inmediatamente."
  },
  {
    id: 6212,
    title: "AUMENTO EN LAS TARIFAS Y LARGOS RETRASOS EN LOS SERVICIOS DE INMIGRACIÓN",
    url: "/proteccion-legal-para-migrantes/aumento-en-las-tarifas-y-largos-retrasos-en-los-servicios-de-inmigracion-2",
    author: "Raul Zepeda",
    date: "agosto 14, 2020",
    isoDate: "2020-08-14",
    excerpt: "Durante las últimas semanas, mucho se ha escuchado acerca del un nuevo Paquete de Alivio por el Coronavirus. Desafortunadamente, el Congreso no llegó a ningún acuerdo, y no se volverá a reunir hasta septiembre."
  },
  {
    id: 6218,
    title: "EL COSTO PARA SOLICITAR LA CIUDADANÍA AMERICANA AUMENTARÁ DRÁSTICAMENTE",
    url: "/proteccion-legal-para-migrantes/el-costo-para-solicitar-la-ciudadania-americana-aumentara-drasticamente",
    author: "Raul Zepeda",
    date: "agosto 7, 2020",
    isoDate: "2020-08-07",
    excerpt: "Si usted es un residente legal de los Estados Unidos y ha estado considerando solicitar la ciudadanía, tiene desde ahora hasta el 1 de octubre para solicitarla a la tarifa actual de 640.00."
  },
  {
    id: 6225,
    title: "DACA – ÚLTIMAS NOTICIAS Y RECOMENDACIONES",
    url: "/proteccion-legal-para-migrantes/daca-ultimas-noticias-y-recomendaciones",
    author: "Raul Zepeda",
    date: "julio 31, 2020",
    isoDate: "2020-07-31",
    excerpt: "Afortunadamente, el presidente Trump no va a tratar de cancelar el programa DACA inmediatamente, sino que lo están revisando, y es posible que cambie de idea y no lo cancelen."
  },
  {
    id: 6232,
    title: "EL GOBIERNO DEBE COMENZAR A ACEPTAR NUEVAS PETICIONES PARA DACA",
    url: "/proteccion-legal-para-migrantes/el-gobierno-debe-comenzar-a-aceptar-nuevas-peticiones-para-daca",
    author: "Raul Zepeda",
    date: "julio 24, 2020",
    isoDate: "2020-07-24",
    excerpt: "La Suprema Corte de los Estados Unidos determinó que el gobierno de Trump no había terminado correctamente el programa de DACA."
  },
  {
    id: 6238,
    title: "UN SERIO DÉFICIT DEL USCIS AMENAZA FRENAR LOS SERVICIOS DE INMIGRACIÓN",
    url: "/proteccion-legal-para-migrantes/un-serio-deficit-del-uscis-amenaza-frenar-los-servicios-de-inmigracion",
    author: "Raul Zepeda",
    date: "julio 10, 2020",
    isoDate: "2020-07-10",
    excerpt: "La Agencia de Servicios de Ciudadanía e Inmigración de los Estados Unidos (USCIS), que procesa todas las solicitudes de visa, otorga ciudadanías y proporciona beneficios de inmigración, está enfrentando un serio déficit presupuestario."
  },
  {
    id: 6244,
    title: "¿USTED CALIFICA PARA DACA?",
    url: "/proteccion-legal-para-migrantes/si-usted-califica-para-daca-podria-calificar-para-un-permiso-de-trabajar",
    author: "Raul Zepeda",
    date: "junio 26, 2020",
    isoDate: "2020-06-26",
    excerpt: "La semana pasada, la Corte Suprema impidió que la administración del presidente Trump terminara el programa de DACA. Esta es una gran victoria para los recipientes de DACA."
  },
  {
    id: 6250,
    title: "¿PROTESTAR O NO? UNA ELECCIÓN DIFÍCIL PARA LOS INMIGRANTES",
    url: "/proteccion-legal-para-migrantes/protestar-o-no-una-eleccion-dificil-para-los-inmigrantes",
    author: "Raul Zepeda",
    date: "junio 17, 2020",
    isoDate: "2020-06-17",
    excerpt: "Un artículo reciente en CNN.com habla de las decisiones difíciles que deben tomar los inmigrantes que están aquí con visa, si quieren apoyar y participar en las protestas de Black Lives Matter y similares."
  },
  {
    id: 6256,
    title: "700,000 PARTICIPANTES DEL PROGRAMA DACA ESPERAN ANSIOSAMENTE LA DECISIÓN DE LA CORTE SUPREMA",
    url: "/proteccion-legal-para-migrantes/700-000-participantes-del-programa-daca-esperan-ansiosamente-la-decision-de-la-corte-suprema",
    author: "Raul Zepeda",
    date: "junio 6, 2020",
    isoDate: "2020-06-06",
    excerpt: "El entonces presidente Obama estableció DACA por orden ejecutivo en el año 2012, como un alivio temporal para darle tiempo al Congreso a pasar leyes permanentes."
  },
  {
    id: 6262,
    title: "POR QUÉ TEMEN LOS INMIGRANTES LEGALES SOLICITAR LA PRESTACIÓN POR DESEMPLEO",
    url: "/proteccion-legal-para-migrantes/por-que-temen-los-inmigrantes-legales-solicitar-la-prestacion-por-desempleo",
    author: "Raul Zepeda",
    date: "mayo 28, 2020",
    isoDate: "2020-05-28",
    excerpt: "Inmigrantes preguntan si solicitar la prestación por desempleo será una señal de humo en cuanto a su situación, causando que los expulsen del país al negarles la renovación de sus visas o green cards."
  },
  {
    id: 6345,
    title: "“SUEÑO Y PROMESA” PODRÍA SER EL CAMINO A LA LEGALIZACIÓN DEFINITIVA DE LOS DACA",
    url: "/proteccion-legal-para-migrantes/sueno-y-promesa-podria-ser-el-camino-a-la-legalizacion-definitiva-de-los-daca",
    author: "Raul Zepeda",
    date: "marzo 17, 2020",
    isoDate: "2020-03-17",
    excerpt: "El nuevo programa aprobado y vigente, promete ofrecer una via para la legalización definitiva a los beneficiarios del TPS y del DACA."
  },
  {
    id: 6339,
    title: "REDADA DE ICE EN ALLEN, TEXAS",
    url: "/proteccion-legal-para-migrantes/redada-de-ice-en-allen-texas",
    author: "Raul Zepeda",
    date: "marzo 17, 2020",
    isoDate: "2020-03-17",
    excerpt: "El sitio que fue allanado por ICE fue CVE Technology Group Inc. en Allen, Texas. Los primeros informes detallados que aproximadamente 280 personas han sido detenidas."
  },
  {
    id: 6319,
    title: "LAS NUEVAS REGLAS PARA OBTENER LA GREEN CARD NO SON LO QUE PARECE",
    url: "/proteccion-legal-para-migrantes/las-nuevas-reglas-para-obtener-la-green-card-no-son-lo-que-parece",
    author: "Raul Zepeda",
    date: "marzo 17, 2020",
    isoDate: "2020-03-17",
    excerpt: "Si bien es cierto que la noticia es que el gobierno de Donald Trump hará más difícil que los migrantes legales que dependen de la asistencia pública —como vales de comida— consigan finalmente la residencia permanente, no se trata de algo nuevo."
  },
  {
    id: 6312,
    title: "MÁS DE 800 INMIGRANTES CON ÓRDENES DE DEPORTACIÓN OBTIENEN CIUDADANÍA POR FALLA DE SEGURIDAD",
    url: "/proteccion-legal-para-migrantes/mas-de-800-inmigrantes-con-ordenes-de-deportacion-obtienen-ciudadania-por-falla-de-seguridad",
    author: "Raul Zepeda",
    date: "marzo 17, 2020",
    isoDate: "2020-03-17",
    excerpt: "El gobierno federal estadounidense concedió erróneamente la ciudadanía a por lo menos 858 inmigrantes que tenían órdenes de deportación pendientes a países de interés para la seguridad nacional, reveló un informe del auditor del Departamento."
  },
  {
    id: 6305,
    title: "EL HURACÁN FLORENCIA CAUSA LA PEOR INUNDACIÓN EN LA HISTORIA DE LA COSTA ESTE",
    url: "/proteccion-legal-para-migrantes/el-huracan-florencia-causa-la-peor-inundacion-en-la-historia-de-la-costa-este",
    author: "Raul Zepeda",
    date: "marzo 17, 2020",
    isoDate: "2020-03-17",
    excerpt: "El huracán Florence causó la peor inundación en la historia de la Costa Este. Florence arribó en las Carolinas el 14 de septiembre y trajo consigo niveles de inundación jamás vistos."
  },
  {
    id: 6298,
    title: "ESTADO ACTUAL INMIGRATORIO EN DENVER",
    url: "/proteccion-legal-para-migrantes/estado-actual-inmigratorio-en-denver",
    author: "Raul Zepeda",
    date: "marzo 17, 2020",
    isoDate: "2020-03-17",
    excerpt: "El tema de inmigración, siempre ha sido parte de la fundación de nuestra nación. Como el Presidente George W. Bush dijo. 'Casi todos los americanos tienen ancestros quienes se atrevieron a cruzar los océanos…'"
  },
  {
    id: 6292,
    title: "LA NUEVA PROPUESTA DE TRUMP PODRÍA HACER IMPOSIBLE A LOS SOLICITANTES DE ASILO VIVIR EN LOS EEUU",
    url: "/proteccion-legal-para-migrantes/la-nueva-propuesta-de-trump-podria-hacer-imposible-a-los-solicitantes-de-asilo-vivir-en-los-eeuu",
    author: "Raul Zepeda",
    date: "marzo 17, 2020",
    isoDate: "2020-03-17",
    excerpt: "Los solicitantes de asilo tendrían que esperar hasta que su caso se resuelva para obtener la autorización de trabajo, lo que puede tardar años en ocurrir."
  },
  {
    id: 6286,
    title: "VARIOS ESTADOS PERMITEN A LOS INMIGRANTES SIN PAPELES SACARSE LA LICENCIA DE MANEJO",
    url: "/proteccion-legal-para-migrantes/varios-estados-permiten-a-los-inmigrantes-sin-papeles-sacarse-la-licencia-de-manejo",
    author: "Raul Zepeda",
    date: "marzo 17, 2020",
    isoDate: "2020-03-17",
    excerpt: "Aunque es cierto que existen maneras de obtener una licencia de manejo en algunos estados sin tener un estatus migratorio legal en el país, estados como Texas lo hacen una misión imposible."
  },
  {
    id: 6277,
    title: "TERMINAL INTERCONTINENTAL DE LA COMPAÑIA (ITC) INCIDENTE DE PLANTA EN DEER PARK",
    url: "/proteccion-legal-para-migrantes/terminal-intercontinental-de-la-compania-itc-incidente-de-planta-en-deer-park",
    author: "Raul Zepeda",
    date: "marzo 17, 2020",
    isoDate: "2020-03-17",
    excerpt: "Las Oficinas Legales de Manuel Solis ahora buscan ayudar a las personas que han sido afectadas o creen que pudieron haber sido afectadas por el reciente Intercontinental Terminal Company (ITC) Incidente de una planta en Deer Park."
  },
  {
    id: 6271,
    title: "4 DE ABRIL DE 2019 CVE TECH RAID EN ALLEN, TEXAS",
    url: "/proteccion-legal-para-migrantes/4-de-abril-de-2019-cve-tech-raid-en-allen-texas",
    author: "Raul Zepeda",
    date: "marzo 17, 2020",
    isoDate: "2020-03-17",
    excerpt: "A principios del 4 de abril de 2019, más de 200 agentes de Inmigración y Control de Aduanas (ICE) realizaron una de las redadas más grandes en la última década. El sitio que fue allanado por ICE fue CVE Technology Group Inc. en Allen, Texas."
  },
  {
    id: 6148,
    title: "LOS MEXICANOS EN ESTADOS UNIDOS, EL GRUPO QUE MÁS TARDA EN COMENZAR EL PROCESO PARA OBTENER LA CIUDADANÍA",
    url: "/proteccion-legal-para-migrantes/los-mexicanos-en-estados-unidos-el-grupo-que-mas-tarda-en-comenzar-el-proceso-para-obtener-la-ciudadania-estadounidense",
    author: "Raul Zepeda",
    date: "marzo 17, 2020",
    isoDate: "2020-03-17",
    excerpt: "¿Sabías que cerca de 2.6 millones de mexicanos que radican en los Estados Unidos califican para la ciudadanía estadounidense?"
  },
  {
    id: 6387,
    title: "LOS PROPIETARIOS DE VIVIENDAS AFECTADOS POR LA EXPLOSIÓN DE LA PLANTA EN EL NOROESTE DE HOUSTON",
    url: "/proteccion-legal-para-migrantes/los-propietarios-de-viviendas-afectados-por-la-explosion-de-la-planta-en-el-noroeste-de-houston-podrian-obtener-una-indemnizacion-por-danos",
    author: "Raul Zepeda",
    date: "marzo 14, 2020",
    isoDate: "2020-03-14",
    excerpt: "Más de 200 personas fueron afectadas por la explosión ocurrida en la planta Watson Grinding & Manufacturing ubicada fuera del área metropolitana de Houston al noroeste. Se han producido al menos dos muertos y múltiples heridos."
  },
  {
    id: 6380,
    title: "ADHARA, UNA INMIGRANTE MEXICANA CON UN COEFICIENTE INTELECTUAL JAMÁS VISTO",
    url: "/proteccion-legal-para-migrantes/adhara-una-inmigrante-mexicana-con-un-coeficiente-intelectual-jamas-visto",
    author: "Raul Zepeda",
    date: "marzo 14, 2020",
    isoDate: "2020-03-14",
    excerpt: "Una niña mexicana está rompiendo todas las marcas en inteligencia con un coeficiente intelectual de 162 IQ por encima de científicos de renombre internacional como Stephen Hawking o Albert Einstein."
  },
  {
    id: 6373,
    title: "CHICAGO VOTADA LA CIUDAD MÁS AMIGABLE PARA LOS INMIGRANTES DE LOS ESTADOS UNIDOS",
    url: "/proteccion-legal-para-migrantes/chicago-votada-la-ciudad-mas-amigable-para-los-inmigrantes-de-los-estados-unidos",
    author: "Raul Zepeda",
    date: "marzo 14, 2020",
    isoDate: "2020-03-14",
    excerpt: "La mayoría de las ciudades del medio oeste de los Estados Unidos ha sacado una nota excelente en cuanto a las relaciones con los inmigrantes que viven en ellas según el reporte elaborado por New American Economy."
  },
  {
    id: 6366,
    title: "EL BUEN CARÁCTER MORAL SE CONVIERTE EN CLAVE PARA OBTENER LA CIUDADANÍA",
    url: "/proteccion-legal-para-migrantes/el-buen-caracter-moral-se-convierte-en-clave-para-obtener-la-ciudadania",
    author: "Raul Zepeda",
    date: "marzo 14, 2020",
    isoDate: "2020-03-14",
    excerpt: "Muchos residentes permanentes podrían ver sus sueños frustrados y tener que esperar hasta 5 años para poder concluir su proceso migratorio y naturalizarse."
  },
  {
    id: 6359,
    title: "EL PROGRAMA GLOBAL ENTRY DEJARÁ DE SER PARA LOS NEOYORQUINOS COMO CASTIGO POR LA LEY DE LUZ VERDE",
    url: "/proteccion-legal-para-migrantes/el-programa-global-entry-dejara-de-ser-para-los-neoyorquinos-como-castigo-por-la-ley-de-luz-verde",
    author: "Raul Zepeda",
    date: "marzo 14, 2020",
    isoDate: "2020-03-14",
    excerpt: "La administración Trump reacciona así contra la emisión de licencias de manejo a inmigrantes indocumentados, negándole a los neoyorquinos la capacidad de calificar para el programa Global Entry."
  },
  {
    id: 6352,
    title: "LA CIUDADANÍA SE PODRÍA VOLVER MÁS CARA EN BREVE",
    url: "/proteccion-legal-para-migrantes/la-ciudadania-se-podria-volver-mas-cara-en-breve",
    author: "Raul Zepeda",
    date: "marzo 14, 2020",
    isoDate: "2020-03-14",
    excerpt: "La administración de Trump está preparando una propuesta que haría un 83% más caro pagar la solicitud de ciudadanía. Los precios subirán de $ 640 a $ 1,170."
  },
  {
    id: 6332,
    title: "¿QUE ES EL PROCESO CONSULAR?",
    url: "/proteccion-legal-para-migrantes/que-es-el-proceso-consular",
    author: "Raul Zepeda",
    date: "marzo 17, 2020",
    isoDate: "2020-03-17",
    excerpt: "¿Sabes lo que significa que tu proceso será consular? En este pequeño artículo encontrarás las respuestas que necesitas."
  }
];

export default function ProteccionLegalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Header />

      <main className="flex-grow pt-42 pb-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <span className="block text-sm font-bold tracking-widest text-yellow-600 uppercase mb-2">
            Biblioteca Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
            Protección Legal para Migrantes
          </h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra información esencial, recursos, derechos y asistencia jurídica confiable para migrantes en diversas situaciones.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link href={article.url} key={article.id} className="group">
              <article className="h-full flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-500/30 relative">
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-blue-700 transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-yellow-600 uppercase tracking-wider">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                    Artículo Legal
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-800 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="pt-6 mt-auto border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                      </div>
                      <span className="font-medium text-gray-700">{article.author}</span>
                    </div>
                    <time dateTime={article.isoDate} className="text-gray-400 font-medium text-xs">
                      {article.date}
                    </time>
                  </div>
                </div>

                <div className="bg-gray-50 px-8 py-3 flex items-center justify-between group-hover:bg-blue-50 transition-colors duration-300">
                  <span className="text-sm font-bold text-blue-900 group-hover:text-blue-700">Leer artículo completo</span>
                  <svg className="w-5 h-5 text-blue-900 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}