use actix_web::{App, HttpServer};
use actix_files as fs;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Serving on http://127.0.0.1:8080");
    HttpServer::new(|| {
        App::new()
            // Serve static files from a directory
            .service(fs::Files::new("/", "./curriculum").index_file("index.html"))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}