use crate::prelude::*;

#[derive(WebComponent, Serialize, Deserialize, Debug, Default)]
pub struct InfoBar {
    black : String,
    white : String
}

impl WebComponent for InfoBar {
    fn create_component(attributes:NamedNodeMap) -> Self {
        let black = attributes.get_named_item("black").map(|v| v.value()).unwrap_or("".into());
        let white = attributes.get_named_item("white").map(|v| v.value()).unwrap_or("".into());
        Self {black,white}
    }
}

template!(InfoBar);
