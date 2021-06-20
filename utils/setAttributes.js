export default function setAttributes(el, attrs) {
    for (const key in attrs) {
        el.setAttribute(key, attrs[key])
    }
    return el
}