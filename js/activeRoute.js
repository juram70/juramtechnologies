$(function() {
    let currentRoute = window.location.href;


    $(".navigation li").each(function() {
        let route = $(this).find("a").attr("href");

        // Use `indexOf` to match the route within the full URL
        if (currentRoute.includes(route)) {
            
            $(this).addClass("active");
        }
    });
});
