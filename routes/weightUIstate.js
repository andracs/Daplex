var express = require('express');
var db = require('../models/DatabaseTools')
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('weightUIstate');
});

router.post('/', (req, res, next) => {

    var select = req.body.select;
    var indeslider = req.body.indeSlider;
    console.log(indeslider);
    var udvSlider = req.body.udvSlider;
    var murSlider = req.body.murSlider;
    var tagSlider = req.body.tagSlider;
    var udSlider = req.body.udSlider;
    var tagDækSlider = req.body.tagDækSlider;
    var tekSlider = req.body.tekSlider;
    var tagrenSlider = req.body.tagrenSlider;
    var funSlider = req.body.funSlider;
    var vinSlider = req.body.vinSlider;

    var data = [select, indeslider, udvSlider, murSlider, tagSlider, udSlider, tagDækSlider, tagrenSlider, vinSlider, funSlider, tekSlider];
    db.createHelpdeskWeightTable(data);
    db.updateHelpdeskWeightTable(data);
    res.redirect("/weightUI/#top");
    //res.redirect('/weightUI/');
})


module.exports = router;
