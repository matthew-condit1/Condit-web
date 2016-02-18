/**
 * Created by mattc on 2/18/2016.
 * */

window.onload=function() {

    var quotes = [
        "<p>“Don't worry if it doesn't work right. If everything did, you’d be out of a job.“</p>  - Moshers Law of Software Engineering",
        "<p>“If you think math is hard, try web design.”</p>  ―Trish Parr",
        "<p>“Websites promote you 24/7: No employee will do that.” </p>― Paul Cookson",
        "<p>“It’s through mistakes that you actually can grow. You have to get bad in order to get good.”</p>  – Paula Scher",
        "<p>“Great web design without functionality is like a sports car with no engine.”</p> ― Paul Cookson",
        "<p>“Things aren't always #000000 and #FFFFFF“</p> -Anonymous",
        "<p>“ Java is to JavaScript what Car is to Carpet. ”</p> -Steven McConnell",
        "<p>“ If debugging is the process of removing software bugs, then programming must be the process of putting them in.”</p>  - Edsger Dijkstra",
        "<p>“ Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration. ”</p>-Stan Kelly-Bootle",
        "<p>“ Linux is only free if your time has no value. ”</p> -Jamie Zawinski"
    ];
    var delay = 5;
    var i = 0;

    function nextQuote() {
        document.getElementById("quotes").innerHTML = quotes[i % 6];
        i++;
        console.log(i);

    }
    nextQuote();

    window.setInterval(nextQuote, delay * 1000);
}

