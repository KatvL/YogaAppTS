

        document.addEventListener('DOMContentLoaded', () => {
            document
            .querySelector('form')
            .addEventListener('submit', this.handleForm);

        });
        let intermediateRadio=  <HTMLInputElement>document.getElementById('intermediate');
        intermediateRadio.checked = true;
// Chritsoph
        document.querySelector('form').addEventListener('submit', event => {
            alert('ToDo: settings an controller übergeben');
            handleForm(event);
        })

        
    
    //Javascript From Data Script um Werte von Input ausgeben zu lassen
    function initRangeSlider() : void{
        let rangeSlider = document.getElementById("sequence_duration");
        let sequenceDurationDiv = document.getElementById("sequence_duration_value");

        rangeSlider.addEventListener('change', event => {
            sequenceDurationDiv.innerHTML = (<HTMLInputElement>event.target).value;
        });
    }

    function handleForm(event) {
        let settingsObj = {};
        event.preventDefault();
        let form = event.target;
        let formData = new FormData(form);
        
        formData.forEach((value, key) => {
            settingsObj[key] = formData.get(`'${value}'`);
            console.log(key, formData.get(`'${value}'`));

        })
        let url = 'http://localhost:8080/';
        let req = new Request(url, {
            body : formData, 
            method: 'POST',
        });
        fetch(req)
        .then((response) => response.json())
        .then((data) => {
            console.log('resonse from server');
            console.log(data);
        })
        .catch(console.warn);
        console.log(settingsObj);
        console.log(formData);
        return settingsObj;
    }
    // public createSequenceListener() {
    //     this.form = document.querySelector('form');
    //     this.formData = new FormData(this.form);
    // }
    // public createSequenceListener(level : Function,  ) : {}{
    //     this.settings = {};
  
    //     this.form = document.querySelector('form');
    //     this.formData = new FormData(this.form);
  
    //     this.settings.level = _getLevel();
  
    //     return this.settings;
    //   }

    initRangeSlider();




