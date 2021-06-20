# Photo Gallery

## Quickstart with python SimpleHTTPServer
1. Download the code and save it locally to a folder such as `~/code/myfolder`
2. from the command line,

        cd ~/code/myfolder
        python -m SimpleHTTPServer 8887

3. Open http://localhost:8887/index.html

## Quickstart with chrome webserver

1. Download the code and sav it locally to a folder such as `~/code/myfolder`
2. Launch the chrome webserver
3. Click *choose folder* and set to `~/code/myfolder`
4. Open http://localhost:8887/index.html

[cws]: https://chrome.google.com/webstore/detail/web­server­for­chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en
[code]:https://drive.google.com/open?id=1S5mLGgLd9JGM1jmlaely0N2vEMGn6x-I

## TODOs / Additional Features

- Implement placeholder/lazy-loading/blur-up for images to enhance perceived loading time
- Cache images and probably a bunch of other things to optimize performance and make images more responsive to different viewports (also just for when using local images I'd add a setTimeout function to better simulate api call)
- As mentioned in the challenge instructions, pagination might be desirable if there's a lot of pictures or just a continuous scroll with lazy loading could work instead
- Add authentication and backend so user can save their favorite images or load their own. Even without auth you could still add some form of local storage so favorited images could at least be saved temporarily. You could also just render the number of likes from the Unsplash response
- Make modal more accessible (e.g. trap focus if there's anything focusable, return focus to last focused element once closed, add aria-attributes, make modal closable with ESC keypress and click outside of image
- Change modal 'close' btn to an 'X' icon and position it relative to dimensions of image (e.g. position it in upper right corner) 
- Add some kind of slick CSS transition on modal open/close
- I noticed that the responses from Unsplash can potentially include categories and dates, so it could be nice to add a feature that allows you to search/filter the images by category and sort by date. Also filter by Unsplash user
- Add Unsplash user credit and link to their Unsplash just below modal image
- Add carousel for viewing full-width images
- Use React and some additional libraries/frameworks for features like the modal, carousel, and gallery so that it's easier to implement accessibility, responsiveness, browser/device compatability, etc. 
- Make sure app is mobile/native friendly and add Progressive Web App functionality for offline use and better performance
- Some kind of zoom feature that allows you to zoom in/out on specific parts of images
