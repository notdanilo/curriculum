use crate::prelude::*;

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct InfoBar {
    black : String,
    white : String
}

impl WebView for InfoBar {
    fn new_view(attributes:NamedNodeMap) -> Self {
        let black = attributes.get_named_item("black").unwrap().value();
        let white = attributes.get_named_item("white").unwrap().value();
        Self {black,white}
    }
}

crate::webview!(InfoBar);
crate::template!(InfoBar);