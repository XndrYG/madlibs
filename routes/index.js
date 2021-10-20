var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    noun1: "bacon",
    noun2: "pancakes",
    verb1: "run",
    verb2: "swim",
    adjective1: "shiny",
    adjective2: "smooth",
    adjective3: "pretty"
  });
});

/*POST form data*/
router.post('/story', function(req, res){
  let body = req.body;
  let newStory= getStory(body);
  res.render('story', {
    newStory: newStory
  });
});

module.exports = router;

function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}
/*from shuttersandflowers.com*/
function generateStory1(formData){
  return `It was a ${formData.adjective1}, Christmas day. I had just woken up to the smell of ${formData.noun1} cooking on the stove. I ${formData.verb1} down the stairs to see some presents awaiting for me under the Christmas Tree. I ${formData.verb2} outside and see lots of ${formData.noun2}  and ${formData.adjective2} Christmas lights strung around my ${formData.adjective3} house. This year will be the best Christmas ever!`
}

function generateStory2(formData){
  return `By the time I got home my mom was ${formData.verb1} to learn about my new teacher, Ms Applebottom. My day started when I happened to catch my teacher ${formData.verb2} by the ${formData.noun1} wearing a lot of ${formData.noun2}. It was the first day of school so I was already very ${formData.adjective1}. When I had walked into her classroom, it smelled very ${formData.adjective2}. At recess, we played Tag and I met a ${formData.adjective3} guy named Pete.`
}
/*from Mr. Solarz's class Weebly website*/
function generateStory3(formData){
  return `Our school cafeteria has really ${formData.adjective1} food. Just thinking about it makes my stomach ${formData.verb1}. The spaghetti is ${formData.adjective2} and tastes like  ${formData.noun1}. One day, I swear one of my meatballs started to ${formData.verb2}. The turkey tacos are totally ${formData.adjective3} and look kind of like some old ${formData.noun2}. I think I am better off packing my own lunch!`
}