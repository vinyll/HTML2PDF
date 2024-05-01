# Convert an HTML URL into a PDF

_aka_ PDF print any web page

### Requirements

[Bun](https://bun.sh/) and [WeasyPrint](https://weasyprint.org/) should be installed on your system

Alternatively you can run via [Docker](https://docs.docker.com/) or [Docker Compose](https://docs.docker.com/compose/) if installed:

```
docker compose up
```

### Running the project locally

If you don't want to run via Docker Compose as detailed above you can run the server with the optional 1234 port (3000 by default):

```
bun index.ts 1234
```

Now generate a PDF from a web page and call it "example.pdf": http://localhost:1234/?url=https://www.iana.org/help/example-domains&name=example.pdf

### Run
