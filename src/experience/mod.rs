use crate::prelude::*;

use crate::role::Role;

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct Experience {
    company     : String,
    description : String,
    role        : Role
}

impl Experience {
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

impl WebView for Experience {
    fn get_data(&self) -> String {
        json::to_string(&self).unwrap()
    }
}

webview!(Experience);
template!(Experience);