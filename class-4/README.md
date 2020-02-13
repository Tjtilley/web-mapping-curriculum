Content for class 4.

Class presentation materials are on Google Drive here.

Homework

For your class journal (2 points each):
Objects recap

1. An object is a series of Keys : Values

2. What kinds of things can be included in an object?

Lots of things can be included in an object such as strings, arrays and variables.

Intro to “client-side”

1. What does client-side rendering mean in the context of web maps?

Client side rendering means that the website, or in this case web map, is rendered entirely in the browser using JavaScript. Maps are rendered combinging style rules ad vector tiles dynamically.

2. Why is it possible for Mapbox GL JS to place labels dynamically as you interact with the map?

Mapbox GL JS computes the layout and labels as you put in options or move around the map using client side rendering that happens many times per second.

Jurisdiction finder recap For the following 3 prompts, reference the working file and README.md in the jurisdiction finder explanation folder in the main class repo.

1. Describe how feature gets to the makeFeatureLabel() function.

The makeFeatureLabel() function translates a feature from a corresponding map layer to a name that is more readable and easier to understand. The features are gathered from underlying data using queryRenderedFeatures.

2. What does the getDistrictNumber() function do?

The getDistrictNumber()  function translates between a feature's map layer and needed dirstrict ID and corresponding district ID number. 

3. Looking at the callback to map.on('click',...), what is e and why do we need it?

The e stand for the event object. This is needed for event handlers to interact with the event object.

Code exercises [10 points each]:

For each of the following 2 prompts, commit an html file to the "class 4" folder in your class repo.

1. Using geojson.io, trace the outline of your childhood home. Using the skills we’ve learned in class, add your new GeoJSON to a Mapbox GL JS map.

2. Building off of the previous exercise, add functionality that changes the color of the layer you just added when the user clicks on it.


Code practice [5 points each]:

This week, we have something new for you. We're using an interactive code editing tool called repl.io. Each of the links below will take you to a page with some code practice. Each one includes some guiding explanation as well as a set of exercises (each denoted with a number in square brackets, like [1]) for you to try. After you type some code into the pane on the left, you can click the "run" button to execute your code. Once you're satisfied with your code, you can turn in the exercise by opening an issue in your forked version of the class repo with the title "Class 4 code practice." Your issue can include either: copied and pasted code or a "share" link.

1. Functions.

2. Loops.


Project
This week, you should prepare your second progress report. This is a minimal check-in that should include, at a minimum:

What you worked on this week.
Any changes you’ve made to your original proposal.
A description of what you’ve built so far and, if applicable, a link to code (it’s ok if it doesn’t work!)
Any obstacles you need to overcome before you can move on to the next step.
To turn in your progress report, open an issue in your forked version of the class repo. The issue title should start with “[Progress report]” to let us know that it’s a progress report.

Include all of the above bullets and feel free to say “not applicable” if needed. Include any relevant links to code, data, or resources.

Additional learning materials

CSS diner. I ❤️ this game! It's great for practicing your CSS selector skills: https://flukeout.github.io/
JavaScript loops: https://www.learn-js.org/en/Loops
Anonymous functions in JavaScript: https://blog.scottlogic.com/2011/06/10/javascript-anonymous-functions.html
JS arrays vs objects: https://github.com/LearnTeachCode/pair-partners/issues/42
