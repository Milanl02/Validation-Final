var responseDiv=document.body.querySelector(".response");

document.body.querySelector(".butt").addEventListener("click", function () {
    var username = document.body.querySelector(".login").value;
    if (username==="coolStudent123") {
        responseDiv.innerHTML = "";
        webSite();
    }else{
        responseDiv.innerHTML="Wrong User"
    }
})

function webSite() {
    document.body.innerHTML="";
    var list = ["Home", "About", "Interact"];
    var listTwo=[];

    function Nav_creation() {
        var nav = document.createElement("nav");
        createButton(list[0]);
        createButton(list[1]);
        createButton(list[2]);
        document.body.appendChild(nav);

        function createButton(pages) {
            var butt = document.createElement("button");
            butt.innerHTML = pages;
            butt.addEventListener("click", function () {
                navigate(pages);
            })
            nav.appendChild(butt);
        }
    }

    function createText() {
        var text = document.createElement("div");
        text.classList.add("text");
        document.body.appendChild(text);
    }

    function navigate(pages) {
        if (pages === "Home") {
            homePage()
        } else if (pages === "About") {
            aboutPage()
        } else {
            interactPage()
        }
    }

    function homePage() {
        var text = document.body.querySelector(".text");
        text.innerHTML = "";
        var title = document.createElement("h1");
        title.innerHTML = "Home";
        text.appendChild(title);
    }

    function aboutPage() {
        var text = document.body.querySelector(".text");
        text.innerHTML = "";
        var title = document.createElement("h1");
        title.innerHTML = "About";
        var name = document.createElement("h3");
        name.innerHTML = "Milan N Loncarevic";
        text.appendChild(title);
        text.appendChild(name);
    }

    function interactPage() {
        var text = document.body.querySelector(".text");
        text.innerHTML = "";
        var title = document.createElement("h1");
        title.innerHTML = "View Notes";
        text.appendChild(title);
        var note=document.createElement("input");
        note.classList.add("newNote");
        note.placeholder="Note";
        text.appendChild(note);
        var importance=document.createElement("input");
        importance.classList.add("import");
        importance.placeholder="Importance";
        text.appendChild(importance);
        var vapid=document.createElement("div");
        vapid.classList.add("vapid");
        text.appendChild(vapid);
        var submitButton=document.createElement("button");
        text.appendChild(submitButton);
        submitButton.innerHTML="Submit Note";

        submitButton.addEventListener("click", function (){
            var note=document.body.querySelector(".newNote").value
            var importance=document.body.querySelector(".import").value
            if (note.length===1){
                vapid.innerHTML="Your note has to be longer than 1 letter to save. Try again!"
            }else if(isNaN(importance)){
                vapid.innerHTML="The importance must be a numerical value. Try again!"
            }else{
                listTwo.push('${importance} ${note}');
                render_list();
            }

            function render_list(){
                vapid.innerHTML="";
                for (var i=0; i<listTwo.length; i++){
                    var document=document.createElement("div");
                    document.innerHTML=listTwo[i];
                    vapid.appendChild(document);
                }
            }
        })
    }
    Nav_creation();
    createText();
    navigate("Home");
}