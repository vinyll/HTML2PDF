FROM oven/bun:1-alpine

RUN apk add --no-cache weasyprint

WORKDIR /app
COPY . .

CMD bun start
