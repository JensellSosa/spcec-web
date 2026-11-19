# SPCEC SRL — sitio web corporativo

Versión preparada a partir del ZIP original y el catálogo trabajado en Hostinger.

## Qué incluye
- Página corporativa `index.html` con nueve servicios e iconos personalizados.
- Diseño móvil corregido mediante tarjetas responsivas.
- Contenido editable en `content/sitio.json`.
- Base del panel Decap CMS en `/admin/` (requiere configurar autenticación OAuth para GitHub).
- Proyecto estático listo para desplegar en Cloudflare.

## Edición inmediata sin programar
1. En GitHub abre `content/sitio.json` y pulsa el lápiz **Edit**.
2. Cambia únicamente textos entre comillas; conserva comas, llaves y corchetes.
3. Pulsa **Commit changes**. Tras conectar despliegue automático, Cloudflare publicará el cambio.

## Configuración pendiente del panel
Decap CMS con backend GitHub **no permite iniciar sesión solo con este ZIP**. Es obligatorio desplegar un proveedor OAuth seguro y configurar `base_url`/`auth_endpoint` en `admin/config.yml`. No guardes tokens ni secretos en el repositorio. También falta conectar este repositorio a un despliegue automático de Cloudflare.

## Publicación segura
El Worker `solitary-bush-04a3` sigue intacto hasta que publiques esta versión. Para desplegar automáticamente, configura un proyecto de Cloudflare Workers/Pages conectado a GitHub; revisa la configuración de compilación y carpeta de salida para un sitio estático. Prueba primero la URL temporal antes de vincular `spcec.com.do`.

## Notas
- Los proyectos del sitio son espacios reservados, **no** trabajos realizados confirmados.
- No se han incluido contraseñas ni credenciales.
- El catálogo y los iconos vienen de la edición visual realizada en Hostinger y de los recursos aportados en la conversación.
