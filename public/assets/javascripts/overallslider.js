var select = document.getElementById("select");
var sliders = [];

function createSliderLogic(nameBullet, nameSlider){
    var fullSlider = {slider: document.getElementById(nameSlider), bullet: document.getElementById(nameBullet)};
    sliders.push(fullSlider);

    fullSlider.slider.addEventListener("input", ()=>{
        fullSlider.bullet.innerHTML = fullSlider.slider.value;
        var bulletPosition = (fullSlider.slider.value/fullSlider.slider.max);
        //fullSlider.bullet.style.left = (bulletPosition * 578) + "px";
    }, false);
}

select.addEventListener("change", () =>{

    var req = new XMLHttpRequest();
    req.open('POST', '/weightUI/overall/sliders');
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onload = () => {
        var sliderValues = JSON.parse(req.response);
        for (let i = 0; i < sliderValues.length; i++) {
            let value = sliderValues[i];
            sliders[i].slider.value = value;
            sliders[i].bullet.value = value;
            sliders[i].bullet.innerHTML = value;
        }
    }
    req.send(`id=${select.value}`);
});

createSliderLogic("tilsBullet","tilsSlider");
createSliderLogic("energiBullet","energiSlider");
createSliderLogic("helpBullet","helpSlider");
