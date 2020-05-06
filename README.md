# Curriculum

This project reads a formatted JSON file and generates a HTML5 curriculum.

## Requirements

1. Python3

## Building

To build the web assembly code, run:
```bash
./scripts/build.sh
```

## Running

To initialize a web server at port 80, run:
```bash
sudo ./scripts/server.py
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
