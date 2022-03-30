'use strict';

$(document).ready(function() {

    const baseURL = 'https://api.github.com';

    function getUserLastPushEvent(username) {
        return fetch('${baseURL}/users/${username}/events/public')
            .then(res => res.json())
            .then(events => {
                for (let event of events) {
                    if (event.type === 'PushEvent') {
                        return event;
                    }
                }
            });
    }

    getUserLastPushEvent('mojombo').then(event => {
        $('body').html('<h1>' + 'Mojombos last push event was created at ' + event.created_at + '</h1>');
        console.log(event)
    });
});