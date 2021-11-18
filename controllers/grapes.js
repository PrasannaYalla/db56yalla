var grapes = require("../models/grapes");

// List of all grapess
exports.grapes_list = async function (req, res) {
  try {
    thegrapes = await grapes.find();
    res.send(thegrapes);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific grapes. 
exports.grapes_detail = async function(req, res) { 
  console.log("detail"  + req.params.id) 
  try { 
      result = await grapes.findById( req.params.id) 
      res.send(result) 
  } catch (error) { 
      res.status(500) 
      res.send(`{"error": document for id ${req.params.id} not found`); 
  } 
}; 

// Handle grapes create on POST.
exports.grapes_create_post = async function (req, res) {
  console.log(req.body);
  let document = new grapes();
  document.grapes_type = req.body.grapes_type;
  document.Weight = req.body.Weight;
  document.Cost = req.body.Cost;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle grapes delete on DELETE. 
exports.grapes_delete = async function(req, res) { 
  console.log("delete "  + req.params.id) 
  try { 
      result = await grapes.findByIdAndDelete( req.params.id) 
      console.log("Removed " + result) 
      res.send(result) 
  } catch (err) { 
      res.status(500) 
      res.send(`{"error": Error deleting ${err}}`); 
  } 
};

//Handle grapes update form on PUT. 
exports.grapes_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await grapes.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.grapes_type)  
               toUpdate.grapes_type = req.body.grapes_type; 
        if(req.body.Cost) toUpdate.Cost = req.body.Cost; 
        if(req.body.Weight) toUpdate.Weight = req.body.Weight; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// VIEWS
// Handle a show all view
exports.grapes_view_all_Page = async function (req, res) {
  try {
    thegrapes = await grapes.find();
    res.render("grapes", { title: "grapes Search Results", results: thegrapes });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// Handle a show one view with id specified by query
exports.grapes_view_one_Page = async function(req, res) {
  console.log("single view for id "  + req.query.id)
  try{
      result = await grapes.findById( req.query.id)
      res.render('grapesdetail', {
          title: 'grapes Detail', 
          toShow: result
      });
  }
  catch(err){
      res.status(500)
      res.send(`{'error': '${err}'}`);
  }
};
//Handle building the view for creating a grapes.
// No body, no in path parameter, no query.
// Does not need to be async
exports.grapes_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('grapescreate', { title: 'grapes Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a grapes. 
// query provides the id 
exports.grapes_update_Page =  async function(req, res) { 
  console.log("update view for item "+req.query.id) 
  try{ 
      let result = await grapes.findById(req.query.id) 
      res.render('grapesupdate', { title: 'grapes Update', toShow: result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 
// Handle a delete one view with id from query 
exports.grapes_delete_Page = async function(req, res) { 
  console.log("Delete view for id "  + req.query.id) 
  try{ 
      result = await grapes.findById(req.query.id) 
      res.render('grapesdelete', { title: 'grapes Delete', toShow: 
result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 
