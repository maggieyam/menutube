# Menutube
MenuTube is a social media app for sharing how-to food videos, built by Maggie Yan, Jared Greenberg, Tony Chen, and Tim Bedford. We developed the site with the MERN stack (MongoDB, Express.js, React, Node.js) as part of our coursework at App Academy in the winter of 2020.


# Features
![Splash Page](https://github.com/maggieyam/menutube/blob/media/media/splash-gif.gif)

Upload your videos to the platform.  
![Upload](https://github.com/maggieyam/menutube/blob/media/media/upload.gif)

Find new recipes in the main feed or narrow their results with a set of curated tags related to diet, nutrition, and common ingredients.  
![Filter](https://github.com/maggieyam/menutube/blob/media/media/filter.gif)

Schedule your meals with a personal calendar.  
![Fridge](https://github.com/maggieyam/menutube/blob/media/media/calendar-gif.gif)

Comment some love on your favorite videos!  
![Comment](https://github.com/maggieyam/menutube/blob/media/media/comment.gif)

# Closeup on the Calendar
Since day one, we envisioned a calendar to help the user with "meal planning" where they can drag recipe tutorial videos into the desired day of the week for quick access. To achieve this effect, we created a wrapper component called **DraggableVideo** that uses the Javascript Drag & Drop API to allow all videos on our site to be used in the calender interface.

```
class DraggableVideo extends React.Component {

  dragStart(e){
    const video = e.target;
    const data = {postId: video.id, formerdate: video.getAttribute("formerdate"), formeridx: video.getAttribute("formeridx")}
    e.dataTransfer.setData('videoInfo', JSON.stringify(data))
 }
 ...
```

We also imagined that the calendar would have some very common customization functionalities such as dragging videos within the calendar itself. To figure out this logic using simply JavaScript, we took advantage of DataTransfer and JSON to pass along not only information about the video/post, but also information about its previous calendar position (if there was one). This allowed us to handle transfer, and deletion from the original calendar slot, in one function without additional complicated event listeners.

```
// components/calendar/slot.jsx

addVideo(e){
    e.preventDefault();
    if (this.props.post) return;
    const {date, idx} = this.props;
    const { postId, formerdate, formeridx } = JSON.parse(e.dataTransfer.getData('videoInfo'));

    let body = {
      date,
      idx: parseInt(idx),
      postId
    }

    this.props.addCalVideo(this.props.calId, body).then( () => {

      if ((formerdate && formeridx) && (formerdate !== date || formeridx !== idx)) {
        this.props.deleteCalVideo(this.props.calId, {date: formerdate, idx: formeridx})
      }

    })

  }
```