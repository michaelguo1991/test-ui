module.exports = md => {
    const fence = md.renderer.rules.fence;
    md.renderer.rules.fence = (...args) => {
        let content = fence.call(this, ...args);
        
        content = content.replace('<code class="', '<code class="hljs ')
        .replace('<code>', '<code class="hljs">');

        return content;
    }
}