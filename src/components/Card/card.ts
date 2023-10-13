export enum AttributeCard {
    "catFact" = "catFact",
}

export default class Card extends HTMLElement{
    catFact: string = "";
    

    static get observedAttributes(){
        const attrs: Record <AttributeCard,null> = {
            catFact: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCard,
        _: unknown,
        newValue: string
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        constructor(){
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback(){
            this.render();
        }

        render(){
            if(this.shadowRoot) this.shadowRoot.innerHTML = '';

            const container = this.ownerDocument.createElement('section');

            const figure = this.ownerDocument.createElement('app-figure');
            figure.setAttribute(AttributeCard.catFact, this.catFact);

            container.appendChild(figure);

            this.shadowRoot?.appendChild(container)
        }
}

customElements.define('app-card', Card)