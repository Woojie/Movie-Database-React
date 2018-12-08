const   request = require('request'),
cheerio = require('cheerio'),
express = require('express'),
app = (express()),
bodyParser = require('body-parser'),
cors = require('cors'),
port = process.env.PORT || 3030




app.listen(port, ()=>{
  console.log(`Listening on ${port}`)
})

  let info;
  let table = [];
  let = url = `https://www.google.ca/search?q=shawshank+redemption&source=lnms&tbm=nws`
  request(url, function (error, response, body) {
      if (error) {
          console.log("We've encountered an error. " + error)
      }

      let $ = cheerio.load(body)

      $(".r").each(function (i, elem) {
      let url = $(this).html().match(/q=(.*)/)
        table[i] = {
          text:$(this).text(),
          url: url[1].replace(/&(.*)/, ""),
        }
      })

      $(".st").each(function (i, elem) {
        table[i] = Object.assign(table[i], {description: $(this).text()})
      })

      $(".slp").each(function (i, elem) {
        let source = $(this).text().replace(/\s-(.*)/, "")
        let date = $(this).text().match(/-\s(.*)/)
        table[i] = Object.assign(table[i], {
          source: source,
          date: date[1]
        })
      })
  })

  app.get('/', (req, res)=>{
    res.format({
      text: () => {
        res.send(table)
      }
    })
  })




