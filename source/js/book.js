YUI().use( 'node' , function ( Y ) {
  // test
  'use strict' ;

  var topOffsetHeight = Y.one('.header').get('offsetHeight') ;
  
  var footerHeight = ( Y.one('footer').get('offsetHeight') + 5 ) ;
  
  var viewport = Y.DOM.viewportRegion() ;

  Y.one('iframe').setStyles ( {
    top: topOffsetHeight,
    height: viewport.height - topOffsetHeight - footerHeight
  } ) ;

} ) ;
