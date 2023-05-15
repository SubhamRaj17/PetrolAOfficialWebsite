/*---------- Menu ----------*/

var trackTabs = document.querySelector('.track .track-tabs');

trackTabs.addEventListener('click', function(e){

    if(e.target.classList.contains('track-btn') && !e.target.classList.contains('active')){
        
        var target = e.target.getAttribute('data-target');
        trackTabs.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        var trackSection = document.querySelector('.track');
        trackSection.querySelector('.track-item.active').classList.remove('active');
        trackSection.querySelector(target).classList.add('active');

    }
})