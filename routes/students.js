var Student = require('../model/Student');
var express = require('express');
var router = express.Router();

router.post("/", function(req, res){
  var student = new Student({
    student_id : req.body.student_id,
    name: req.body.name,
    ic_number: req.body.ic_number,
    year_join: req.body.year_join
  });

  student.save(function(err, data){
    if(err) {
      console.err("Error in saving");
    }else{
      console.log("Data is saved "+data);
    }
  });
  res.redirect("/students");
});

router.get("/new", function(req, res){
  res.render("students/new", {});
});

router.get("/", function(req, res){
  Student.find({}, function(err, students){
    res.render("students/index", {
      "students" : students
    });
  })
});

module.exports = router;