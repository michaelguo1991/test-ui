const cheerio = require('cheerio');

/**
 * 由于cheerio在转换汉字时会出现转为Unicode的情况,所以我们编写convert方法来保证最终转码正确
 * @param  {[String]} str e.g  &#x6210;&#x529F;
 * @return {[String]}     e.g  成功
 */
const convert = str => {
    str = str.replace(/(&#x)(\w{4});/gi, function($0) {
        return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
    });
    return str;
}

/** 
 * 去除给定文本中的标签
 * @param {String} content 待处理的html文本
 * @param {Array|String} 准备去除的标签 eg: ['style', 'script']/'style'
 * @return {String} 去除掉指定标签的html文本
 */
exports.stripTags = (content, tags) => {
    const $ = cheerio.load(content, { decodeEntities: false });
    
    if (!tags || tags.length == 0) {
        return content;
    }

    tags = !Array.isArray(tags) ? [tags] : tags;
    tags.forEach(tag => {
        $(tag) && $(tag).remove();
    });

    const finalContent = convert($.html()).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
    return finalContent;
}

/**
 * 从Html文本中获取指定标签的内容
 * @param {String} content
 * @param {String} tag
 */
exports.fetchTag = (content, tag) => {
    const $ = cheerio.load(content, { decodeEntities: false });
    if (!tag) return '';
    return $(tag).html();
}