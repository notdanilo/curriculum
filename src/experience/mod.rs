use crate::prelude::*;

use crate::role::Role;

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct Experience {
    company     : String,
    description : String,
    role        : Role
}

impl Experience {
}

impl WebComponent for Experience {
    fn create_component(attributes:NamedNodeMap) -> Self {
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

web_component!(Experience);
template!(Experience);