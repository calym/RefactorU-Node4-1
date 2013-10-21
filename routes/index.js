
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: "Magellan's Voyage", next: "/seville" , blurb: "Magellan was an explorer!"});
};

exports.seville = function(req, res){
   res.render('index', { title: "Seville", next: "/canaryislands", blurb: "I hear a barber lives here." });
};

exports.canaryislands = function(req, res){
  res.render('index', { title: "Canary Islands", next: "/capeverde", blurb: "The canary islands have lots of birds."});
};

exports.capeverde = function(req, res){
  res.render('index', { title: "Cape Verde", next: "/straitofmagellan", blurb: "Verde means green."});
};
exports.straitofmagellan = function(req, res){
  res.render('index', { title: "Strait of Magellan", next: "/guam", blurb: "It's named after some explorer guy."});
};
exports.guam = function(req, res){
  res.render('index', { title: "Guam", next: "/phillipines", blurb: "Lots of places claim to be hotter than it is here."});
};
exports.phillipines = function(req, res){
  res.render('index', { title: "Phillipines", next: "/", blurb: "Last stop."});
};