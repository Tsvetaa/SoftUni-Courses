function attachEventsListeners() {
    let btn = document.getElementById('convert');
    btn.addEventListener('click', onClick);

    let fromUnit = document.getElementById('inputUnits').value;
    let toUnit = document.getElementById('outputUnits').value;
    let input = Number(document.getElementById('inputDistance').value);
    let output = document.getElementById('outputDistance');

    let ratio = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,

    }

    function onClick() {
        let meters = input * ratio[fromUnit];
        let convertedValue = meters / ratio[toUnit];
        output.value = convertedValue;
    }

}