// Create the Dog class here

class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    getDogHtml(){
        return `<section id="profileimg">
                    <div class="title">
                        <p>${this.name}, ${this.age}</p>
                        <p>${this.bio}</p>
                    </div>
                    <img src="${this.avatar}" alt="profilepic">
                </section>`
    }
}

export default Dog