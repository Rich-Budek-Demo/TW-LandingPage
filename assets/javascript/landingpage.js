// landing page javascript

function fillInAccountTile( userType ) {
    function text_all(){
        var outStr = ""

        console.log("all output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("Account - all")
        h1Tag.addClass("tile-text-heading")
        p1Tag = $("<p>")
        p1Tag.append("Teachers will see:")
        p1Tag.addClass("tile-text-sections")
        p2Tag = $("<p>")
        p2Tag.append("- classes, students, curriculum, pd materials")
        p3Tag = $("<p>")
        p3Tag.append("&nbsp;")
        p4Tag = $("<p>")
        p4Tag.append("Students will see:")
        p4Tag.addClass("tile-text-sections")
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
        h1Tag.addClass("tile-text-heading")
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
        p1Tag.addClass("tile-text-sections")
        p1Tag.attr("style", "margin-top: 0px; ")
        p2Tag = $("<p>")
        p2Tag.append("ADMIN REPORTS")
        p2Tag.addClass("tile-text-sections")
        p2Tag.attr("style", "margin-top: 15px;")

        p3Tag = $("<p>")
        p3Tag.append("licensing")
        p3Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p4Tag = $("<p>")
        p4Tag.append("student usage")
        p4Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p5Tag = $("<p>")
        p5Tag.append("logins")
        p5Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p6Tag = $("<p>")
        p6Tag.append("IOT usage")
        p6Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p7Tag = $("<p>")
        p7Tag.append("AI / ML usage")
        p7Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p8Tag = $("<p>")
        p8Tag.append("AWS model usage")
        p8Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)
        divCol1.append(p6Tag)
        divCol1.append(p7Tag)
        divCol1.append(p8Tag)


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
        h1Tag.addClass("tile-text-heading")
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
        p1Tag.addClass("tile-text-sections")
        p2Tag = $("<p>")
        p2Tag.append("STUDENTS")
        p2Tag.addClass("tile-text-sections")
        p2Tag.attr("style", "margin-top: 15px;")

        p3Tag = $("<p>")
        p3Tag.append("status")
        p3Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p4Tag = $("<p>")
        p4Tag.append("message")
        p4Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p5Tag = $("<p>")
        p5Tag.append("send link")
        p5Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p6Tag = $("<p>")
        p6Tag.append("send file")
        p6Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p7Tag = $("<p>")
        p7Tag.append("upload program")
        p7Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)
        divCol1.append(p6Tag)
        divCol1.append(p7Tag)

        p8Tag = $("<p>")
        p8Tag.append("CURRICULUM")
        p8Tag.addClass("tile-text-sections")
        p9Tag = $("<p>")
        p9Tag.append("RESOURCES")
        p9Tag.addClass("tile-text-sections")
        p9Tag.attr("style", "margin-top: 15px;")
        p10Tag = $("<p>")
        p10Tag.append("PD materials")
        p10Tag.attr("style", "padding-left: 30px;")
        p11Tag = $("<p>")
        p11Tag.append("REPORTS")
        p11Tag.addClass("tile-text-sections")
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
        h1Tag.addClass("tile-text-heading")

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
        p4Tag.attr("style", "margin-bottom: 0px;")
        p5Tag = $("<p>")
        p5Tag.append("- make pretty code")
        p5Tag.attr("style", "padding-left: 20px; margin-bottom: 0px;")
        p6Tag = $("<p>")
        p6Tag.append("- picture w/ border")
        p6Tag.attr("style", "padding-left: 20px; margin-bottom: 0px;")
        p7Tag = $("<p>")
        p7Tag.append("- add comments")
        p7Tag.attr("style", "padding-left: 20px; margin-bottom: 0px;")
        p8Tag = $("<p>")
        p8Tag.append("- simulate to mpeg")
        p8Tag.attr("style", "padding-left: 20px; margin-bottom: 0px;")
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



function fillInCommunityTile( userType ) {
    function text_all(){
        var outStr = ""

        console.log("all output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("Community - all")
        h1Tag.addClass("tile-text-heading")
        p1Tag = $("<p>")
        p1Tag.append("Teachers will see:")
        p1Tag.addClass("tile-text-sections")
        p2Tag = $("<p>")
        p2Tag.append("- project ideas, blogs, forum, <br>- TinkRpedia, challenges for entire project")
        p3Tag = $("<p>")
        p3Tag.append("&nbsp;")
        p4Tag = $("<p>")
        p4Tag.append("Students will see:")
        p4Tag.addClass("tile-text-sections")
        p5Tag = $("<p>")
        p5Tag.append("- social media, 3D models, Code Sharing, Contests")
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
        h1Tag.append("Admin Community")
        h1Tag.addClass("tile-text-heading")
        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        p1Tag = $("<p>")
        p1Tag.append("TINKRPEDIA")
        p1Tag.addClass("tile-text-sections")
        p2Tag = $("<p>")
        p2Tag.append("edit pages")
        p2Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p3Tag = $("<p>")
        p3Tag.append("FORUM / BLOGS")
        p3Tag.addClass("tile-text-sections")
        p3Tag.attr("style", "margin-top: 15px;")
        p4Tag = $("<p>")
        p4Tag.append("setup users")
        p4Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p5Tag = $("<p>")
        p5Tag.append("moderate content")
        p5Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p6Tag = $("<p>")
        p6Tag.append("SOCIAL MEDIA")
        p6Tag.addClass("tile-text-sections")
        p6Tag.attr("style", "margin-top: 15px;")
        p7Tag = $("<p>")
        p7Tag.append("add links to TW platform")
        p7Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p8Tag = $("<p>")
        p8Tag.append("push to social media")
        p8Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)
        divCol1.append(p6Tag)
        divCol1.append(p7Tag)
        divCol1.append(p8Tag)


        divRow.append(divCol1)

        spanTag.append(h1Tag)
        spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        return outStr
    }

    function text_teacher(){
        var outStr = ""

        console.log("teacher output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("Teacher Community")
        h1Tag.addClass("tile-text-heading")
        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        a1Tag = $("<a>")
        a1Tag.attr("href", "http://www.tinkrpedia.com/")
        a1Tag.addClass("tile-text-sections")
        a1Tag.attr("style", "padding-left: 0px; margin-top: 0px; margin-bottom: 0px;")
        p1Tag = $("<p>")
        p1Tag.append("TinkRpedia")
        p1Tag.addClass("tile-text-sections")
        p1Tag.attr("style", "padding-left: 10px; margin-top: 0px; margin-bottom: 0px;")
        a1Tag.append(p1Tag)

        p2Tag = $("<p>")
        p2Tag.append("PROJECT IDEAS")
        p2Tag.addClass("tile-text-sections")
        p2Tag.attr("style", "margin-top: 15px;")
        p3Tag = $("<p>")
        p3Tag.append("TEACHER FORUM / BLOG")
        p3Tag.addClass("tile-text-sections")
        p3Tag.attr("style", "margin-top: 15px;")

        p4Tag = $("<p>")
        p4Tag.append("SOCIAL MEDIA")
        p4Tag.addClass("tile-text-sections")
        p4Tag.attr("style", "padding-top: 15px;")
        p5Tag = $("<p>")
        p5Tag.append("YouTube")
        p5Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p6Tag = $("<p>")
        p6Tag.append("Instagram")
        p6Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p7Tag = $("<p>")
        p7Tag.append("Tik-Tok")
        p7Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p8Tag = $("<p>")
        p8Tag.append("share w/ students")
        p8Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p9Tag = $("<p>")
        p9Tag.append("permissions for students")
        p9Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")

        divCol1.append(a1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)
        divCol1.append(p6Tag)
        divCol1.append(p7Tag)
        divCol1.append(p8Tag)
        divCol1.append(p9Tag)

        p100Tag = $("<p>")
        p100Tag.append("3D MODELS")
        p100Tag.addClass("tile-text-sections")
        p100Tag.attr("style", "padding-left: 0px; ")
        p101Tag = $("<p>")
        p101Tag.append("view from community")
        p101Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p102Tag = $("<p>")
        p102Tag.append("share w/ students")
        p102Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")

        p103Tag = $("<p>")
        p103Tag.append("PROJECT COLLABORATION")
        p103Tag.addClass("tile-text-sections")
        p103Tag.attr("style", "padding-top: 15px; padding-left: 0px;")
        p104Tag = $("<p>")
        p104Tag.append("enable code sharing")
        p104Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p105Tag = $("<p>")
        p105Tag.append("enable model sharing")
        p105Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p106Tag = $("<p>")
        p106Tag.append("enable project linking")
        p106Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")

        p107Tag = $("<p>")
        p107Tag.append("CONTESTS")
        p107Tag.addClass("tile-text-sections")
        p107Tag.attr("style", "padding-top: 15px;")
        p108Tag = $("<p>")
        p108Tag.append("enable contests")
        p108Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")

        divCol2.append(p100Tag)
        divCol2.append(p101Tag)
        divCol2.append(p102Tag)
        divCol2.append(p103Tag)
        divCol2.append(p104Tag)
        divCol2.append(p105Tag)
        divCol2.append(p106Tag)
        divCol2.append(p107Tag)
        divCol2.append(p108Tag)
        divRow.append(divCol1)
        divRow.append(divCol2)

        spanTag.append(h1Tag)
        spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        return outStr
    }

    function text_student(){
        var outStr = ""

        console.log("student output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")
        h1Tag = $("<h1>")
        h1Tag.append("Student Community")
        h1Tag.addClass("tile-text-heading")

        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        p1Tag = $("<p>")
        p1Tag.append("SOCIAL MEDIA")
        p1Tag.addClass("tile-text-sections")
        p2Tag = $("<p>")
        p2Tag.append("YouTube")
        p2Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p3Tag = $("<p>")
        p3Tag.append("Instagram")
        p3Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p4Tag = $("<p>")
        p4Tag.append("Tik-Tok")
        p4Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")

        p5Tag = $("<p>")
        p5Tag.append("3D MODELS")
        p5Tag.addClass("tile-text-sections")
        p5Tag.attr("style", "padding-top: 15px;")
        p6Tag = $("<p>")
        p6Tag.append("required")
        p6Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p7Tag = $("<p>")
        p7Tag.append("accessories")
        p7Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")

        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)
        divCol1.append(p6Tag)
        divCol1.append(p7Tag)

        p8Tag = $("<p>")
        p8Tag.append("PROJECT COLLABORATION")
        p8Tag.addClass("tile-text-sections")
        p9Tag = $("<p>")
        p9Tag.append("code sharing")
        p9Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p10Tag = $("<p>")
        p10Tag.append("model sharing")
        p10Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")
        p11Tag = $("<p>")
        p11Tag.append("link projects")
        p11Tag.attr("style", "padding-left: 30px; margin-bottom: 0px")

        p12Tag = $("<p>")
        p12Tag.append("CONTESTS")
        p12Tag.addClass("tile-text-sections")
        p12Tag.attr("style", "padding-top: 15px;")
        divCol2.append(p8Tag)
        divCol2.append(p9Tag)
        divCol2.append(p10Tag)
        divCol2.append(p11Tag)
        divCol2.append(p12Tag)

        divRow.append(divCol1)
        divRow.append(divCol2)

        spanTag.append(h1Tag)
        spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        return outStr
    }

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

    $("#tile-community").append(tileStr)
}  //fill In Community Tile



function fillInConnectivityTile( userType ) {
    function text_all(){
        var outStr = ""

        console.log("all output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("Connectivity - all")
        h1Tag.addClass("tile-text-heading")
        p1Tag = $("<p>")
        p1Tag.append("Teachers will see:")
        p1Tag.addClass("tile-text-sections")
        p2Tag = $("<p>")
        p2Tag.append("- real-time monitoring,  <br>- Peer to Peer, VR Models")
        p3Tag = $("<p>")
        p3Tag.append("&nbsp;")
        p4Tag = $("<p>")
        p4Tag.append("Students will see:")
        p4Tag.addClass("tile-text-sections")
        p5Tag = $("<p>")
        p5Tag.append("- web page, ai/training models")
        p6Tag = $("<p>")
        p6Tag.append("- ")

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
        h1Tag.append("Admin Connectivity")
        h1Tag.addClass("tile-text-heading")
        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        p1Tag = $("<p>")
        p1Tag.append("REAL TIME MONITORING")
        p1Tag.addClass("tile-text-sections")
        p2Tag = $("<p>")
        p2Tag.append("setup database")
        p2Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p3Tag = $("<p>")
        p3Tag.append("setup access")
        p3Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p4Tag = $("<p>")
        p4Tag.append("IOT WEB SERVER SETUP")
        p4Tag.addClass("tile-text-sections")
        p4Tag.attr("style", "margin-top: 15px;")
        p5Tag = $("<p>")
        p5Tag.append("setup projects")
        p5Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p6Tag = $("<p>")
        p6Tag.append("setup users")
        p6Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p7Tag = $("<p>")
        p7Tag.append("AI / ML")
        p7Tag.addClass("tile-text-sections")
        p7Tag.attr("style", "margin-top: 15px;")
        p8Tag = $("<p>")
        p8Tag.append("setup local models")
        p8Tag.attr("style", "padding-left: 30px;  margin-bottom: 0px;")
        p9Tag = $("<p>")
        p9Tag.append("links to AWS models")
        p9Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p10Tag = $("<p>")
        p10Tag.append("train models")
        p10Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)
        divCol1.append(p6Tag)
        divCol1.append(p7Tag)
        divCol1.append(p8Tag)
        divCol1.append(p9Tag)
        divCol1.append(p10Tag)

        //right hand column
        p100Tag = $("<p>")
        p100Tag.append("DATA SCIENCE")
        p100Tag.addClass("tile-text-sections")
        p101Tag = $("<p>")
        p101Tag.append("setup apps to use")
        p101Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p102Tag = $("<p>")
        p102Tag.append("upload templates")
        p102Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p103Tag = $("<p>")
        p103Tag.append("setup API links")
        p103Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p104Tag = $("<p>")
        p104Tag.append("VR MODELS")
        p104Tag.addClass("tile-text-sections")
        p104Tag.attr("style", "margin-top: 15px;")
        p105Tag = $("<p>")
        p105Tag.append("upload model")
        p105Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p106Tag = $("<p>")
        p106Tag.append("setup database")
        p106Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        divCol2.append(p100Tag)
        divCol2.append(p101Tag)
        divCol2.append(p102Tag)
        divCol2.append(p103Tag)
        divCol2.append(p104Tag)
        divCol2.append(p105Tag)
        divCol2.append(p106Tag)


        divRow.append(divCol1)
        divRow.append(divCol2)

        spanTag.append(h1Tag)
        spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        return outStr
    }

    function text_teacher(){
        var outStr = ""

        console.log("teacher output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("Teacher Connectivity")
        h1Tag.addClass("tile-text-heading")
        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        p1Tag = $("<p>")
        p1Tag.append("REAL TIME MONITORING")
        p1Tag.addClass("tile-text-sections")
        p2Tag = $("<p>")
        p2Tag.append("view status")
        p2Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p3Tag = $("<p>")
        p3Tag.append("IOT WEB SERVER SETUP")
        p3Tag.addClass("tile-text-sections")
        p3Tag.attr("style", "margin-top: 15px;")
        p4Tag = $("<p>")
        p4Tag.append("setup classes")
        p4Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p5Tag = $("<p>")
        p5Tag.append("edit web page")
        p5Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p6Tag = $("<p>")
        p6Tag.append("AI / ML")
        p6Tag.addClass("tile-text-sections")
        p6Tag.attr("style", "margin-top: 15px;")
        p7Tag = $("<p>")
        p7Tag.append("distribute models")
        p7Tag.attr("style", "padding-left: 30px;  margin-bottom: 0px;")
        p8Tag = $("<p>")
        p8Tag.append("view AWS models")
        p8Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p9Tag = $("<p>")
        p9Tag.append("train models")
        p9Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p10Tag = $("<p>")
        p10Tag.append("link classes / students")
        p10Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)
        divCol1.append(p6Tag)
        divCol1.append(p7Tag)
        divCol1.append(p8Tag)
        divCol1.append(p9Tag)
        divCol1.append(p10Tag)

        //right hand column
        p100Tag = $("<p>")
        p100Tag.append("DATA SCIENCE")
        p100Tag.addClass("tile-text-sections")
        p101Tag = $("<p>")
        p101Tag.append("run apps")
        p101Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p102Tag = $("<p>")
        p102Tag.append("configure API's")
        p102Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p103Tag = $("<p>")
        p103Tag.append("PEER TO PEER")
        p103Tag.addClass("tile-text-sections")
        p103Tag.attr("style", "margin-top: 15px;")
        p104Tag = $("<p>")
        p104Tag.append("view status")
        p104Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p105Tag = $("<p>")
        p105Tag.append("edit connections")
        p105Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p106Tag = $("<p>")
        p106Tag.append("VR MODELS")
        p106Tag.addClass("tile-text-sections")
        p106Tag.attr("style", "margin-top: 15px;")
        p107Tag = $("<p>")
        p107Tag.append("upload model")
        p107Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p108Tag = $("<p>")
        p108Tag.append("setup database")
        p108Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        divCol2.append(p100Tag)
        divCol2.append(p101Tag)
        divCol2.append(p102Tag)
        divCol2.append(p103Tag)
        divCol2.append(p104Tag)
        divCol2.append(p105Tag)
        divCol2.append(p106Tag)
        divCol2.append(p107Tag)
        divCol2.append(p108Tag)


        divRow.append(divCol1)
        divRow.append(divCol2)

        spanTag.append(h1Tag)
        spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        return outStr
    }

    function text_student(){
        var outStr = ""

        console.log("student output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")
        h1Tag = $("<h1>")
        h1Tag.append("Student Connectivity")
        h1Tag.addClass("tile-text-heading")

        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")


        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        p1Tag = $("<p>")
        p1Tag.append("REAL TIME MONITORING")
        p1Tag.addClass("tile-text-sections")
        p2Tag = $("<p>")
        p2Tag.append("view class status")
        p2Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p3Tag = $("<p>")
        p3Tag.append("IOT WEB SERVER")
        p3Tag.addClass("tile-text-sections")
        p3Tag.attr("style", "margin-top: 15px;")
        p4Tag = $("<p>")
        p4Tag.append("view class web page")
        p4Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p5Tag = $("<p>")
        p5Tag.append("AI / ML")
        p5Tag.addClass("tile-text-sections")
        p5Tag.attr("style", "margin-top: 15px;")
        p6Tag = $("<p>")
        p6Tag.append("connect to model")
        p6Tag.attr("style", "padding-left: 30px;  margin-bottom: 0px;")
        p7Tag = $("<p>")
        p7Tag.append("train model locally")
        p7Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p8Tag = $("<p>")
        p8Tag.append("train remote model")
        p8Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)
        divCol1.append(p6Tag)
        divCol1.append(p7Tag)
        divCol1.append(p8Tag)

        //right hand column
        p100Tag = $("<p>")
        p100Tag.append("DATA SCIENCE")
        p100Tag.addClass("tile-text-sections")
        p101Tag = $("<p>")
        p101Tag.append("collect data")
        p101Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p102Tag = $("<p>")
        p102Tag.append("view collected data")
        p102Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p103Tag = $("<p>")
        p103Tag.append("analyze data")
        p103Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p104Tag = $("<p>")
        p104Tag.append("PEER TO PEER")
        p104Tag.addClass("tile-text-sections")
        p104Tag.attr("style", "margin-top: 15px;")
        p105Tag = $("<p>")
        p105Tag.append("connect project")
        p105Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p106Tag = $("<p>")
        p106Tag.append("VR MODELS")
        p106Tag.addClass("tile-text-sections")
        p106Tag.attr("style", "margin-top: 15px;")
        p107Tag = $("<p>")
        p107Tag.append("view model")
        p107Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p108Tag = $("<p>")
        p108Tag.append("connect to model")
        p108Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        divCol2.append(p100Tag)
        divCol2.append(p101Tag)
        divCol2.append(p102Tag)
        divCol2.append(p103Tag)
        divCol2.append(p104Tag)
        divCol2.append(p105Tag)
        divCol2.append(p106Tag)
        divCol2.append(p107Tag)
        divCol2.append(p108Tag)


        divRow.append(divCol1)
        divRow.append(divCol2)

        spanTag.append(h1Tag)
        spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
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

    $("#tile-connectivity").append(tileStr)
}  //fill In Connectivity Tile


function fillInSupportTile( userType ) {
    function text_all(){
        var outStr = ""

        console.log("all output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("Support - all")
        h1Tag.addClass("tile-text-heading")
        p1Tag = $("<p>")
        p1Tag.append("Teachers will see:")
        p2Tag = $("<p>")
        p2Tag.append("- creating a support ticket, searching support tickets")
        p3Tag = $("<p>")
        p3Tag.append("&nbsp;")
        p4Tag = $("<p>")
        p4Tag.append("Students will see:")
        p5Tag = $("<p>")
        p5Tag.append("- on-line help")
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

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("Admin Support")
        h1Tag.addClass("tile-text-heading")
        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        p1Tag = $("<p>")
        p1Tag.append("ON-LINE MANUAL")
        p1Tag.attr("style", "padding-left: 10px; margin-top: 15px; margin-bottom: 0px;")
        p2Tag = $("<p>")
        p2Tag.append("edit content")
        p2Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p3Tag = $("<p>")
        p3Tag.append("FAQ")
        p3Tag.attr("style", "padding-left: 10px; margin-top: 15px; margin-bottom: 0px;")
        p4Tag = $("<p>")
        p4Tag.append("edit FAQ")
        p4Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p5Tag = $("<p>")
        p5Tag.append("configure search terms")
        p5Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p6Tag = $("<p>")
        p6Tag.append("SUPPORT TICKETS")
        p6Tag.attr("style", "padding-left: 10px; margin-top: 0px; margin-bottom: 0px;")
        p7Tag = $("<p>")
        p7Tag.append("link ticket to org")
        p7Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p8Tag = $("<p>")
        p8Tag.append("convert to FAQ")
        p8Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p9Tag = $("<p>")
        p9Tag.append("quick search")
        p9Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")


        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)
        divCol1.append(p6Tag)
        divCol1.append(p7Tag)
        divCol1.append(p8Tag)
        divCol1.append(p9Tag)


        p100Tag = $("<p>")
        p100Tag.append("CHAT")
        p100Tag.attr("style", "padding-left: 10px; margin-top: 0px; margin-bottom: 0px;")
        p101Tag = $("<p>")
        p101Tag.append("configure chat users")
        p101Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p102Tag = $("<p>")
        p102Tag.append("chat settings")
        p102Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p103Tag = $("<p>")
        p103Tag.append("SEARCH")
        p103Tag.attr("style", "padding-left: 10px; margin-top: 15px; margin-bottom: 0px;")
        p104Tag = $("<p>")
        p104Tag.append("configure search terms")
        p104Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p105Tag = $("<p>")
        p105Tag.append("optimize search")
        p105Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        divCol2.append(p100Tag)
        divCol2.append(p101Tag)
        divCol2.append(p102Tag)
        divCol2.append(p103Tag)
        divCol2.append(p104Tag)
        divCol2.append(p105Tag)


        divRow.append(divCol1)
        divRow.append(divCol2)

        spanTag.append(h1Tag)
        spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        return outStr
    }

    function text_teacher(){
        var outStr = ""

        console.log("teacher output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("Teacher Support")
        h1Tag.addClass("tile-text-heading")
        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")


        p1Tag = $("<p>")
        p1Tag.append("ON-LINE MANUAL")
        p1Tag.attr("style", "padding-left: 10px; margin-top: 0px; margin-bottom: 0px;")

        p2Tag = $("<p>")
        p2Tag.append("FAQ")
        p2Tag.attr("style", "padding-left: 10px; margin-top: 15px; margin-bottom: 0px;")

        p3Tag = $("<p>")
        p3Tag.append("SUPPORT TICKETS")
        p3Tag.attr("style", "padding-left: 10px; margin-top: 15px; margin-bottom: 0px;")
        p4Tag = $("<p>")
        p4Tag.append("create new ticket")
        p4Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p5Tag = $("<p>")
        p5Tag.append("view status")
        p5Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p6Tag = $("<p>")
        p6Tag.append("search tickets")
        p6Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)
        divCol1.append(p6Tag)


        p100Tag = $("<p>")
        p100Tag.append("CHAT")
        p100Tag.attr("style", "padding-left: 10px; margin-top: 0px; margin-bottom: 0px;")
        p101Tag = $("<p>")
        p101Tag.append("start chat")
        p101Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
        p102Tag = $("<p>")
        p102Tag.append("view chat logs")
        p102Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p103Tag = $("<p>")
        p103Tag.append("SEARCH ENTIRE SITE")
        p103Tag.attr("style", "padding-left: 10px; margin-top: 15px; margin-bottom: 0px;")
        inp104Tag = $("<input>")
        inp104Tag.attr("type", "text")
        inp104Tag.attr("style", "padding-left: 10px; max-width: 100px; margin-left: 10px; margin-right: 10px; margin-bottom: 0px; padding-right: 10px;")
        inp105Tag = $("<input>")
        inp105Tag.attr("type", "button")
        inp105Tag.attr("value", "search")
        inp105Tag.attr("style", "padding-left: 10px;  margin-left: 10px; margin-right: 10px; margin-bottom: 0px; padding-right: 10px;")

        divCol2.append(p100Tag)
        divCol2.append(p101Tag)
        divCol2.append(p102Tag)
        divCol2.append(p103Tag)
        divCol2.append(inp104Tag)
        divCol2.append(inp105Tag)


        divRow.append(divCol1)
        divRow.append(divCol2)

        spanTag.append(h1Tag)
        spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        return outStr
    }

    function text_student(){
        var outStr = ""

        console.log("student output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")
        h1Tag = $("<h1>")
        h1Tag.append("Student Support")
        h1Tag.addClass("tile-text-heading")

        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")


        p1Tag = $("<p>")
        p1Tag.append("ON-LINE MANUAL")
        p1Tag.attr("style", "padding-left: 10px; margin-top: 0px; margin-bottom: 0px;")

        p2Tag = $("<p>")
        p2Tag.append("FAQ")
        p2Tag.attr("style", "padding-left: 10px; margin-top: 15px; margin-bottom: 0px;")

        p3Tag = $("<p>")
        p3Tag.append("SEARCH ENTIRE SITE")
        p3Tag.attr("style", "padding-left: 10px; margin-top: 15px; margin-bottom: 0px;")
        inp4Tag = $("<input>")
        inp4Tag.attr("type", "text")
        inp4Tag.attr("style", "padding-left: 10px; max-width: 100px; margin-left: 10px; margin-right: 10px; margin-bottom: 0px; padding-right: 10px;")
        inp5Tag = $("<input>")
        inp5Tag.attr("type", "button")
        inp5Tag.attr("value", "search")
        inp5Tag.attr("style", "padding-left: 10px;  margin-left: 10px; margin-right: 10px; margin-bottom: 0px; padding-right: 10px;")


        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(inp4Tag)
        divCol1.append(inp5Tag)


        p100Tag = $("<p>")
        p100Tag.append("")
        p100Tag.attr("style", "padding-left: 10px; margin-top: 0px; margin-bottom: 0px;")

        divCol2.append(p100Tag)


        divRow.append(divCol1)
        divRow.append(divCol2)

        spanTag.append(h1Tag)
        spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
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

    $("#tile-support").append(tileStr)
}  //fill In Support Tile



function fillInWhatsNewTile( userType ) {
    function text_all(){
        var outStr = ""

        console.log("all output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("What's New - all")
        h1Tag.addClass("tile-text-heading")
        p1Tag = $("<p>")
        p1Tag.append("Teachers will see:")
        p2Tag = $("<p>")
        p2Tag.append("- what's new for them, like dashboard")
        p3Tag = $("<p>")
        p3Tag.append("&nbsp;")
        p4Tag = $("<p>")
        p4Tag.append("Students will see:")
        p5Tag = $("<p>")
        p5Tag.append("- what's new like block changes")
        p6Tag = $("<p>")
        p6Tag.append("- ")

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
        h1Tag.append("What's New")
        h1Tag.addClass("tile-text-heading")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        p1Tag = $("<p>")
        p1Tag.append("<b>Welcome to the new TinkRworks Platform !</b>")
        p1Tag.attr("style", "text-align: center; padding-left: 10px; margin-bottom: 0px; margin-top: 0px;")

        p2Tag = $("<p>")
        p2Tag.append("The icon on the tile only shows up if there is some- thing new.")
        p2Tag.attr("style", "padding-left: 10px; margin-bottom: 0px; margin-top: 15px;")
        p3Tag = $("<p>")
        p3Tag.append("You can get to the admin panel thru the account tile.")
        p3Tag.attr("style", "padding-left: 10px; margin-bottom: 0px;")
 
        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)


        divRow.append(divCol1)

        //spanTag.append(h1Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        return outStr
    }

    function text_teacher(){
        var outStr = ""

        console.log("teacher output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")

        h1Tag = $("<h1>")
        h1Tag.append("What's New")
        h1Tag.addClass("tile-text-heading")
        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        //p1Tag = $("<p>")
        //p1Tag.append("Welcome to the new TinkRworks Platform !")
        //p1Tag.attr("style", "padding-left: 10px; margin-bottom: 0px; margin-top: 0px;")

        p2Tag = $("<p>")
        p2Tag.append("To access your classes (like old dashboard)")
        p2Tag.attr("style", "padding-left: 10px; margin-bottom: 0px; margin-top: 0px;")
        p3Tag = $("<p>")
        p3Tag.append("Select the account tile and then click on classes.")
        p3Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")

        p4Tag = $("<p>")
        p4Tag.append("To begin programing")
        p4Tag.attr("style", "padding-left: 10px; margin-bottom: 0px; margin-top: 15px;")
        p5Tag = $("<p>")
        p5Tag.append("Simply click on the orange circle.")
        p5Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
 
        //divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)
        divCol1.append(p4Tag)
        divCol1.append(p5Tag)
        //divCol1.append(p6Tag)


        divRow.append(divCol1)

        //spanTag.append(h1Tag)
        //spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
        return outStr
    }

    function text_student(){
        var outStr = ""

        console.log("student output")

        spanTag = $("<span>")
        spanTag.attr("style", "text-align:left")


        h1Tag = $("<h1>")
        h1Tag.append("What's New")
        h1Tag.addClass("tile-text-heading")
        p0Tag = $("<p>")
        p0Tag.append("&nbsp;")

        divRow = $("<div>")
        divRow.addClass("row")
        divCol1 = $("<col>")
        divCol1.addClass("col")
        divCol2 = $("<div>")
        divCol2.addClass("col")

        p1Tag = $("<p>")
        p1Tag.append("<b>Welcome to the new TinkRworks Platform !</b>")
        p1Tag.attr("style", "text-align: center; padding-left: 10px; margin-bottom: 0px; margin-top: 0px;")

        p2Tag = $("<p>")
        p2Tag.append("To begin programing :")
        p2Tag.attr("style", "padding-left: 10px; margin-bottom: 0px; margin-top: 15px;")
        p3Tag = $("<p>")
        p3Tag.append("Simply click on the orange circle.")
        p3Tag.attr("style", "padding-left: 30px; margin-bottom: 0px;")
 
        divCol1.append(p1Tag)
        divCol1.append(p2Tag)
        divCol1.append(p3Tag)


        divRow.append(divCol1)

        //spanTag.append(h1Tag)
        //spanTag.append(p0Tag)
        spanTag.append(divRow)
        spanTag.addClass("upside-down2")
        outStr = spanTag
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

    $("#tile-whatsnew").append(tileStr);
}  //fill What's New Tile


function fillInScreenSize(){
    function winSize() {
        outStr = "Inner Width: " + this.innerWidth
        outStr = outStr + "  Inner Height: " + this.innerHeight + "<br/>"
        outStr = outStr + "  Outer Width: " + this.outerWidth
        outStr = outStr + "  Outer Height: " + this.outerHeight + "<br/>"
        outStr = outStr + "  Screen Width: " + window.screen.width;
        outStr = outStr + "  Screen Height: " + window.screen.height + "<br/>"
        outStr = outStr + "  Real width: " + window.screen.width * window.devicePixelRatio;
        outStr = outStr + "  Real height: " + window.screen.height * window.devicePixelRatio  + "<br/>";
        outStr = outStr + "  Pixel ratio: " + window.devicePixelRatio;
        return outStr
    }

    winSizeStr = winSize();
    p1Tag = $("<p>");
    p1Tag.append(winSizeStr);

    p1Tag.attr("style", "padding-left: 10px; margin-bottom: 0px; margin-top: 15px;");
    $("#row-3").append(p1Tag);
}


$(document).ready(function(){
    //start up code
    console.log("starting up");
   
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
    fillInCommunityTile(userType)
    fillInConnectivityTile(userType)
    fillInSupportTile(userType)
    fillInWhatsNewTile(userType)
    fillInScreenSize();
})

