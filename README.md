# Curriculum

This project reads a formatted JSON file and generates a HTML5 curriculum.

## Requirements

```bash
cargo install web-component`
```

## Building

To build the web assembly code, run:
```bash
cargo web-component build
```

## Running the development web server

To initialize the web server at port 8080, run:
```bash
cargo web-component serve
```

## JSON Format

```json
"Curriculum" : {
    "contact" : {
        "name"     : String,
        "title"    : String,
        "address"  : String,
        "phone"    : String,
        "email"    : String,
        "birthday" : String
    },
    "education": {
        "title"     : String,
        "institute" : String
    },
    "experiences" : [
        {
            "company"     : String,
            "description" : String,
            "role"        : {
                "name"       : String,
                "period"     : String,
                "location"   : String,
                "keywords"   : [String],
                "activities" : String
            }
        }
    ],
    "knowledges" : [Knowledge],
    "languages"  : [Knowledge],
    "links"      : [Knowledge]
}

"Knowledge" : {
  "name" : String,
  "info" : [String]
}
```
