<template>

  <NavLoggedIn/>


  <div class="d-flex flex-row " id="controllers">

    <div class="d-flex flex-row ">
      <div class="p-2 text-center">

        <button type="button" id="scrollText" @click="scrollToBottom"
                class="p-2 btn btn-light btn-circle text-black btn-xl"><i class="fa-solid fa-arrow-down"></i></button>
        <label for="scrollText">Start/Stop</label>
      </div>
      <div class="p-2 text-center">

        <button type="button" id="flipTextVert" @click="flipTextV"
                class="p-2 btn btn-light btn-circle text-black btn-xl">
          <i class="fa-solid fa-arrows-up-down"></i></button>
        <label for="flipTextVert">Text Verticaal</label>
      </div>
      <div class="p-2 text-center">

        <button type="button" id="flipTextHorz" @click="flipTextH"
                class=" p-2 btn btn-light btn-circle text-black btn-xl"><i class="fa-solid fa-arrows-left-right"></i>
        </button>
        <label for="flipTextHorz">Text Horizentaal</label>
      </div>
    </div>
    <div class="slidecontainer"><p id="demo"></p>
      <span style="padding: 1rem">Lettertypegrootte: {{ dataFontValue }}  </span>
      <input @input="fontSlider()" v-model="dataFontValue" min="1" max="100" type="number" id="myRange">
    </div>

    <div class="slidecontainer"><p id="speedOutPut"></p>
      <span style="padding: 1rem">Scrollsnelheid: </span>
      <input @input="speedSlider()" type="number" min="1" max="20" v-model="dataSpeedValue" id="speedRange"
             pattern="[0-9]+">
    </div>
    <div class="d-flex align-items-start">
      <span>
