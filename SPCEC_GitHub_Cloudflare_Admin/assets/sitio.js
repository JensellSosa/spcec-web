// Contenido editable en content/sitio.json (GitHub o Decap CMS)
(async function(){
 try {
  const r=await fetch('/content/sitio.json',{cache:'no-cache'}); if(!r.ok) return;
  const d=await r.json();
  const h=document.querySelector('h1'); if(h&&d.eslogan) h.textContent=d.eslogan;
  const container=document.querySelector('#servicios .cards');
  if(container&&Array.isArray(d.servicios)){
   container.replaceChildren();
   d.servicios.forEach((v)=>{
    const card=document.createElement('article');card.className='card';
    if(v.icono){const img=document.createElement('img');img.className='spcec-service-icon';img.src=v.icono;img.alt='';img.loading='lazy';card.append(img)}
    const title=document.createElement('h3');title.textContent=v.titulo||'';card.append(title);
    const p=document.createElement('p');p.textContent=v.descripcion||'';card.append(p);
    const a=document.createElement('a');a.href='#contacto';a.textContent='Solicitar servicio →';card.append(a);container.append(card);
   });
  }
  if(d.descripcion_servicios){const section=document.querySelector('#servicios');if(section){const p=[...section.querySelectorAll('p')].find(el=>el.closest('.card')===null);if(p)p.textContent=d.descripcion_servicios}}
  if(Array.isArray(d.servicios)){
   for(const sel of document.querySelectorAll('select')){
    if([...sel.options].some(o=>/servicio/i.test(o.textContent))){
     const placeholder=sel.options[0]?.cloneNode(true);sel.replaceChildren();if(placeholder)sel.append(placeholder);
     d.servicios.forEach(v=>{const o=document.createElement('option');o.value=v.titulo;o.textContent=v.titulo;sel.append(o)})
    }
   }
  }
 }catch(err){console.warn('Contenido predeterminado cargado:',err)}
})();
