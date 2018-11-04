const fs = require('fs');
const path = require('path');
const slugify = require('./slugify');
const container = require('markdown-it-container');
const striptags = require('./strip-tags');

function convert(str) {
    str = str.replace(/(&#x)(\w{4});/gi, function($0) {
      return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
    });
    return str;
  }
  
function wrap(render) {
return function() {
    return render.apply(this, arguments)
    .replace('<code v-pre class="', '<code class="hljs ')
    .replace('<code>', '<code class="hljs">');
};
}

let md = require('markdown-it')();

md = md.use(require('markdown-it-anchor'), {
    permalink: true,
    slugify
}).use(require('markdown-it-table-of-contents'), {
    slugify,
    format: (headings) => {
        return headings;
    }
}).use(container, 'demo', {
    render: (tokens, idx) => {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
            var description = (m && m.length > 1) ? m[1] : '';
            var content = tokens[idx + 1].content;
            var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
            var script = striptags.fetch(content, 'script');
            var style = striptags.fetch(content, 'style');
            var jsfiddle = { html: html, script: script, style: style };
            var descriptionHTML = description
            ? md.render(description)
            : '';

            jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

            return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
        } else {
            return '</div></demo-block>\n';
        }
    }
});

const content = fs.readFileSync(path.join(__dirname, '../examples/docs/hand.md'), 'utf-8');

md.render(content)
// console.log(md.render(content));