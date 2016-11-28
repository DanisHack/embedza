/////////////////////////////////////////////////////////////////////////////
// Rutube
//
'use strict';


const Promise = require('bluebird');


module.exports = {
  match: [
    /^https?:\/\/(?:www\.)?rutube\.ru.*/i
  ],

  mixinsAfter: [
    '*',
    function (env) {
      env.result.snippets.forEach(snippet => {
        if (snippet.type !== 'text/html' ||
            snippet.tags.indexOf('player') === -1) {
          return; // continue
        }

        snippet.media.autoplay = 'autoStart=true';
      });

      return Promise.resolve();
    }
  ]
};