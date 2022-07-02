//get all buttons and lists for collapsible lists
let btns = document.getElementsByClassName("collapsible");
let lists = document.getElementsByClassName("child");

//loop through each button and add event listener
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", (e) => {
        //toggle btn active
        e.target.classList.toggle("active");

        //get associated list and toggle hide
        let content = e.target.nextElementSibling;
        content.classList.toggle("hide");

        //for each child of content list
        for(let j = 0; j < content.children.length; j++){
            //go through each child
            for(let k = 0; k < content.children[j].children.length; k++){
                let grandchild = content.children[j].children[k];

                //and reset classes of nested lists
                if(grandchild.classList.contains("active")) {
                    grandchild.classList.toggle("active");

                }else if(grandchild.classList.contains("child") && !grandchild.classList.contains("hide")) {
                    grandchild.classList.toggle("hide")
                }
            }
       }
    });
}

//loop through each list and hide
for(let i = 0; i < lists.length; i++){
    lists[i].classList.toggle("hide");
}