var myResults = [];
var myResults1 = [];
var myResults2 = [];
var consumerKey = 'jJKwYVKkqnSkbr63NpK7Vzvkx';
var consumerSecret = 'lTMfwMs7rDxz8vPcxBD7Gy5lDO8GXnlIzPw2d8xVhqa1L4xOTw';

var token = '364475473-kMBumzdzoxKZcduTwFGizG0iyMldRx1CQtcRXm2w';
var tokenSecret = 'KBjBbqUZ0of2SQZDFEqSFof7kQPpENigIh7d3BMUQyCjN';

var cb = new Codebird();

var font;
var txtWidth;

function preload() {
  font = loadFont('https://fonts.gstatic.com/s/newscycle/v14/CSR54z1Qlv-GDxkbKVQ_dFsvWNRevA.ttf');
}

function setup() {

    background(217, 100, 0);

  createCanvas(windowWidth, windowHeight, WEBGL);
  pointLight(40, 200);
  cb.setConsumerKey(consumerKey, consumerSecret);
  cb.setToken(token, tokenSecret);
  
  
  // codebird 
  var params = {
    q: "room",
    result_type: 'recent',
    count: 10
  };
  
    var params1 = {
    q: "window",
    result_type: 'recent',
    count: 10
  };
  
  
    var params2 = {
    q: "door",
    result_type: 'recent',
    count: 10
  };
  
    cb.__call(
    "search_tweets",
    params,
    function(reply) {
      var statuses = reply.statuses;
      for (var i = 0; i < statuses.length; i++) {
        var tweet = statuses[i];
        if (!tweet.retweeted_status) {
          //print(tweet.text);
          //fill('#' + tweet.user.profile_background_color);

          fill(255/i);
          
          //let myResults = statuses;
         myResults = tweet.text;
          let words = tweet.text.split(" ");
          console.log(words);
          let hyphenated = words.join("-")
         // text(tweet.text , 0, i * 120);
        }
      }
      // print the max_id which helps if you want to grab pages of data
      //print('max_id: ' + reply.search_metadata.max_id);

    }
  );
  
  
      cb.__call(
    "search_tweets",
    params1,
    function(reply) {
      var statuses = reply.statuses;
      for (var i = 0; i < statuses.length; i++) {
        var tweet1 = statuses[i];
        if (!tweet1.retweeted_status) {


          fill(255);
          
          //let myResults = statuses;
         myResults1 = tweet1.text;
          //let words = tweet1.text.split(" ");
          //console.log(words);
          //let hyphenated = words.join("-")
         // text(tweet.text , 0, i * 120);
        }
      }
      // print the max_id which helps if you want to grab pages of data
      //print('max_id: ' + reply.search_metadata.max_id);

    }
  );
  
  
  cb.__call(
    "search_tweets",
    params2,
    function(reply) {
      var statuses = reply.statuses;
      for (var i = 0; i < statuses.length; i++) {
        var tweet2 = statuses[i];
        if (!tweet2.retweeted_status) {
          //print(tweet.text);
          //fill('#' + tweet.user.profile_background_color);

          fill(255/i);
          
          //let myResults = statuses;
         myResults2 = tweet2.text;
          let words = tweet2.text.split(" ");
          //console.log(words);
          let hyphenated = words.join("-")
         // text(tweet.text , 0, i * 120);
        }
      }
      // print the max_id which helps if you want to grab pages of data
      //print('max_id: ' + reply.search_metadata.max_id);

    }
  );
  
  
 // openGL 
  textFont(font);
  textSize(10);
  textAlign(CENTER, CENTER);
  fill(255);
  colorMode(HSB);
    //background(217, 100, 0);

  
}                         //set up

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var P1 = 3;
var P2 = 5;
//var txt = 'p5.js  ';
var N = Math.floor(900);

function draw() {
  
  
    fill(217, 100, 0);
plane (3*width, 3*height);
  //colorMode(RGB);
  //background(217, 100, 0);
  var txt = myResults ;              //scope issue 
  var txt1 = myResults1;
  var txt2 = myResults2;
  //print(txt);
  //delay(2000);
  //background(20);
	rotateY(millis()/13000);
	
  rotateX(1);
	for (var x = 0; x < N; x ++) {
		var n = 2 * PI * P1 * P2 * x / N - millis()/1700;
		
		//fill(i * 40 / N, 255, 255, i);
        fill(255, x/N);
		
		push();
		rotateY(n/P1);
		translate(0, 0, 200);
		rotateX(n/P2);
		translate(0, 0, 100);
		rotateZ(-PI/3);
	//text(txt, 0, 0);
      var tx1 = String(txt1);
      text(tx1.charAt(x % tx1.length), 0, 0);
		pop();
	}
  
  	for (var i = 0; i < N; i +=2) {
		var y = 2 * PI * P1 * P2 * i / N - millis()/2700;
		
		fill(195, 85, 88, 30);
        //fill(255, i/N);
		
		push();
		rotateY(y/P1);
		translate(0, 0, -200);
		rotateX(-2*y/P2);
		translate(0, 0, 100);
		rotateZ(-PI/3+500);
        var tx = String(txt);
        text(tx.charAt(i % tx.length), 0, 0);
		//text(txt, 0, 0);
		pop();
  //         fill(0);
  // rect(width/2, height/2, width, height);

	}
  
    	for (var z = 0; z < N; z +=1) {
		var v = 2 * PI * P1 * P2 * i / N - millis()/2700;
		
		fill(195, 25, 88, 30);
        //fill(255, i/N);
		
		push();
		rotateY(v/P1);
		translate(0, 0, -200);
		rotateX(-5*v/P2);
		translate(0, 0, 100);
		rotateZ(PI/3+500);
        var tx2 = String(txt2);
        text(tx2.charAt(z % tx2.length), 40, 0);
		//text(txt, 0, 0);
		pop();
  //         fill(0);
  // rect(width/2, height/2, width, height);

	}
  
  print(tx, tx1);

}



(function() {
  var script = document.createElement('script');
  script.onload = function() {
    var stats = new Stats();
    stats.domElement.style.cssText =
      'position:fixed;left:0;top:0;z-index:10000';
    document.body.appendChild(stats.domElement);
    requestAnimationFrame(function loop() {
      stats.update();
      requestAnimationFrame(loop);
    });
  };
  script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
  document.head.appendChild(script);
})();
