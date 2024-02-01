use crate::prelude::*;

#[derive(WebComponent, Serialize, Deserialize, Debug, Default)]
pub struct Education {
    title     : String,
    institute : String
}

impl WebComponent for Education {
    fn create_component(_attributes:NamedNodeMap) -> Self {
        Default::default()
    }
}
