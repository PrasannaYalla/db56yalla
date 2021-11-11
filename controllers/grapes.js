var grapes = require("../models/grapes");

// List of all Costumes
exports.grapes_list = async function (req, res) {
  try {
    thegrapes = await grapes.find();
    res.send(thegrapes);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific Costume.
exports.grapes_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: grapes detail: " + req.params.id);
};

// Handle Costume create on POST.
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

// Handle Costume delete form on DELETE.
exports.grapes_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: grapes delete DELETE " + req.params.id);
};

// Handle Costume update form on PUT.
exports.grapes_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: grapes update PUT" + req.params.id);
};

// VIEWS
// Handle a show all view
exports.grapes_view_all_Page = async function (req, res) {
  try {
    thegrapes = await Costume.find();
    res.render("grapes", { title: "grapes Search Results", results: thegrapes });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};