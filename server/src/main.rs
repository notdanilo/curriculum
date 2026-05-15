use std::env::Args;

use actix_files as fs;
use actix_web::{App, HttpServer};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let mut args: Args = std::env::args();
    let port = args.nth(1).map_or(8080, |arg| arg.parse().unwrap());
    let address = format!("127.0.0.1:{}", port);
    println!("Serving on http://{}", address);
    HttpServer::new(|| {
        App::new()
            // Serve static files from a directory
            .service(fs::Files::new("/", "./curriculum").index_file("index.html"))
    })
    .bind(address)?
    .run()
    .await
}
