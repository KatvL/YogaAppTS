var _this = this;
document.addEventListener('DOMContentLoaded', function () {
    document
        .querySelector('form')
        .addEventListener('submit', _this.handleForm);
});
var intermediateRadio = document.getElementById('intermediate');
intermediateRadio.checked = true;
// Chritsoph
document.querySelector('form').addEventListener('submit', function (event) {
    alert('ToDo: settings an controller übergeben');
    handleForm(event);
});
//Javascript From Data Script um Werte von Input ausgeben zu lassen
function initRangeSlider() {
    var rangeSlider = document.getElementById("sequence_duration");
    var sequenceDurationDiv = document.getElementById("sequence_duration_value");
    rangeSlider.addEventListener('change', function (event) {
        sequenceDurationDiv.innerHTML = event.target.value;
    });
}
function handleForm(event) {
    var settingsObj = {};
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    formData.forEach(function (value, key) {
        settingsObj[key] = formData.get("'" + value + "'");
        console.log(key, formData.get("'" + value + "'"));
    });
    var url = 'http://localhost:8080/';
    var req = new Request(url, {
        body: formData,
        method: 'POST',
    });
    fetch(req)
        .then(function (response) { return response.json(); })
        .then(function (data) {
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
//# sourceMappingURL=view.js.map