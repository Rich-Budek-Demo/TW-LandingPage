// landing page javascript

function fillInAccountTile( userType ) {
    function text_all(){
        var outStr = ""

        console.log("all output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("Account - all")
        h1Tag.attr("style", "text-align: center")
        p1Tag = $("<p>")
        p1Tag.append("Teachers will see:")
        p2Tag = $("<p>")
        p2Tag.append("- classes, students, curriculum, pd materials")
        p3Tag = $("<p>")
        p3Tag.append("&nbsp;")
        p4Tag = $("<p>")
        p4Tag.append("Students will see:")
        p5Tag = $("<p>")
        p5Tag.append("- messages from teacher, links to websites")
        p6Tag = $("<p>")
        p6Tag.append("- handouts")

        spanTag.append(h1Tag)
        spanTag.append(p1Tag)
        spanTag.append(p2Tag)
        spanTag.append(p3Tag)
        spanTag.append(p4Tag)
        spanTag.append(p5Tag)
        spanTag.append(p6Tag)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        //p2Tag = $("<p>")
        //p2Tag.append("")        
        return outStr
    }

    function text_admin(){
        var outStr = ""

        console.log("admin output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("Admin Account")
        h1Tag.attr("style", "text-align: center")
        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        p1Tag = $("<p>")
        p1Tag.append("ADMIN PANEL")
        p1Tag.attr("style", "padding-left: 10px;")
        p2Tag = $("<p>")
        p2Tag.append("ADMIN REPORTS")
        p2Tag.attr("style", "padding-left: 10px;")

        p3Tag = $("<p>")
        p3Tag.append("- license reports")
        p3Tag.attr("style", "padding-left: 20px;")
        p4Tag = $("<p>")
        p4Tag.append("- student usage report")
        p4Tag.attr("style", "padding-left: 20px;")
        p5Tag = $("<p>")
        p5Tag.append("- logins report")
        p5Tag.attr("style", "padding-left: 20px;")
        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)


        divRow.append(divCol1)

        spanTag.append(h1Tag)
        spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        //p2Tag = $("<p>")
        //p2Tag.append("")        
        return outStr
    }

    function text_teacher(){
        var outStr = ""

        console.log("teacher output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("Teacher Account")
        h1Tag.attr("style", "text-align: center")
        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        p1Tag = $("<p>")
        p1Tag.append("CLASSES")
        p1Tag.attr("style", "padding-left: 10px;")
        p2Tag = $("<p>")
        p2Tag.append("STUDENTS")
        p2Tag.attr("style", "padding-left: 10px;")

        p3Tag = $("<p>")
        p3Tag.append("- status")
        p3Tag.attr("style", "padding-left: 20px;")
        p4Tag = $("<p>")
        p4Tag.append("- message")
        p4Tag.attr("style", "padding-left: 20px;")
        p5Tag = $("<p>")
        p5Tag.append("- send link")
        p5Tag.attr("style", "padding-left: 20px;")
        p6Tag = $("<p>")
        p6Tag.append("- send file")
        p6Tag.attr("style", "padding-left: 20px;")
        p7Tag = $("<p>")
        p7Tag.append("&nbsp;- upload program")
        p7Tag.attr("style", "padding-left: 15px;")
        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)
        divCol1.append(p6Tag)
        divCol1.append(p7Tag)

        p8Tag = $("<p>")
        p8Tag.append("CURRICULUM")
        p9Tag = $("<p>")
        p9Tag.append("RESOURCES")
        p10Tag = $("<p>")
        p10Tag.append("- PD materials")
        p10Tag.attr("style", "padding-left: 20px;")
        p11Tag = $("<p>")
        p11Tag.append("REPORTS")
        divCol2.append(p8Tag)
        divCol2.append(p9Tag)
        divCol2.append(p10Tag)
        divCol2.append(p11Tag)

        divRow.append(divCol1)
        divRow.append(divCol2)

        spanTag.append(h1Tag)
        spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        //p2Tag = $("<p>")
        //p2Tag.append("")        
        return outStr
    }

    function text_student(){
        var outStr = ""

        console.log("student output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")
        h1Tag = $("<h1>")
        h1Tag.append("Student Account")
        h1Tag.attr("style", "text-align: center")

        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        p1Tag = $("<p>")
        p1Tag.append("MESSAGES")
        p1Tag.attr("style", "padding-left: 10px; margin-bottom: 0px;")
        divScroll1 = $("<div>")
        divScroll1.attr("style", "margin-left: 10px; margin-top: 0px; height: 50px; width: 200px; overflow:auto; border: 1px solid #F4F0E9; ")
        p1bTag = $("<p>")
        p1bTag.append("This is where messages from TEACHERS ONLY would appear. Clicking on the link will bring up all messages sent.")
        divScroll1.append(p1bTag)

        p2Tag = $("<p>")
        p2Tag.append("FILES")
        p2Tag.attr("style", "padding-left: 10px; padding-top: 15px; margin-bottom: 0px;")
        divScroll2 = $("<div>")
        divScroll2.attr("style", "margin-left: 10px; margin-top: 0px; height: 50px; width: 200px; overflow:auto; border: 1px solid #F4F0E9; ")
        p2bTag = $("<p>")
        p2bTag.append("RGB colors.pdf")
        divScroll2.append(p2bTag)
        p2cTag = $("<p>")
        p2cTag.append("Note to frequency.pdf")
        divScroll2.append(p2cTag)

        p3Tag = $("<p>")
        p3Tag.append("LINKS")
        p3Tag.attr("style", "padding-left: 10px; padding-top: 15px; margin-bottom: 0px;")
        divScroll3 = $("<div>")
        divScroll3.attr("style", "margin-left: 10px; margin-top: 0px; height: 50px; width: 200px; overflow:auto; border: 1px solid #F4F0E9; ")
        p3bTag = $("<p>")
        p3bTag.append("www.MusicTheory.com")
        divScroll3.append(p3bTag)
        p3cTag = $("<p>")
        p3cTag.append("www.RGBtoHexConvert.com")
        divScroll3.append(p3cTag)

        divCol1.append(p1Tag)
        divCol1.append(divScroll1)

        divCol1.append(p2Tag)
        divCol1.append(divScroll2)

        divCol1.append(p3Tag)
        divCol1.append(divScroll3)

        p4Tag = $("<p>")
        p4Tag.append("DIGITAL PORTFOLIO")
        p5Tag = $("<p>")
        p5Tag.append("- make pretty code")
        p5Tag.attr("style", "padding-left: 20px;")
        p6Tag = $("<p>")
        p6Tag.append("- picture w/ border")
        p6Tag.attr("style", "padding-left: 20px;")
        p7Tag = $("<p>")
        p7Tag.append("- add comments")
        p7Tag.attr("style", "padding-left: 20px;")
        p8Tag = $("<p>")
        p8Tag.append("- simulate to mpeg")
        p8Tag.attr("style", "padding-left: 20px;")
        divCol2.append(p4Tag)
        divCol2.append(p5Tag)
        divCol2.append(p6Tag)
        divCol2.append(p7Tag)
        divCol2.append(p8Tag)

        divRow.append(divCol1)
        divRow.append(divCol2)

        spanTag.append(h1Tag)
        spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        //p2Tag = $("<p>")
        //p2Tag.append("")        
        return outStr
    }

    console.log("will fill in:")
    console.log(userType)

    switch (userType) {
        case "all":
            tileStr = text_all();
            break;
        case "admin":
            tileStr = text_admin();
            break;
        case "teacher":
            tileStr = text_teacher();
            break;
        case "student":
            tileStr = text_student();
            break;
    }

    $("#tile-account").append(tileStr)
}  //fill In Account Tile


$(document).ready(function(){
    //start up code
    console.log("starting up");

    Line1 = $("<p>")
    Line1.append("Appended data")
    $("#tile-whatsnew").append(Line1)
    
    LineFront1 = $("<p>")
    LineFront1.append("What's New")
    //$("#tile-whatsnew-front").append(LineFront1)

    //find out if there are any parameters
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    var userType = urlParams.get('usertype')
    if (userType == null) {
        userType = "all"
    }
    console.log(userType)

    var validType = false
    switch (userType) {
        case "admin":
            validType = true;
            break;
        case "teacher":
            validType = true;
            console.log("matches");
            break;
        case "student":
            validType = true;
            break;
        case "all":
            validType = true;
            break;
        default:
            userType = "all";
            console.log("default match");
            break;
    }

    //fill in the back of the cards correctly
    console.log("before call")
    console.log(userType)
    fillInAccountTile(userType)
})

