import WebComponent from "/web-component/web-component.js"

export default class WebKnowledge extends WebComponent {
    async getData() {
        return JSON.parse(this.getAttribute("json"))
    }
}