const markdown = require('./build/markdown');
const isPlay = !!process.env.PLAY_ENV;

module.exports = {
    pages: {
        index: {
            entry: isPlay ? "examples/play.js" : "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    chainWebpack: config => {
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('vue-loader')
                .loader('vue-loader')
                .end()
            .use('vue-markdown-loader')
                .loader(require.resolve('./build/loaders/markdown-loader'))
                .options({ markdown })
                .end();
            
    }
}