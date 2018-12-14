"use strict";
const puppeteer = require("puppeteer");

module.exports = (function() {
  /**
   * generate a unique random file name
   * this file name will be used to save the newly created pdf file
   */
  const getRandomFileName = () =>
    new Date().getTime() +
    "-" +
    Math.floor(Math.random() * 100000).toString(30) +
    ".pdf";

  /**
   * generate the pdf from html template passed in the parameter
   */
  const generatePDF = async params => {
    const { htmlStr, url, filePath } = params;
    if (!htmlStr && !url) {
      throw new Error("htmlStr or url is required");
    }

    const pdfUrl = url
      ? url
      : "data:text/html;base64," +
        new Buffer(htmlStr, "utf-8").toString("base64");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(pdfUrl, { waitUntil: "networkidle0" });
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });

    // if filePath is not provided then save the pdf with random file name
    const fn = filePath ? filePath : getRandomFileName();
    await page.pdf({ path: fn, format: "A4" });
    await browser.close();
    return fn;
  };

  return generatePDF;
})();
