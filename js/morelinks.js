
fetch('https://dsclinks.herokuapp.com/' ,{
            })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
        var posts = data.data.length;
        let output = '';
        for(i=0;i<posts;i++){
            output+=`<div class="image">
            <a href="${data.data[i].url}">
            <img src="${data.data[i].media_url}" alt="">
            </a>
            <div class="text">
            ${data.data[i].caption}
            </div>
            </div>`
        }
        document.getElementById("links").innerHTML = output;  
    })
// var raw = "{\n	\"Name\": \"H\",\n	\"Phone_number\": \"9876543210\",\n	\"Total_amount\": \"1000\",\n	\"Paid_amount\": \"425\",\n	\"Date\": \"2020-5-23\",\n	\"Time\": \"10:0:0\",\n	\"Examination\": \"FALSE\"\n}";

//         var requestOptions = {
//           method: 'POST',
//           body: raw
//         };
        
//         fetch("https://linksinstagram.herokuapp.com/", requestOptions)
//           .then(response => response.text())
//           .then(result => console.log(result))
//           .catch(error => console.log('error', error));




$(document).ready(function () {

    checkDark();

    $('#dark-light-toggle').click(function(){
        toggleDark();
        checkDark();
    })

    // Scroll Clicks
    $("#down-arrow").click(function () {
        $('html, body').animate({
            scrollTop: $("#our-work-scroll").offset().top
        }, 900);
    })

    // Icons Expanders
    $('#board-expander').click(function(){
        if(!$('#board').hasClass('icons-expanded')){
            $('#board').addClass('icons-expanded');
            $('#board-expander').children().children().text('Show Less');
        }
        else{
            $('#board').removeClass('icons-expanded');
            $('#board-expander').children().children().text('Show All');
        }
        $('html, body').animate({
            scrollTop: $("#board").offset().top - 300
        }, 300);
    })

    $('#github-repo-expander').click(function(){
        if(!$('#github-repos').hasClass('icons-expanded')){
            $('#github-repos').addClass('icons-expanded');
            $('#github-repo-expander').children().children().text('Show Less');
        }
        else{
            $('#github-repos').removeClass('icons-expanded');
            $('#github-repo-expander').children().children().text('Show All');
        }
        // $('html, body').animate({
        //     scrollTop: $("#github-repo").offset().top - 300
        // }, 300);
    })

    // Close Menu
    $('#menu-close').click(function () {
        $('.main-menu').fadeOut(100);
    })

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 0) {
            if (!$('.navbar').hasClass('navbar-scrolled')) {
                $('.navbar').addClass('navbar-scrolled');
            }
        } else {
            if ($('.navbar').hasClass('navbar-scrolled')) {
                $('.navbar').removeClass('navbar-scrolled');
            }
        }
    });
})

var toggleDark = function(){
    if(!$('body').hasClass('dark')){
        localStorage.setItem('dark',true);
    }
    else{
        localStorage.setItem('dark',false);
    }
}

var checkDark = function (){

    var dark = localStorage.getItem('dark');

    if(dark==='true'){
        $('body').addClass('dark');
        $('.dark-light-toggle').children().text('I want light mode');
    }
    else{
        $('body').removeClass('dark');
        $('.dark-light-toggle').children().text('I want dark mode');
    }

}
