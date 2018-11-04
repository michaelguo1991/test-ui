const container = require('markdown-it-container');
const { stripTags, fetchTag } = require('./util');

module.exports = md => {
    md
      .use(container, 'tip')
      .use(container, 'warning')
      .use(container, 'demo', {
          render: (tokens, idx) => {
              const token = tokens[idx];
              if (token.nesting === 1) {
                const description = token.info.trim().slice('demo'.length).trim() || '';
                const content = tokens[idx + 1].content;

                const html = stripTags(content, ['script', 'style']);
                const script = fetchTag(content, 'script');
                const style = fetchTag(content, 'style');
                const descriptionHtml = description ? md.render(description) : '';
                let jsFiddle = { html, script, style };

                jsFiddle = md.utils.escapeHtml(JSON.stringify(jsFiddle));

                return `<demo-block class="demo-box" :jsfiddle="${jsFiddle}">
                          <div class="source" slot="source">${html}</div>
                          ${descriptionHtml}
                          <div class="highlight" slot="highlight">`;
              }
              return '</div></demo-block>\n';
          }
      })
        
}