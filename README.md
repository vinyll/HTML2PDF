# Convert a Web Page Into a PDF

_aka_ easily download print a web page as a PDF.

## Quickstart

1. Start the server: `docker compose up`
2. Print the example.org page: 
http://localhost:3000/?url=http://example.org&name=mysite.pdf

## Manual Setup

[Bun](https://bun.sh/) and [WeasyPrint](https://weasyprint.org/) should be installed on your system.

Run the server on port 3000:
```
bun index.ts
```

You can change the port by passing it as argument: `bun index.ts 1234` to run on port 1234.

Now generate a PDF from a web page and call it "example.pdf": http://localhost:3000/?url=https://www.iana.org/help/example-domains&name=example.pdf


## Why This Script

I needed a PDF printer that could be simple, light and quick to run.

This script on **only 20 lines of code with no lib dependency**!
