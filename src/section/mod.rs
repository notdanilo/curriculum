use crate::prelude::*;

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct Section {
    name : String
}

impl WebComponent for Section {
    fn create_component(attributes:NamedNodeMap) -> Self {
        let name = attributes.get_named_item("name").unwrap().value().into();
        Self {name}
    }
}

web_component!(Section);
template!(Section);
