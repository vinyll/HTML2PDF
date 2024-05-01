# Convert an HTML URL into a PDF

_aka_ PDF print any web page

### Requirements

Bun and Weasyprint should be installed on your system

Run the server with the optional 1234 port (3000 by default):

```
bun index.ts 1234
```

Now generate a PDF from a web page and call it "example.pdf": http://localhost:1234/?url=https://www.iana.org/help/example-domains&name=example.pdf
