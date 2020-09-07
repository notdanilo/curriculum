use crate::prelude::*;

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct Knowledge {
    name : String,
    info : Vec<String>
}

impl Knowledge {
    fn create_view(attributes:NamedNodeMap) -> Self {
        let attribute = attributes.get_named_item("json");
        if let Some(attribute) = attribute {
            let json = attribute.value();
            if let Ok(object) = serde_json::from_str(&json) {
                object
            } else {
                Default::default()
            }
        } else {
            Default::default()
        }
    }
}

impl WebView for Knowledge {
    fn get_data(&self) -> String {
        json::to_string(&self).unwrap()
    }
}

webview!(Knowledge);
template!(Knowledge);