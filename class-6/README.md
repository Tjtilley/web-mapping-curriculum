Homework
For your class journal (2 points each):
Data prep and analysis

1. Find at least two web mapping examples that allow for user analysis. For each example provide: 
  a) a link to the web map b) a description of the user analysis
  
  Zillow:
  
  https://www.zillow.com/homes/for_rent/?searchQueryState
  
 A user can draw an area where they would like to find a house.
 
 Yelp:
 
 https://www.yelp.com/search?find_desc=near%20by&find_loc=san%20francisco&l=p%3ACA%3ASan_Francisco%3A%3AOuter_Sunset
 
 A user can add filters and choose areas on the map and desired restaurants with be shown in that area with those filters.
 

2. Give an example of static data you might include on a web map. How is your example different from dynamic data?

Static data is data that is analyzed ahead of time and is usually for display. An example would be a choropleth map showing poupulation by county. Dynamic data is analyzed right before its loaded. This is more appropriate for a map with live data like election results across the country.


3. Under what circumstances might you want to do some data prep in desktop GIS before incorporating data into your web map? Give an example of the type of data that might apply here.

One reason to prep data in desktop GIS is data simplification. A file might be large and in order to still use the data you might what to simplify the geometry. For example a county outline can simplified to have less definition in its outline in order to be incorporated into your web map easier.


4. What are some data characteristics that can impact rendering speed? How might you address these issues?

If you have a lot of different vector tile sources it can impact rendering speed. To fix this you can combine vector tile sources by using composited sources.

5. What is turf.js? Give an example of how you could apply a turf operation to a web map.

Turf.js is a spatial analysis library of open-source JavaScript. Turf can be applied in a web map in order to calculate the distance between two different points.

Inline writing prompts

1. Describe where the centroids variable comes from. How is it possible for you to reference this variable when you didn't declare it?

The centroids variable comes from the centroids.js file. The variable can be referenced even though it isn't declared in the point in poly file because it is defined in the centroids.js file which has been linked to the point in poly file.


2. Why might you want to create the 'centroids-selected' layer after you've created the 'centroids' layer?

The centroids-selected layer houses centroids selected by the user. The new layer lets the selected centroids have a different color or style so they can stand apart from the rest of the centroids.


3. Should you set the marker's lngLat and add it to the map? Why or why not?

The marker should not be set to a single lngLat because it will move around the map as the user clicks in different places.

4. How did you know which arguments to pass to the pip() function?

When hovering over the pip() function a popup box shows that the arguements are (FeatureCollection: any, polygon:any):any.

Code exercises to do on your own (20 points):

Find this week’s homework in the main class repo: https://github.com/mapbox/web-mapping-curriculum/tree/master/class-6/homework.

The finished product for this week's homework should look something like this:



Follow the prompts to use your buffer map from today’s class to build a more complex web map that searches for locations within a given radius. For this assignment, there are both code prompts (denoted with a 🔰) and writing prompts (denoted with a 📝).

How to turn in the code exercise:

Address the 🔰 code prompts right in the file, as usual, then commit your completed file to your forked class repo in the class-6/homework folder.
Respond to the 📝 writing prompts in the class journal section above, as usual.
