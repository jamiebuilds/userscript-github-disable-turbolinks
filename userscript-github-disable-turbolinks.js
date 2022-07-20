// ==UserScript==
// @name         Disable GitHub Turbolinks
// @version      0.1
// @description  A userscript to disable GitHub turbolinks to force full page navigations
// @license      MIT
// @author       Jamie Kyle
// @namespace    https://github.com/jamiebuilds
// @match        https://github.com/*
// @match        https://gist.github.com/*
// @run-at       document-end
// @grant        none
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @updateURL    https://raw.githubusercontent.com/jamiebuilds/userscript-github-disable-turbolinks/main/userscript-github-disable-turbolinks.js
// @downloadURL  https://raw.githubusercontent.com/jamiebuilds/userscript-github-disable-turbolinks/main/userscript-github-disable-turbolinks.js
// @supportURL   https://github.com/jamiebuilds/userscript-github-disable-turbolinks/issues
// ==/UserScript==

(() => {
    'use strict'
    document.body.dataset.turbo = 'false'
})()
