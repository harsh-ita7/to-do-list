const express = require("express");
const bodyparser = require("body-parser");
//code refactoring
const date= require(__dirname+ "/date.js");
const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
//array listing our entered input
var newitem =["cooking","studying","dancing"];
var workitem=[];
//telling our app to use ejs
app.set('view engine', 'ejs');

app.post("/",function(req,res)
{
  //del button's response-
  const del=req.body.delbutton;
  const index=newitem.indexOf(del);

  var myitem=req.body.newITEM;   //we get hold of whatever user types in input box in html
   var title=req.body.add;

     if(index>-1)
     {
       newitem.splice(index,1);
       res.redirect("/");
     }
   else
   if(myitem!="")
   {
    newitem.push(myitem); //we push that item to our array which has list of whatever we input
    res.redirect("/");// we redirect to home route cuz those ejs markers are passed over there itself
   }



});
app.post("/work",function(req,res)
{
  //del button's response-
  const del=req.body.delbutton;
  const index=workitem.indexOf(del);

  var myitem=req.body.newITEM;   //we get hold of whatever user types in input box in html
   var title=req.body.add;

     if(index>-1)
     {
       workitem.splice(index,1);//for deleting from array
       res.redirect("/work");
     }
   else
   if(myitem!="")
   {
    workitem.push(myitem); //we push that item to our array which has list of whatever we input
    res.redirect("/work");// we redirect to home route cuz those ejs markers are passed over there itself
   }



});

app.get("/work",function(req,res)
{
    res.render("lists", {list_title:"work list",items: workitem});
});
//when we first load our homepage we go through this route.
//it will again be called after we update our list so as to display the newly entered item.
app.get("/", function(req, res) {

var todaysDay=date.getdate();
//items: newitem -> it has to be done here cuz if not done then when we first enconter this part when webpage loads
//the ejs template will search for items which will not be passed here.
  res.render("lists", {list_title: todaysDay,items: newitem});

});

app.listen(process.env.PORT||7000, function() { //MAKE SURE TO INCLUDE env port before deploying on heroku.
  console.log("server started at port 7000");
});
