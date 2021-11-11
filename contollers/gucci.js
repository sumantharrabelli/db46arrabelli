var Gucci = require('../models/gucci'); 

 
// for a specific Gucci. 
exports.gucci_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gucci detail: ' + req.params.id); 
}; 
 
// Handle Gucci create on POST. 
exports.gucci_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Gucci(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    document.Itemname = req.body.Itemname; 
    document.Quantity = req.body.Quantity; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// Handle Gucci delete form on DELETE. 
exports.gucci_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gucci delete DELETE ' + req.params.id); 
}; 
 
// Handle Gucci update form on PUT. 
exports.gucci_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gucci update PUT' + req.params.id); 
};
// List of all Guccis 
exports.gucci_list = async function(req, res) { 
    try{ 
        theGuccis = await Gucci.find(); 
        res.send(theGuccis); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

exports.gucci_view_all_Page = async function(req, res) { 
    try{ 
        theGucci = await Gucci.find(); 
        res.render('gucci', { title: 'Gucci Search Results', results: theGucci }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 