// class SequenceCreatorModel {
//   constructor() { }

//   // Daten aus json holen


// }



// class SequenceCreatorView {
//   form: HTMLFormElement;
//   formData;
//   rangeSlider;
//   sequenceDurationDiv: HTMLElement;
//   intermediateRadio;
//   themeRadio;
//   settings: Settings
//   userData: Set;


//   constructor() {
//     this.intermediateRadio = document.getElementById('intermediate');
//     this.intermediateRadio.checked = true;
//     this.rangeSlider = document.getElementById("sequence_duration");
//     this.rangeSlider.value = 90;
//     this.themeRadio = document.getElementById('equilibrium');
//     this.themeRadio.checked = true;
//     document.querySelector('form').addEventListener('submit', event => {
//       alert('ToDo: settings an controller übergeben');
//       this.createSequenceListener();
//     })
//     this._initRangeSlider();
//   }

//   _getLevel() {
//     return this.formData.get('level') || 2;
//   }

//   _getChoice(choice: string) {
//     return this.formData.get(choice);
//   }

//   //Javascript From Data Script um Werte von Input ausgeben zu lassen
//   _initRangeSlider() {
//     var _this = this;
//     this.sequenceDurationDiv = document.getElementById("sequence_duration_value");
//     this.rangeSlider.addEventListener('change', event => {
//       _this.sequenceDurationDiv.innerHTML = (<HTMLInputElement>event.target).value;
//     });
//   }

//   public createSequenceListener() {
//     this.form = document.querySelector('form');
//     this.formData = new FormData(this.form);

//     this.userData.level = this.formData.get('level');
//     // this.formData.forEach(element => {
//     //   userData[element.keys] = this.formData.get(element);
//     //   console.log(userData);
//     // });
//     // for (let key of this.formData.keys()) {
//     //   userData[key] = this.formData.get(key);
//     //   console.log(key, this.formData.get(key));
//     // }
//     console.log(this.userData);
//     return this.userData;
//   }
// }

// class SequenceCreatorController {
//   sequenceModel;
//   sequenceView: SequenceCreatorView;
//   constructor(model, view) {
//     this.sequenceModel = model;
//     this.sequenceView = view;
//   }

// }



// document.addEventListener('DOMContentLoaded', () => {
//   new SequenceCreatorController(new SequenceCreatorModel(), new SequenceCreatorView());

// })
