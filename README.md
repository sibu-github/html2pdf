# HTML TO PDF

This library generates PDF file of an HTML page.

## Install

```
npm install --save git+https://github.com/sibu-github/html2pdf.git
```

## Usage

```
const generatePDF = require("html2pdf");
const url = "https://medium.com/@sibu.it13/how-many-sexy-primes-are-there-c8af1efcca2a"
const filePath = "test.pdf"
const params = {url, filePath}
try{
    const fileName = await generatePDF(params)
} catch(err){
    console.error(err)
}
```

## Parameters

> generatePDF function takes 3 optional parameters
>
> - htmlStr - this is stringified HTML template
> - url - url of the HTML page
> - filePath - the path of PDF file to be generated. If not provided a PDF file with random name is generated in the current directory.

**NOTE: one of `htmlStr` and `url` are mandatory parameter. Either one of these two should be passed.**
