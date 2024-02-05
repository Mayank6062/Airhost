const express = require("express");
const router = express.Router(); 
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const {renderNewForm,index, showListing,createListing,renderEditForm,updateListing, destroyListing} = require("../controllers/listings.js");

const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage }); 


//index //create
router.route("/").get(wrapAsync(index)).post(isLoggedIn, upload.single("listing[image]"),
    wrapAsync(createListing),validateListing);

//new 
router.get("/new", isLoggedIn, renderNewForm);

//show //delete //update
router.route("/:id").get(wrapAsync(showListing)).put( isLoggedIn,isOwner, upload.single('listing[image]'),
wrapAsync(updateListing),validateListing,)
.delete(isLoggedIn,isOwner,wrapAsync(destroyListing)); 


//edit
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync(renderEditForm));



module.exports = router ;