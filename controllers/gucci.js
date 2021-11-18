var gucci = require('../models/gucci');

// List of all gucci
exports.gucci_list = async function (req, res) {
    try {
        thegucci = await gucci.find();
        res.send(thegucci);
    }
    catch (err) {
        res.status(500)
        res.send(`{"error": ${err}}`);
    }
    res.send('NOT IMPLEMENTED: gucci list');
};

// for a specific gucci.
exports.gucci_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await gucci.findById(req.params.id)
        res.send(result)
    }
    catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
    res.send('NOT IMPLEMENTED: gucci list');
};

// Handle gucci create on POST. 
exports.gucci_create_post = async function (req, res) {
    console.log(req.body)
    let document = new gucci();
    document.Itemname = req.body.Itemname;
    document.Quantity = req.body.Quantity;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle gucci delete on DELETE.
exports.gucci_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await gucci.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

//Handle gucci update form on PUT.
exports.gucci_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await gucci.findById(req.params.id);
        // Do updates of properties
        if (req.body.Itemname)
            toUpdate.Itemname = req.body.Itemname;
        if (req.body.price)
            toUpdate.price = req.body.price;
        if (req.body.Quantity)
            toUpdate.Quantity = req.body.Quantity;
        let result = await toUpdate.save();
        console.log("Sucess " + result);
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
    res.send('NOT IMPLEMENTED: gucci list');
};

exports.gucci_view_all_Page = async function (req, res) {
    try {
        thegucci = await gucci.find();
        res.render('gucci', { title: 'gucci Search results', results: thegucci });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.gucci_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await gucci.findById(req.query.id)
        res.render('guccidetail',
            { title: 'gucci Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
