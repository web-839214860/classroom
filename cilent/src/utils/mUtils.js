/**
 * 设置浏览器头部标题
 */
export const setTitle = (title) => {
    title = title ? `${title}` : '开会易'
    window.document.title = title
}