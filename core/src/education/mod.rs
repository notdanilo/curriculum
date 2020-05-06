use crate::prelude::*;

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct Education {
    title     : String,
    institute : String
}

impl WebView for Education {
    fn new_view(attributes:NamedNodeMap) -> Self {
        Default::default()
    }
}

crate::webview!(Education);
