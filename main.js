
$( document ).ready(function() {

  $(document).on('click', '.item2', function(){
    console.log('ye')

    $('.item1, .item2').toggleClass('item1 item2')

  })

  $(document).on('click', '.item3', function(){
    console.log('ye')

    $('.item1, .item3').toggleClass('item1 item3')

  })

  $(document).on('click', '.item4', function(){
    console.log('ye')

    $('.item1, .item4').toggleClass('item1 item4')

  })

  $(document).on('click', '.item5', function(){
    console.log('ye')

    $('.item1, .item5').toggleClass('item1 item5')

  })


});
var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
//chinese characters - taken from the unicode charset
var chinese = "型ゆ経治きごフ図椅ツソニ増権ラ的選ふい際記ヲケ芸検いッ左森ー指腹ホナヨ面2表のし光奥タテムシ読開サ江分継ユ相印試ニ制侃かさのち。職ねせわろ小点くいぜ堤更けン朝転ロイク稿持ラチコタ太由くびゅ度姫ナホヤラ諭教ネツ竜漢だ今漢種的もさづろ験護占祉謝ぼぎら割フ毎92府数ソコフテ断断士け手男京へじがっ完神ヨ併効都ぜるにぱ用込ク予倉徹ぶ";
//converting the string into an array of single characters
chinese = chinese.split("");
var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
for(var x = 0; x < columns; x++)
  drops[x] = 1;
//drawing the characters
function draw()
{
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#0F0"; //green text
  ctx.font = font_size + "px arial";
  //looping over drops
  for(var i = 0; i < drops.length; i++)
  {
    var text = chinese[Math.floor(Math.random()*chinese.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    ctx.fillText(text, i*font_size, drops[i]*font_size);

    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    if(drops[i]*font_size > c.height && Math.random() > 0.975)
      drops[i] = 0;

    drops[i]++;
  }
}
setInterval(draw, 33);
