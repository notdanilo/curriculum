use crate::prelude::*;
use crate::contact::Contact;
use crate::education::Education;
use crate::experience::Experience;
use crate::knowledge::Knowledge;

#[derive(Serialize, Deserialize, Debug, Default)]
pub struct Curriculum {
    contact     : Contact,
    education   : Education,
    experiences : Vec<Experience>,
    knowledges  : Vec<Knowledge>,
    languages   : Vec<Knowledge>,
    links       : Vec<Knowledge>
}


impl Curriculum {
    fn create_view(_attributes:NamedNodeMap) -> Self {
        let json     = include_str!("curriculum.json");
        if let Ok(object) = serde_json::from_str(&json) {
            object
        } else {
            Default::default()
        }
    }
}

impl WebView for Curriculum {
    fn get_data(&self) -> String {
        json::to_string(&self).unwrap()
    }
}

webview!(Curriculum);
template!(Curriculum);
