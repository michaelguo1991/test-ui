const hoist = require('./hoist');
const container = require('./container');
const wrapcode = require('./wrapcode');
const hljs = require('highlight.js');
const anchor = require('markdown-it-anchor')
const slugify = require('./slugify');

const md = require('markdown-it')({
    html: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {}
        }

        return ''; // use external default escaping
    }
});

md
  .use(wrapcode)
  .use(container)
  .use(anchor, {
    slugify,
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '#'
  })

// md._render = md.render;
// md.render = (...args) => {
//     md.__data = {};
//     const html = md._render.call(md, ...args);
//     return {
//         html,
//         data: md.__data
//     }
// }

module.exports = md;