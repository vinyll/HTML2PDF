const args = Bun.argv
const port = args[2] || 3000

const server = Bun.serve({
  port,
  async fetch(request) {
    const pdfFile = "/tmp/weasyprint-output"

    const location = new URL(request.url)
    const params = (new URLSearchParams(location.search))
    const filename = params.get("name") || "download.pdf"
    await Bun.spawnSync(`weasyprint ${params.get("url")} ${pdfFile}`.split(" "))
    const response = Bun.file(pdfFile).stream()
    return new Response(response, { headers: {
    	"Content-Type": "application/pdf",
    	"Content-Disposition": `attachment; filename=${filename}`
    }})
  },
})

console.info(`Listening on ${server.url}`)
