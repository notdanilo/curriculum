# Curriculum

This project reads a formatted JSON file and generates a HTML5 curriculum.

## Note

1. This repository contains submodules. Be sure you have them initialized.
2. The Rust source code is unused because web-component was reworked and the Rust part is no longer working.

## Serving

`python serve.py`

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
