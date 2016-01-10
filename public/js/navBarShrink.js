function shrinkNavBar() {
  $(document).ready(function(){
    $(document).scroll(function(){
      var scrollDistance = $(this).scrollTop();
      if(scrollDistance > 76){
        $('#acm-nav').addClass('shrunk-size-nav');
        $('#acm-nav').removeClass('full-size-nav');
        $('.acm-social-media-links').addClass('hide-container');
        $('.left').removeClass('hide-container');
        $('.brand-logo').addClass('center');
        $('.brand-logo img').addClass('shrunk-logo-style');
      }else{
        $('#acm-nav').removeClass('shrunk-size-nav');
        $('.acm-social-media-links').removeClass('hide-container');
        $('#acm-nav').addClass('full-size-nav');
        $('.left').addClass('hide-container');
        $('.brand-logo').removeClass('center');
        $('.brand-logo img').removeClass('shrunk-logo-style');
      }
    });
  });
};
