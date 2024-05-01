FROM oven/bun:1-alpine

RUN apk add --no-cache weasyprint \
    font-terminus font-noto font-noto-extra

COPY . /app
WORKDIR /app

CMD bun start
