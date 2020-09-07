use crate::prelude::*;

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct Section {
    name : String
}

impl Section {
    fn create_view(attributes:NamedNodeMap) -> Self {
        let name = attributes.get_named_item("name").unwrap().value().into();
        Self {name}
    }
}

impl WebView for Section {
    fn get_data(&self) -> String {
        json::to_string(&self).unwrap()
    }
}

webview!(Section);
template!(Section);
