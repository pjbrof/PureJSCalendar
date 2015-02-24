# PureJSCalendar
Open source task and event calendar using only javascript with zero dependencies.

I wanted to create a light weight calendar app using only javascript without the need for dependencies like jQuery and Moment JS. Original fiddle can be seen <a href="http://jsfiddle.net/BqZk9/13/">here</a>. Feel free to fork this or create new features.

Update 2/17: Calendar is almost completely configured. Changing months and years is currently disabled, there is a problem with the whole table not updating on change. Event functions will be added soon. Currently trying to brainstorm ways of saving events for individual users while keeping with the goals of this project. 

Update 2/18: Code is super sloppy right now, but the month selection and year selection are currently working. Will try and get to cleaning it up tomorrow. Otherwise the base calendar is fully functioning.

Update 2/23: Transfering code to individual files for tidyness. Handlers for days, month, and year will be moved to dateHandler and then called upon from app.js functions. Code is to remain intact until reliable testing can be done.