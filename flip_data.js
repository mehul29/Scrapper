var casper = require('casper').create({
    verbose: true,
    logLevel: 'error',
    pageSettings: {
        loadImages: false,
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36'
    }
});

var x = require('casper').selectXPath;


//casper.start('http://www.flipkart.com/mobiles/samsung~brand/pr?sid=tyy,4io&otracker=hp_nmenu_sub_electronics_0_Samsung');

/*casper.then(function () {
    this.sendKeys('#ctl00_centreContentPlaceHolder_txtEmail', 'marek@balticproperty.ee');
    this.sendKeys('#ctl00_centreContentPlaceHolder_txtPassword', 'Estateguru1');
//    console.log('Entering form element to textbox');
});

casper.thenClick(x('//*[@id="ctl00_centreContentPlaceHolder_btnLogin"]'), function () {
//    console.log("submit the form");

})
*/

//casper.wait(10000, function () {
//    console.log('after waiting 3 seconds');
//})

//casper.thenClick(x('//*[@id="navTreeItem-Participants"]/a'), function () {
//    console.log("clicking to participant");

//})

casper.start('http://www.flipkart.com/mobiles/pr?sid=tyy,4io&otracker=hp_nmenu_sub_electronics_0_All%20Brands', function() {
    this.scrollToBottom();
});
casper.wait(20000, function () {
  var numTimes = 4, page = 1;
    casper.repeat(numTimes, function () {
 this.scrollToBottom();
        casper.wait(20000, function () {

	})

    })
page=page+1;
})

casper.thenClick(x('//*[@id="show-more-results"]'), function () {
   var numTimes = 2, page = 1;
    casper.repeat(numTimes, function () {
 this.scrollToBottom();
        casper.wait(20000, function () {
casper.capture(page+".png")
	})
casper.thenClick(x('//*[@id="show-more-results"]'), function () {
})
    })
   page++;

})

casper.wait(20000, function () {
// console.log(this.getHTML());
 var numTimes = 50, page = 1;
    casper.repeat(numTimes, function () {
var myXPath='//*[@id="products"]/div['+page+']/div[2]/div/div[1]/a/img'
casper.thenClick(x(myXPath), function () {
 casper.wait(20000, function () {
casper.capture(page+".png");
casper.back();
});
 casper.wait(20000, function () {
});
})
page++;
})
})

casper.run();


//*[@id="show-more-results"]



//test.assertExists("input#gallery_file_0", "File field exists");

