import WebComponent from "/web-component/web-component.js"

export default class WebExperience extends WebComponent {
    async getData() {
        return JSON.parse(this.getAttribute("json"))
    }
}