Achtergrond kleur</span>
      <input v-model="BackGroundColorPicked" @change="changeBackGroundColor()" class="m-2" id="colorpicker"
             type="color">

      <span>Letterkleur</span>
      <input @change="changeFontColor()" v-model="FontColorPicked" class="m-2" id="fontColorpicker" type="color">

    </div>

  </div>
  <h4 v-if="warningFontSize === true" style="padding: 1rem ; color: red"> {{ warningEmptyText }} </h4>
  <h4 v-if="warningScrollSpeed === true" style="padding: 1rem ; color: red"> {{ warningEmptyScrollSpeedText }} </h4>
  <h1 class="h1 text-center" id="pageHeaderTitle">PodCast: Spiderman</h1>
  <div class="container " id="textDiv">


    <br/>

    <p id="script"> Peter Parker/Spider-Man: Who am I? You sure you want to know? The story of my life is not for the faint of heart. If somebody said it was a happy little tale, if somebody told you I was just an average ordinary guy, not a care in the world, somebody lied. But let me assure you, this like any story worth telling, is all about a girl. That girl. The girl next-door. Mary Jane Watson. The woman I've loved since before I even liked girls. I'd like to tell you that's me next to her. Aw, heck, I'd even take him.

      Peter Parker/Spider-Man: Hey! Stop the bus! That's me. Tell him to stop! Please! Stop! Hey! Stop the bus!

      Mary Jane Watson: Stop the bus! He's been chasing us since Woodhaven Boulevard.

      Flash's Crony: Catch a cab, Parker!

      Peter Parker/Spider-Man: Thank you. I'm sorry I'm late.

      Flash's Crony #2: What a geek!

      Girl on Bus: Don't even think about it.

      Flash's Crony: You're so lame, Parker.

      Girl: Would you date him?

      Teacher: Midtown High seniors. No wandering. Proceed direct... Knock it off. Remember, it is a privilege to be here. We're guests of Columbia University's Science Department. So behave accordingly. Let's not have a repeat of our trip to the planetarium. Come on people, stay together. Proceed up the steps and into the building.

      Mary Jane's friend: MJ.

      Mary Jane Watson: Where were you?

      Mary Jane's friend: Checking out the library.

      Mary Jane Watson: Looking at the books.

      Mary Jane's friend: Yeah, right.

      Harry Osborn: Charles, can we drive around the corner, please?

      Norman Osborn/Green Goblin: Why? The entrance is right there.

      Harry Osborn: Dad these are public school kids, I'm not showing up for the field trip in a Rolls.

      Norman Osborn/Green Goblin: You want me to trade in my care for a Jetta just because you flunked out of every private school I ever sent you to?

      Harry Osborn: It wasn't for me.

      Norman Osborn/Green Goblin: Of course it was. Don't ever be ashamed of who you are.

      Harry Osborn: I'm not ashamed of who I am. It's just...

      Norman Osborn/Green Goblin: Just what, Harry?

      Harry Osborn: Forget it.

      Harry Osborn: Pete!

      Peter Parker/Spider-Man: Hi, Harry.

      Harry Osborn: Hey, man. What's up?

      Norman Osborn/Green Goblin: Harry! Won't you be needing this?

      Harry Osborn: Thanks Dad.

      Harry Osborn: Um, Peter may I introduce my father, Norman Osborn.

      Norman Osborn/Green Goblin: I've heard so much about you.

      Peter Parker/Spider-Man: It's a great honour to meet you sir.

      Norman Osborn/Green Goblin: Harry tells me you're quite the science whiz. Y'know, I'm something of a scientist myself.

      Peter Parker/Spider-Man: I read all your research on nanotechnology. Really Brilliant.

      Norman Osborn/Green Goblin: You understood it?

      Peter Parker/Spider-Man: Yes, I wrote a paper on it.

      Norman Osborn/Green Goblin: Impressive. Your parents must be very proud.

      Peter Parker/Spider-Man: I live with my aunt and uncle, they are proud.

      Teacher: Hey, you two! Let's move!

      Nice to meet you. - Hope to see you again.

      Peter Parker/Spider-Man: He doesn't seem so bad.

      Harry Osborn: Not if you're a genius. I think he wants to adopt you.

      Guide: There are over 32,000 known species of spider in the world. They're in the order Araneae, divided into three suborders.

      Peter Parker/Spider-Man: That's amazing! This is the most advanced electron microscope in the eastern seaboard. It's unreal.

      Guide: Arachnids from all three groups possess varying strengths which help them in their constant search for food. For example, the Delena spider, family Sparassidae has the ability to jump to catch its prey.

      Peter Parker/Spider-Man: For the school paper?

      Guide: Next, we have the net web spider, family Filistatidae genus Kukulcania. It spins an intricate funnel shaped web whose strands have a tensile strength proportionately equal to the type of high tension wire.

      Harry Osborn: Leave him alone.

      Flash's Crony: Or what?

      Flash Thompson: Or his father will fire your father.

      Flash Thompson: What's Daddy gonna do? Sue me?

      Teacher: What is going on? The next person who talks will fail this course. I kid you not.

      Guide: This grass spider...

      Teacher: Let's go.

      Guide: ...hunts using reflexes with nerve-conduction velocity so fast that some researchers believe it almost borders on precognition.

      Peter Parker/Spider-Man: Those guys are jerks.

      Guide: ...an imminent awareness of danger a spider-sense.

      Harry Osborn: Hey, look at that spider.

      Peter Parker/Spider-Man: Some spiders change colors to blend into their environment. It's a defense mechanism.

      Harry Osborn: Peter, what makes you think I'd want to know that?

      Peter Parker/Spider-Man: Who wouldn't?

      Guide: Over five painstaking years, Columbia's genetic research facility has...

      Harry Osborn: You gonna talk to her now?

      Peter Parker/Spider-Man: Oh, no. Come on. You talk to her.

      Guide: With these DNA blueprints, we have begun what was once thought impossible.

      Mary Jane Watson: Disgusting.

      Harry Osborn: Yeah, hateful little things.

      Mary Jane Watson: I love them!

      Harry Osborn: Yeah, me too.

      Harry Osborn: You know, spiders can change their color to blend into their environment.

      Mary Jane Watson: Really?

      Harry Osborn: Yeah, it's a defense mechanism.

      Mary Jane Watson: Cool.

      Guide: ...transfer RNA to encode an entirely new genome combining the genetic information from all three into these 15 genetically designed super-spiders.

      Mary Jane Watson: There's 14.

      Guide: I beg your pardon? One's missing.

      Harry Osborn: Yeah.

      Guide: I guess the researchers are working on that one.

      Harry Osborn: Do you know that this is the largest electron microscope on the eastern seaboard?

      Teacher: You were talking throughout that woman's entire presentation. Let's talk about how we listen. I don't know what it's like at those fancy private schools, but at Midtown High...

      Peter Parker/Spider-Man: Hey, Could I take your picture? I need one with a student in it.

      Mary Jane Watson: Sure, yeah.

      Peter Parker/Spider-Man: Great.

      Mary Jane Watson: Where do you want me? Over here?

      Peter Parker/Spider-Man: Yeah, that's great.

      Mary Jane Watson: Don't make me look ugly.

      Peter Parker/Spider-Man: That's impossible.

      Peter Parker/Spider-Man: Perfect. - Is that good? - Great. That's great. MJ, let's go!

      Peter Parker/Spider-Man: Wait. Thanks!

      Teacher: Parker, let's do it.

      Mendel Stromm: We've solved the horizon glide and the multi-G balance issues.

      General Slocum: I've already seen the glider. That's not what I'm here for.

      Norman Osborn/Green Goblin: General Slocum, good to see you again. Mr. Balkan, Mr. Fargas.

      Maximilian Fargas: Norman.

      Henry Balkan: Mr. Osborn.

      Norman Osborn/Green Goblin: Always a pleasure to have our board of directors pay us a little visit.

      General Slocum: I want to see the progress report on Human performance enhancers.

      Mendel Stromm: We tried vapour inhalation with rodent subjects. They showed an 800 percent increase in strength.

      General Slocum: Any side effects?

      Mendel Stromm: In one trial yes.

      Norman Osborn/Green Goblin: It was an aberration. All the tests since have been successful.

      General Slocum: In the trial that went wrong, what happen? What were the side effects?

      Mendel Stromm: Violence, aggression and insanity.

      General Slocum: What do you recommend?

      Norman Osborn/Green Goblin: That was only one test. With the exception of Dr. Stromm our entire staff certifies the product ready for human testing.

      General Slocum: Dr. Stromm?

      Mendel Stromm: We need to take the whole line back to formula.

      Norman Osborn/Green Goblin: Back to formula?

      General Slocum: Dr. Osborn. I'm going to be frank with you. I never supported your program. We have my predecessor to thank for that.

      Henry Balkan: Norman, the General gave the go-ahead to Quest Aerospace to build a prototype of their exoskeleton design. They test in two weeks.

      General Slocum: And if your so-called performance enhancers have not had a successful human trial by that date I'm gonna pull your funding. I'm going to give it to them. Gentlemen. Ladies.

      Ben Parker: And the Lord said, "Let there be light." And voile! There is light. Forty soft, glowing watts of it.

      May Parker: Good boy. God will be thrilled. Just don't fall on your ass.

      Ben Parker: I'm already on my ass, May. When the plant's senior electrician is laid off after 35 years what would you call it? I am on my ass. Hand me that dish. The green one. The corporation is downsizing the people and upsizing their profits.

      May Parker: Oh, Ben, you'll get another job somewhere.

      Ben Parker: Well, let's look in the paper and see. There are the want ads. What do we got here? Computer... Computer salesman, computer engineer, computer analyst. My Lord, even the computers need analysts these days. I'm 68. I'm too old for computers, and besides, I have a family to provide for.

      May Parker: I love you. And Peter loves you. You're the most responsible man I've ever known. We've been down-and-out before. But somehow, we survive. Hi, sweetie. You're just... Just in time for dinner. How you doing? How was the field trip?

      Peter Parker/Spider-Man: I don't feel well. I'm gonna go to sleep.

      Mary Parker: You won't have a bite?

      Peter Parker/Spider-Man: No thanks, had a bite.

      Ben Parker: Did you get some pictures, Peter?

      Peter Parker/Spider-Man: I gotta crash. Everything's fine.

      What's that all about?

      Guide: In this recombination lab we use synthesized transfer RNA to encode an entirely new genome combining the genetic information from all three into these 15 genetically designed super-spiders.

      Mendel Stromm: Dr. Osborn, please. The performance enhancers aren't ready. The data just doesn't justify this test. Now, I'm asking you for the last time. We can't do this.

      Norman Osborn/Green Goblin: Don't be a coward. Risks are part of laboratory science. Let me reschedule, with the proper medical staff and a volunteer.

      Mendel Stromm: If you just give me two weeks...

      Norman Osborn/Green Goblin: Two weeks? In two weeks We'll have lost the contract to Quest and Oscorp will be dead.

      Norman Osborn/Green Goblin: Sometimes you gotta do things yourself. Get me the Promachloraperazine.

      Mendel Stromm: For what?

      Norman Osborn/Green Goblin: It begins catalyzation when the vapor hits the bloodstream and we've barely tapped the vastness of human potential.

      Norman Osborn/Green Goblin: Oh, that's cold.

      Mendel Stromm: Norman? Norman! Oh, my God. Oh, my God! Oh, my God! Norman!

      Norman Osborn/Green Goblin: Back to formula?

      Peter Parker/Spider-Man: Weird.

      May Parker: Peter?

      Peter Parker/Spider-Man: Yeah?

      May Parker: Are you all right?

      Peter Parker/Spider-Man: I'm fine.

      May Parker: Any better this morning? Any change?

      Peter Parker/Spider-Man: Change? Yep. Big change.

      May Parker: Well, hurry up. You're going to be late.

      Peter Parker/Spider-Man: Right. Okay.

      May Parker: Goodness me!

      Ben Parker: Jeez. I thought you were sick.

      Peter Parker/Spider-Man: I got better. - See? - Bye, guys.

      May Parker: You haven't eaten anything, have you got your lunch money?

      Peter Parker/Spider-Man: Yeah I've got it.

      Ben Parker: Hey Michaelangelo don't forget we're painting the kitchen right after school. You got it?

      Peter Parker/Spider-Man: Sure, Uncle Ben. Don't start without me.

      Ben Parker: And don't start up with me.

      Ben Parker: Teenagers. Raging hormones. They never change.

      Philip Watson: You're trash! You're always going to be trash just like her.

      Mary Jane Watson: I have to go to school.

      Philip Watson: Who's stopping you?

      Peter Parker/Spider-Man: Hi, MJ. Hey, MJ I don't know if you realize this, but we've been neighbors since I was 6. And I was wondering if we could get together sometime? I got the car. Hop in. Do something fun? Or, I don't know. I thought it'd be time to get to know each other. Or not.

      Student: Sorry, Parker, the bus is full!

      Peter Parker/Spider-Man: Stop the bus!

      Flash's Crony: Catch a cab!

      Peter Parker/Spider-Man: Tell him to stop.

      Girl: Check him out! Dork!

      Harry Osborn: Dad! Dad, are you all right?

      Norman Osborn/Green Goblin: Harry.</p>

  </div>

