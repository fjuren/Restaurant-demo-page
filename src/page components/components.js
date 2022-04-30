export class pageSection {
    constructor(title,subText, image, content){
        this.section = document.createElement('section');
        this.title = title;
        this.subtext = subText;
        this.image = image;
        this.content = content;
    }


    addPageTitle() {
        const h1 = document.createElement("h1");
        h1.textContent = this.title;
        return this.section.appendChild(h1);        
    }

    addSubText() {
        const h3 = document.createElement("h3");
        h3.textContent = this.subtext;
        return this.section.appendChild(h3);
    }

    addImage() {
        const img = document.createElement("img");
        img.setAttribute("src", this.image);
        return this.section.appendChild(img);
    }

    addContent() {
        const p = document.createElement("p");
        p.id = "orderNow"
        p.textContent = this.content
        return this.section.appendChild(p);
    }
}

// export class icons {
//     constructor(icon1, icon2) {
//         this.icon1 = icon1;
//         this.icon2 = icon2;
//     }

//     addIcon1() {
//         const divIcon1 = document.createElement("div");
        
//         return divIcon1.appendChild(this.icon1);
//     }
// }