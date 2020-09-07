use crate::prelude::*;

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct Education {
    title     : String,
    institute : String
}

impl Education {
    fn create_view(_attributes:NamedNodeMap) -> Self {
        Default::default()
    }
}

impl WebView for Education {
    fn get_data(&self) -> String {
        json::to_string(&self).unwrap()
    }
}

webview!(Education);
