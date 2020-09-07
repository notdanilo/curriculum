// TODO: get_data should have a default implementation.
// TODO: create_view should be renamed to create_component
// TODO: Can create_component be part of WebComponent trait?
// TODO: webview should be renamed to webcomponent

pub mod prelude;
pub mod curriculum;
pub mod contact;
pub mod info_bar;
pub mod education;
pub mod section;
pub mod experience;
pub mod role;
pub mod knowledge;

prelude::webview_package!();
