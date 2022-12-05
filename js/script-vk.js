$(document).ready(function () {
  // Plan details steps
  $(".mobile-menu-btn").click(function () {
    $(this).toggleClass("active");
    $(".top-menu").toggleClass("active");
    
  });
  $(".top-menu a").click(function () {
    
    $(".top-menu").removeClass("active");
    
  });
    //  number animation
  // $(".count").each(function () {
  //   $(this)
  //     .prop("Counter", 0)
  //     .animate(
  //       {
  //         Counter: $(this).text(),
  //       },
  //       {
  //         duration: 4000,
  //         easing: "swing",
  //         step: function (now) {
  //           now = Number(Math.ceil(now)).toLocaleString('en');
  //                                 $(this).text(now);
  //         },
  //       }
  //     );
  // });

  //
});

 

