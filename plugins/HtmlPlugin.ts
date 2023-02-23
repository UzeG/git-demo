export default (options) => {
    return {
        name: 'HtmlPlugin',
        transformIndexHtml: {
            // https://cn.vitejs.dev/guide/api-plugin.html#plugin-ordering
            enforce: 'pre', // 提前执行，否则在 body 中的模板字符串会被其他插件解析错误
            transform: (html, ctx) => {
                const dataKeys = Object.keys(options.data);
                dataKeys.forEach(k => {
                    const reg = new RegExp(`<%=( )+${k}( )+%>`, 'g')
                    html = html.replaceAll(reg, options.data[k])
                })
                return html;
            }
        }
    }
}