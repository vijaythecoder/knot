 $(document).ready(function() {
  $('.fullScreen').on('click', function(){
    $(document).toggleFullScreen();
  });
  

    // PANELS
    // panel close
    $('.panel-close').on('click', function (e) {
      e.preventDefault();
      $(this).parent().parent().parent().parent().addClass(' animated fadeOutDown');
    });

    
    // if($('.switchery').length()>0)
    // {
    //   var elem3 = document.querySelector('.switchery');
    //   var switchery = new Switchery(elem3, { size: 'small' });
    // }


    $('.switchery').each(function(i, obj) {
     var switchery = new Switchery(obj, { size: 'small' });   
    });

   
    $('.panel-minimize').on('click', function (e) 
    {
      e.preventDefault();
      var $target = $(this).parent().parent().parent().next('.panel-body');
      if ($target.is(':visible')) {
        $('i', $(this)).removeClass('ion-chevron-up').addClass('ion-chevron-down');
      } else {
        $('i', $(this)).removeClass('ion-chevron-down').addClass('ion-chevron-up');
      }
      $target.slideToggle();
    });
    
    
    $('.panel-refresh').on('click', function (e) 
    {
      e.preventDefault();
        // alert('vj');
        var $target = $(this).closest('.panel-heading').next('.panel-body');
        $target.mask('<i class="fa fa-refresh fa-spin"></i> Loading...');

        setTimeout(function () {
          $target.unmask();
            // console.log('ended');
          },1000);
      }); 

    if($('#left-sidebar').length > 0)
    {
      var slideoutLeft = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('left-sidebar'),
        'padding': 256,
        'tolerance': 70
      });


      $('.toggle-leftbar').on('click',function (e) {
        e.preventDefault();
        slideoutLeft.toggle();
      });  
    }
    

    $('.mini-bar .left-sidebar').hover(function(){
      $('body').removeClass('mini-bar');
    });


    $('.submenu a[data-toggle="collapse"]').on('click',function() {
     $(this).find('i.ion-chevron-right').toggleClass('menu-chevron-down');
   })

    $('.submenu .collapse li.active').parent().parent().addClass('in');
    
    $('.submenu .collapse li.active').closest('.submenu').addClass('active').find('i.menu-chevron').addClass('menu-chevron-down');
    
    $(".mini-bar .left-sidebar").hover(
     function() {
      $('body').removeClass('mini-bar');
    },
    function() {
      $('body').addClass('mini-bar');
    }
    );


    $('.toggle-rightbar, .close-rightsidebar').on('click',function (e) {
      e.preventDefault();
      $('.right-sidebar').toggleClass('enabled');
    });



    $('.toggle-leftsidebar').on('click',function(e) {

      e.preventDefault();
      if($('body').hasClass('mini-bar'))
      {
        $('body').removeClass('mini-bar');     
        $(".left-sidebar").unbind('mouseenter mouseleave');
      }
      else
      {
        $('body').addClass('mini-bar');
        $(".mini-bar .left-sidebar").hover(
         function() {
          $('body').removeClass('mini-bar');
        },
        function() {
          $('body').addClass('mini-bar');
          $('.left-sidebar .collapse.in').removeClass('in');
        }
        );

      }

    });


    // $('.scroll-block').niceScroll();

    $('.scroll-block').niceScroll({
      cursorcolor: "#CCCCCC",
      cursorborderradius: "0px",
      cursorwidth: "3px",
    });

    $('.left-sidebar').niceScroll({
      cursorcolor: "#CCCCCC",
      cursorborder: "#CCCCCC",
      cursorborderradius: "6px"
    });

    if($("#elm1").length > 0){
      tinymce.init({
        selector: "textarea#elm1",
        theme: "modern",
        height:300,
        plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons", 
        style_formats: [
        {title: 'Bold text', inline: 'b'},
        {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
        {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
        {title: 'Example 1', inline: 'span', classes: 'example1'},
        {title: 'Example 2', inline: 'span', classes: 'example2'},
        {title: 'Table styles'},
        {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
        ]
      });    
}


// You can remove the code from here in production . The following will help only for demo version and used to toggle different layouts
    // fixed topNavBar
    $('#topNav').on('change',function (e) {
      e.preventDefault();
      if($(this).is(":checked")) {
        $("body").removeClass();
        $('body').addClass('fixed-top-navigation');
      }
      else {
        $('body').removeClass('fixed-top-navigation'); 
      }
      
    });

    // leftRightSidebar
    $('#leftRightSidebar').on('change',function (e) {
      e.preventDefault();
      if($(this).is(":checked")) {
        $("body").removeClass();
        $('body').addClass('left-right-sidebar-enabled');
      }
      else {
        $('body').removeClass('left-right-sidebar-enabled'); 
      }
      
    });

    // collapsedSidebar
    $('#collapsedSidebar').on('change',function (e) {
      e.preventDefault();
      if($(this).is(":checked")) {
        $("body").removeClass();
        $('body').addClass('mini-bar');
      }
      else {
        $('body').removeClass('mini-bar'); 
      }
      
    });

    // horizontalMenu
    $('#horizontalMenu').on('change',function (e) {
      e.preventDefault();
      if($(this).is(":checked")) {
        $("body").removeClass();
        $('body').addClass('top-navigation');
      }
      else {
        $('body').removeClass('top-navigation'); 
      }
      
    });

    // Left sidebar lightVersion
    $('#leftLightVersion').on('change',function (e) {
      e.preventDefault();
      if($(this).is(":checked")) {
        $('.mini-bar').addClass('light-version');
        $('.left-sidebar').addClass('light-version');
      }
      else {
        $('.right-sidebar').removeClass('light-version-right');
        $('.mini-bar').removeClass('light-version');
      }
      
    });

    // Right sidebar lightVersion
    $('#rightLightVersion').on('change',function (e) {
      e.preventDefault();
      if($(this).is(":checked")) {
        $('.right-sidebar').removeClass('light-version');
      }
      else {
        $('.right-sidebar').addClass('light-version');
      }
      
    });


});