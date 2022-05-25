const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
    <link rel="stylesheet" href="../stylesheets/footer.css">
    <footer>
        <h1>My Links</h1>
        <nav>
            <a href="https://github.com/MysticDwat">GitHub</a>
        </nav>
    </footer>
`

class Footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: "closed"});

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-bar', Footer);