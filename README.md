# PureJSCalendar
Open source task and event calendar using only javascript with zero dependencies.

I wanted to create a light weight calendar app using only javascript without the need for dependencies like jQuery and Moment JS. Original fiddle can be seen <a href="http://jsfiddle.net/BqZk9/13/">here</a>. Feel free to fork this or create new features.

Update 2/17: Calendar is almost completely configured. Changing months and years is currently disabled, there is a problem with the whole table not updating on change. Event functions will be added soon. Currently trying to brainstorm ways of saving events for individual users while keeping with the goals of this project. 

Update 2/18: Code is super sloppy right now, but the month selection and year selection are currently working. Will try and get to cleaning it up tomorrow. Otherwise the base calendar is fully functioning.

Update 2/23: Transfering code to individual files for tidyness. Handlers for days, month, and year will be moved to dateHandler and then called upon from app.js functions. Code is to remain intact until reliable testing can be done.

Update 3/2: Once date handlers are in place which I'm currently working on I will make a more comprehensive readme with instructions.

Update 3/9: Created mini version using only css all functionality will remain in js handlers. Made minor fixes to main.css

Update 3/30: Everything is a little screwed up right now. I have some time tonight and this weekend to work on this project and clean everything up. The goal for Sunday, which I started tonight is to have the framework for the calendar up. I just started working on appending the html to the body in javascript. Eventually it will only require a div and the javascript library added to the head. I will work this weekend on cleaning up the Readme, directions, and condense all of this scattered nonsense. An up-to-date demo is also coming! I hate repos without examples so I'm kind of the hipocrite here.

Update 4/1: Table is now created entirely in javascript, so no more HTML. I'm updating the documentation now, demo of the calendar will be hosted on my blog <a href="patrickbrophy.info/PureJSCalendar/index.html">here</a>. 