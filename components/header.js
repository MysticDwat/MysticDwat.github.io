const headerTemplate = document.createElement("template");

//blog button <a href="../pages/blog.html">Blog</a>

headerTemplate.innerHTML = `
    <link rel="stylesheet" href="../stylesheets/header.css">
    <header>
        <nav>
            <a href="../pages/about-me.html">About Me</a>
            <a href="../pages/resume.html">Resume</a>
            <a href="../pages/portfolio.html">Portfolio</a>
            <a href="../pages/skills.html">Skills</a>
            <a href="../pages/contact-me.html">Contact Me</a>
        </nav>    
    </header>
`

class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: "closed"});

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-bar', Header);
