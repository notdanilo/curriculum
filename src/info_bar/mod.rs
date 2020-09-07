use crate::prelude::*;

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct InfoBar {
    black : String,
    white : String
}

impl InfoBar {
    fn create_view(attributes:NamedNodeMap) -> Self {
        let black = attributes.get_named_item("black").map(|v| v.value()).unwrap_or("".into());
        let white = attributes.get_named_item("white").map(|v| v.value()).unwrap_or("".into());
        Self {black,white}
    }
}

impl WebView for InfoBar {
    fn get_data(&self) -> String {
        json::to_string(&self).unwrap()
    }
}

webview!(InfoBar);
template!(InfoBar);
