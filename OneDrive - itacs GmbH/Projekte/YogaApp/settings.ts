type Set = {
    duration : number;
    theme : string;
    level : number;
    pranayama : boolean;
    variations : boolean;
    mediation : boolean;
}

class Settings {
    settings : {};
    duration : Set;
    theme : Set;
    level : Set;
    pranayama : Set;
    variations : Set;
    mediation : Set;
    form : HTMLFormElement;
    formData : FormData;

    constructor() {
        this.form = document.querySelector('form');
        this.formData = new FormData(this.form);
        this.settings = Settings;
    }


    // static getChoice( name : string) : any {
    //     return this.formData.get(name);
    // }

    // getLevel(level : string) {
    //     this.level = this.getChoice(level);
        //.append(level, this.form().value)
        //data.append("item" , document.querySelector("#item").value);
    // }
}