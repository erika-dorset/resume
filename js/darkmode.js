$( ".change" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( "nav" ).removeClass( "dark" );
        /* Text */
        $( "#portfolio-link" ).removeClass( "darkPortfolioLink" );
        $( ".nav-link" ).removeClass( "darkNav" );
        $( "#textShadow" ).removeClass( "darkHeading1" );
        $( "#titleShadowPink" ).removeClass( "darkHeading2" );
        $( ".titleShadowYellow" ).removeClass( "darkHeading3" );
        $( ".contactText" ).removeClass( "darkContact" );
        $( "#yellow" ).removeClass( "textToBlack" );
        $( ".carousel-inner, .link-box" ).removeClass( "darkModal" );
        /* Shapes */
        $("#dottedCircle").removeClass("dottedCirlceDark");
        $("#dottedTriangle").removeClass("dottedTriangleDark");
        $("#dottedRect, #dottedRect2").removeClass("dottedRectDark");
        /* Dark Mode button */
        $( ".change" ).attr('src','images/moon.png');
        $( ".changeHand" ).attr('src','images/handwave.png');
        $( ".changeAdobe" ).attr('src','images/adobe.png');
    } else {
        $( "body" ).addClass( "dark" );
        $( "nav" ).addClass( "dark" );
        /* Text */
        $( "#portfolio-link" ).addClass( "darkPortfolioLink" );
        $( ".nav-link" ).addClass( "darkNav" );
        $( "#textShadow" ).addClass( "darkHeading1" );
        $( "#titleShadowPink" ).addClass( "darkHeading2" );
        $( ".titleShadowYellow" ).addClass( "darkHeading3" );
        $( ".contactText" ).addClass( "darkContact" );
        $( "#yellow" ).addClass( "textToBlack" );
        $( ".carousel-inner, .link-box" ).addClass( "darkModal" );
        /* Shapes */
        $("#dottedCircle").addClass("dottedCirlceDark");
        $("#dottedTriangle").addClass("dottedTriangleDark");
        $("#dottedRect, #dottedRect2").addClass("dottedRectDark");
         /* Dark Mode button */
        $( ".change" ).attr('src','images/sunIconWhite.png');
        $( ".changeHand" ).attr('src','images/handwave-white.png');
        $( ".changeAdobe" ).attr('src','images/adobeWhite.png');
    }
});