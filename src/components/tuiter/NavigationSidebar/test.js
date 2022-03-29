/*
   $(".list-group a").on("click", function(){

    $(".list-group a").removeclassName("active");
    $(this).addclassName("active");
 });
  works for those with link href
 $(document).ready(function() {
     currentPage();
 });
 function currentPage() {
      path = xxx.html, which is where we are now
     const path = $(location).attr('href').split('/').slice(-1).join('');
      href = the reference written on the button
     $(".list-group a").each(function () {
         const href = $(this).attr('href');
         if(href && href.includes(path)){
             $(this).addclassName("active");
         };
     });
 };
 */