</template>

<script>
import $ from "jquery";
import NavLoggedIn from "@/components/NavLoggedIn";

$(window).scrollTop(0);
let fontValue = 10;
let speedValue = 1;
let backGroundColor = '#000000';
let fontColor = '#ffffff';
// let speedValue = 1;
let play = false;
let flipH = false;
let flipV = false
let currentScroll = 0;
let speed = 1;


export default {
  name: 'project-view',
  components: {
    NavLoggedIn
  },
  data: function () {
    return {
      BackGroundColorPicked: '#000000',
      FontColorPicked: '#ffffff',
      project: [],
      users: [],
      dataFontValue: 20,
      dataSpeedValue: 1,
      warningFontSize: false,
      warningScrollSpeed: false,
      warningEmptyText: "Lettertypegrootte mag niet leeg zijn",
      warningEmptyScrollSpeedText: "Scrollsnelheid mag niet leeg zijn",


    }
  },
  methods: {
    // This function is called when the flipTextH button is pressed. It toggles the flipH variable. If the flipH variable
    // is true it adds the class flipTextH to the textDiv. If the flipH variable is false it removes the class flipTextH
    // from the textDiv.

    start() {

      play = true

    },

    stop() {

      play = false

    },


    fontSlider() {
      fontValue = this.dataFontValue
      this.warningFontSize = fontValue === '';
      if (fontValue > 100) {
        fontValue = 100
      }

      if (fontValue === 0) {
        fontValue = 5
      }

      this.changeFontSize();
    },
    changeFontSize() {
      let text = document.getElementById("script")
      text.style.fontSize = `${this.dataFontValue}px`

    },
    speedSlider() {

      speedValue = this.dataSpeedValue
      this.warningScrollSpeed = speedValue === '';
      if (speedValue === 0) {
        speedValue = 1
      }

      if (speedValue > 10) {
        speedValue = 10
      }


      this.changeSpeed();
    },
    changeSpeed() {

      // speed = parseInt(speed)
      speed = this.dataSpeedValue

    },
    flipTextH() {

      const text = $('#script')
      flipH = !flipH;
      if (flipH == true) {
        text.addClass('flipTextH');
      } else {
        text.removeClass('flipTextH');
      }

    },

    flipTextV() {

      const text1 = $('#script')
      flipV = !flipV;
      if (flipV) {

        text1.addClass('flipTextV');
      } else {
        text1.removeClass('flipTextV');
      }

    },
    // This function is called when the scrollToBottom button is pressed. It checks if the flipV variable is true. If it is
    // true it sets the currentScroll variable to the height of the document minus the height of the window. It then
    // scrolls to the currentScroll position. If the flipV variable is false it sets the currentScroll variable to the
    // height of the document minus the height of the window. It then scrolls to the currentScroll position. It then
    // toggles the play variable.

    scrollToBottom() {

      if (flipV) {
        currentScroll = document.body.scrollHeight - $(window).height()
        $(window).scrollTop(currentScroll + speed)
      }
      if (play === true) {
        this.stop()
      } else {
        this.start()
      }
      // play=!play;


    },
    changeBackGroundColor() {
      backGroundColor = this.BackGroundColorPicked

      document.body.style.backgroundColor = backGroundColor;

    },
    changeFontColor() {
      fontColor = this.FontColorPicked

      document.body.style.color = fontColor;
    },
    setNewBgColor() {
      document.body.style.backgroundColor = this.BackGroundColorPicked;
    },
    setNewFontColor() {
      document.body.style.color = this.FontColorPicked;
    },
    resetColor() {
      this.BackGroundColorPicked = '#000000';

      this.FontColorPicked = '#ffffff';
      document.body.style.background = this.BackGroundColorPicked;
      document.body.style.color = this.FontColorPicked
    },
    refreshControls() {
      this.changeFontSize();
      this.changeFontSize();
    }


  },
  created() {


  },
  async mounted() {


    let controllers = document.getElementById("controllers");
    let sticky = controllers.offsetTop;
    const that = this;
    // Getting the data from the api.



    // console.log(scroller)
    setInterval(scroll, 30);
    window.onscroll = function () {
      stickyControllers()
    };


    // This function is called when the page is scrolled. It checks if the scroll position is greater than the height of
    // the controllers. If it is it adds the class sticky to the controllers. If it is not it removes the class sticky from
    // the controllers.
    function stickyControllers() {
      if (window.scrollY >= sticky) {

        controllers.classList.add("sticky")

      } else {
        controllers.classList.remove("sticky");
      }
    }


    // This function is called every 10 milliseconds. It checks if the play button is pressed. If it is pressed it checks
    // if the flipV button is pressed. If it is pressed it scrolls up. If it is not pressed it scrolls down.
    function scroll() {

      if (play) {
        if (flipV) {
          // This is the code that is executed when the flipV variable is true. It scrolls up.

          currentScroll -= speed
          $(window).scrollTop(currentScroll);
          if ($(window).scrollTop() === 0) {
            // console.log("stop is active")
            that.stop();

          }
        } else {
          currentScroll = $(window).scrollTop();
          if (Math.round($(window).scrollTop() + $(window).height()) >= $(document).height()) {
            $(window).scrollTop(0);
            play = false
            that.stop();

          } else {
            // console.log(Math.round($(window).scrollTop() + $(window).height()), "is " + $(document).height())
            // let body = document.body,
            //     html = document.documentElement;

            // let height = Math.max(body.scrollHeight, body.offsetHeight,
            //     html.clientHeight, html.scrollHeight, html.offsetHeight);
            // console.log(height + " s")
            $(window).scrollTop(currentScroll + speed);
          }
        }

      }
    }


  },

  beforeRouteLeave(to, from, next) {
    this.resetColor();

    // $("#colorpicker").val('#000000')
    // $("#fontColorpicker").val('#ffffff')
    $("#myRange").val(0)
    $("#speedRange").val(0)
    next()

  }
}

</script>

<style lang="scss">
@import "../assets/project.scss";
</style>