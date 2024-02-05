if(process.env.NODE_ENV != "production") {
    require("dotenv").config(); 
  }
  

  const express = require("express");
  const app = express() ;
  const mongoose = require("mongoose");
  const ejsMate = require("ejs-mate");
  const path = require("path");
  const methodOverride = require("method-override");
  const ExpressError = require("./utils/ExpressError.js");
  const session = require("express-session");
  const flash = require("connect-flash");
  const passport = require("passport");
  const LocalStrategy = require("passport-local");
  const User = require("./models/user.js");

  const listingRouter = require("./routes/listing.js");
  const reviewRouter = require("./routes/review.js");
  const userRouter = require("./routes/user.js");

    
main().then(() =>{
    console.log("connect to DB");
}).
catch(err =>{
    console.log(err)
});
async function main () {
 await mongoose.connect('mongodb://127.0.0.1:27017/WANDERLUST');
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);


const sessionOptions = {
    secret: "mysupersecretstring", 
    resave: false, saveUninitialized: true,
    cookie: {  
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, 
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,  
    },
};


app.use(session(sessionOptions));
app.use(flash()); 
app.use(passport.initialize()); 
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser()); 

app.get("/animal", (req,res,next) =>{
      res.render("includes/animal.ejs");
});

app.get("/artical1", (req,res,next) =>{
    res.render("includes/artical1.ejs");
});

app.get("/artical2", (req,res,next) =>{
    res.render("includes/artical2.ejs");
});

app.get("/artical3", (req,res,next) =>{
    res.render("includes/artical3.ejs");
});

app.get("/artical4", (req,res,next) =>{
    res.render("includes/artical4.ejs");
});

app.get("/AirCover",(req,res,next) => {
    res.render("includes/AirCover.ejs");
})

app.get("/Anti-discrimination",(req,res,next) => {
    res.render("includes/Anti-discrimination.ejs");
})

app.get("/Disability-support",(req,res,next) => {
    res.render("includes/Disability-support.ejs");
})

app.get("/Cancellation-options",(req,res,next) => {
    res.render("includes/Cancellation-options.ejs");
})

app.get("/Report-neighbourhood-concern",(req,res,next) => {
    res.render("includes/Report-neighbourhood-concern.ejs");
})

app.get("/Airbnb-your-home"    ,(req,res,next) => {
    res.render("includes/Airbnb-your-home.ejs");
})

app.get("/AirCover-for-Hosts",(req,res,next) => {
    res.render("includes/AirCover-for-Hosts.ejs");
})

app.get("/Hosting-resources",(req,res,next) => {
    res.render("includes/Hosting-resources.ejs");
})


app.get("/Hosting-responsibly",(req,res,next) => {
    res.render("includes/Hosting-responsibly.ejs");
})

app.get("/Newsroom",(req,res,next) => {
    res.render("includes/Newsroom.ejs");
})

app.get("/New-features",(req,res,next) => {
    res.render("includes/New-features.ejs");
})

app.get("/Careers",(req,res,next) => {
    res.render("includes/Careers.ejs");
})

app.get("/Investors",(req,res,next) => {
    res.render("includes/Investors.ejs");
})

app.get("/Airbnb.org-emergency-stays",(req,res,next) => {
    res.render("includes/Airbnb.org-emergency-stays.ejs");
})


app.use((req,res,next) => {
   res.locals.success = req.flash("success"); 
   res.locals.error = req.flash("error");
   res.locals.currUser = req.user; 
    next(); 
});


app.use("/listings", listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/" ,userRouter);


app.all("*", (req,res,next) =>{
    next(new ExpressError(404 , "Page Not Found!"));
});


app.use((err, req, res, next) => {
   let {statusCode =500 , message ="Something went wrong!"} = err ; 
   res.status(statusCode).render("listings/error.ejs",{err});
});


app.listen(8080,() =>{
    console.log("server is listing on port 8080");
})
