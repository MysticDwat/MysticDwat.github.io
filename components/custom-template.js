const Template = document.createElement("template");

Template.innerHTML = ``

class Elem extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: "closed"});

        shadowRoot.appendChild(Template.content);
    }
}

customElements.define('custom-elem', Elem);