module.exports = {
    content: ['index.html', 'assets/maugallery.js','assets/scripts.js', 'assets/bootstrap/bootstrap.bundle.js'], // Liste des fichiers HTML et JavaScript pour lesquels PurgeCSS recherchera les classes CSS utilisées.
    css: ['assets/style.css'], // Le chemin vers le fichier CSS de Bootstrap que vous souhaitez nettoyer.
    // Autres options de configuration selon vos besoins.
    whitelist: ['top-header','name','nav','nav-link', 'social-link','header','carousel','slide', 'active','active-tag','carousel-inner','carousel-item','carousel-control-prev','carousel-control-prev-icon','visually-hidden','carousel-control-next','carousel-control-next-icon','about',
'picture','left','about-me','about-me__title','about-me__introduction','gallery','gallery-items-row','row','title','container','py-3','gallery-item','gallery-image','quote','quote__text','quote__author','services','service','service__description','service__price','contact','form-container','picture', 'right','d-block','w-100','item-column','mb-4','col-12','col-sm-6','col-md-4','col-lg-4','col-xl-4','mg-next','mg-prev','modal-content','modal-body','modal-dialog','modal','fade','show','lightboxImage','img-fluid','my-4','tags-bar', 'nav-pills','nav-item','data-bs-target']
  };
  