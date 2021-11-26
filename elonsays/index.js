//Saving the quotes as an array
const quoteArray = [
  'When something is important enough, you do it even if the odds are not in your favor.',
  "Some people don't like change, but you need to embrace change if the alternative is disaster.",
  'Failure is an option here. If things are not failing, you are not innovating enough.',
  "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design.",
  'Persistence is very important. You should not give up unless you are forced to give up.',
  "I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.",
  "There's a tremendous bias against taking risks. Everyone is trying to optimize their ass-covering.",
  "It's OK to have your eggs in one basket as long as you control what happens to that basket.",
  'Brand is just a perception, and perception will match reality over time. Sometimes it will be ahead, other times it will be behind. But brand is simply a collective impression some have about a product."',
  "I don't think it's a good idea to plan to sell a company.",
  "It is a mistake to hire huge numbers of people to get a complicated job done. Numbers will never compensate for talent in getting the right answer (two people who don't know something are no better than one), will tend to slow down progress, and will make the task incredibly expensive.",
  'A company is a group organized to create a product or service, and it is only as good as its people and how excited they are about creating. I do want to recognize a ton of super-talented people. I just happen to be the face of the companies.',
  'People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working.',
  "If you're co-founder or CEO, you have to do all kinds of tasks you might not want to do... If you don't do your chores, the company won't succeed... No task is too menial.",
  'I say something, and then it usually happens. Maybe not on schedule, but it usually happens.',
  "I do think there is a lot of potential if you have a compelling product and people are willing to pay a premium for that. I think that is what Apple has shown. You can buy a much cheaper cell phone or laptop, but Apple's product is so much better than the alternative, and people are willing to pay that premium.",
  "I don't spend my time pontificating about high-concept things; I spend my time solving engineering and manufacturing problems.",
  "I always invest my own money in the companies that I create. I don't believe in the whole thing of just using other people's money. I don't think that's right. I'm not going to ask other people to invest in something if I'm not prepared to do so myself.",
  "My biggest mistake is probably weighing too much on someone's talent and not someone's personality. I think it matters whether someone has a good heart.",
  "I don't create companies for the sake of creating companies, but to get things done.",
  "I don't believe in process. In fact, when I interview a potential employee and he or she says that 'it's all about the process,' I see that as a bad sign. The problem is that at a lot of big companies, process becomes a substitute for thinking. You're encouraged to behave like a little gear in a complex machine. Frankly, it allows you to keep people who aren't that smart, who aren't that creative.",
  'Starting and growing a business is as much about the innovation, drive, and determination of the people behind it as the product they sell.',
  'The first step is to establish that something is possible; then probability will occur.',
  'There are really two things that have to occur in order for a new technology to be affordable to the mass market. One is you need economies of scale. The other is you need to iterate on the design. You need to go through a few versions.',
  "Talent is extremely important. It's like a sports team, the team that has the best individual player will often win, but then there's a multiplier from how those players work together and the strategy they employ.",
  "Work like hell. I mean you just have to put in 80 to 100 hour weeks every week. [This] improves the odds of success. If other people are putting in 40 hour workweeks and you're putting in 100 hour workweeks, then even if you're doing the same thing, you know that you will achieve in four months what it takes them a year to achieve.",
  "I've actually not read any books on time management.",
  "I'm interested in things that change the world or that affect the future and wondrous, new technology where you see it, and you're like, 'Wow, how did that even happen? How is that possible?'",
  "Really pay attention to negative feedback and solicit it, particularly from friends. ... Hardly anyone does that, and it's incredibly helpful.",
  "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.",
  "What makes innovative thinking happen?... I think it's really a mindset. You have to decide.",
  "People should pursue what they're passionate about. That will make them happier than pretty much anything else.",
  'Being an entrepreneur is like eating glass and staring into the abyss of death.',
  "I wouldn't say I have a lack of fear. In fact, I'd like my fear emotion to be less because it's very distracting and fries my nervous system.",
  "If you're trying to create a company, it's like baking a cake. You have to have all the ingredients in the right proportion.",
  'I think most of the important stuff on the Internet has been built. There will be continued innovation, for sure, but the great problems of the Internet have essentially been solved.',
  'I think we have a duty to maintain the light of consciousness to make sure it continues into the future.',
  "When Henry Ford made cheap, reliable cars, people said, 'Nah, what's wrong with a horse?' That was a huge bet he made, and it worked.",
  "When somebody has a breakthrough innovation, it is rarely one little thing. Very rarely, is it one little thing. It's usually a whole bunch of things that collectively amount to a huge innovation.",
  "You shouldn't do things differently just because they're different. They need to be... better.",
  "You have to say, 'Well, why did it succeed where others did not?'",
  "I would just question things... It would infuriate my parents... That I wouldn't just believe them when they said something 'cause I'd ask them why. And then I'd consider whether that response made sense given everything else I knew.",
  "It's very important to like the people you work with, otherwise life [and] your job is gonna be quite miserable.",
  "We have a strict 'no-assholes policy' at SpaceX.",
  'I think the best way to attract venture capital is to try and come up with a demonstration of whatever product or service it is and ideally take that as far as you can. Just see if you can sell that to real customers and start generating some momentum. The further along you can get with that, the more likely you are to get funding.',
  'Disruptive technology where you really have a big technology discontinuity... tends to come from new companies.',
  "As much as possible, avoid hiring MBAs. MBA programs don't teach people how to create companies.",
  "Don't delude yourself into thinking something's working when it's not, or you're gonna get fixated on a bad solution.",
  'If something has to be designed and invented, and you have to figure out how to ensure that the value of the thing you create is greater than the cost of the inputs, then that is probably my core skill.',
  "I always have optimism, but I'm realistic. It was not with the expectation of great success that I started Tesla or SpaceX... It's just that I thought they were important enough to do anyway."
]


var pbox = document.getElementById("quote-b");
var pboxcontainer = document.getElementById('quote-list-box');
var qdisplay = document.getElementById('quote-display');
var qdisplaycontainer = document.getElementById('quote-box');
var state = false;

//Displaying an individual quote in the box
document.getElementById('refresh').addEventListener("click",function(){
  var randInt = Math.floor(Math.random()*50);
  var l = quoteArray[randInt].length;
  qdisplay.innerHTML = quoteArray[randInt]+" - Elon Musk";
  if(l<150){
    qdisplaycontainer.style.height="100px";
    qdisplay.style.height="70px";
  }
  else if(l > 150 && l<200){
    qdisplaycontainer.style.height="130px";
    qdisplay.style.height="100px";
  }
  else if(l > 200){
    qdisplaycontainer.style.height="180px";
    qdisplay.style.height="150px";
  }
});


//Displaying the list of all quotes
document.getElementById('lst-btn').addEventListener("click",function(){
  console.log("Button Pressed!");
  if(state){
    document.getElementById('hand').style.transform = "rotate(90deg)";
    pbox.style.height ="10px";
    pboxcontainer.style.height = "50px";
    pbox.innerHTML = "";
    state = false;
  }

  else{
    document.getElementById('hand').style.transform = "rotate(180deg)";
    pbox.style.height= "200px";
    pboxcontainer.style.height = "260px";
    var s = "<hr style='height:2px;'>";
    for(var i=0;i<quoteArray.length;i++){
      s+= (quoteArray[i]+"<br><hr>");
    }
    pbox.innerHTML = s;
    state = true;
  }
});
