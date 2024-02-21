$(function(){
    $(".nav-genre").click(function(){$(".genre-dropdowns").slideToggle(2000);});
    $(".nav-director").click(function(){$(".director-dropdowns").slideToggle(2000);});
    $(".nav-cast").click(function(){$(".cast-dropdowns").slideToggle(2000);});
    $(".nav-count").click(function(){$(".count-dropdowns").slideToggle(2000);});
    let count = 0, per = 0;
    let increase = setInterval(animate,50);
    function animate() {
        if(count >=100 && per >= 100){
            clearInterval(increase);
            $('#notice').text("Complete");
            $('.wrp').slideUp(2000);

        }else{
            count = count + 2;
            per = per + 2;
            $('#progress-bar').width(`${per}%`);
            $('#progress-counter').text(`${count}%`);
        }
    }  
});