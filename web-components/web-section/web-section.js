import WebComponent from "/web-component/web-component.js"

export default class WebInfobar extends WebComponent {
    async getData() {
        return {
            "name": this.getAttribute("name")
        }
    }
}