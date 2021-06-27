class Security {

    constructor(){

        // Add code to create the input and button elements
this.access1 = createInput("");
this.access1 .position(100,90);
this.access1 .style('background', 'white');

this.button1 = createButton('Submit');
this.button1 .position(100,120);
this.button1 .style('background', 'lightgrey');


this.access2 = createInput("");
this.access2 .position(100,240);
this.access2 .style('background', 'white');

this.button2 = createButton('Submit');
this.button2 .position(100,270);
this.button2 .style('background', 'lightgrey');


this.access3 = createInput("");
this.access3 .position(100,390);
this.access3 .style('background', 'white');

this.button3 = createButton('Submit');
this.button3 .position(100,420);
this.button3 .style('background', 'lightgrey');



this.access4 = createInput("");
this.access4 .position(100,540);
this.access4 .style('background', 'white');

this.button4 = createButton('Submit');
this.button4 .position(100,570);
this.button4 .style('background', 'lightgrey');



this.access5 = createInput("");
this.access5 .position(100,700);
this.access5 .style('background', 'white');

this.button5 = createButton('Submit');
this.button5 .position(100,730);
this.button5 .style('background', 'lightgrey');


this.access6 = createInput("");
this.access6 .position(100,860);
this.access6 .style('background', 'white');

this.button6 = createButton('Submit');
this.button6 .position(100,890);
this.button6 .style('background', 'lightgrey');



this.access7 = createInput("");
this.access7 .position(650,90);
this.access7 .style('background', 'white');

this.button7 = createButton('Submit');
this.button7 .position(650,120);
this.button7 .style('background', 'lightgrey');



this.access8 = createInput("");
this.access8 .position(800,240);
this.access8 .style('background', 'white');

this.button8 = createButton('Submit');
this.button8 .position(800,270);
this.button8 .style('background', 'lightgrey');



this.access9 = createInput("");
this.access9 .position(650,390);
this.access9 .style('background', 'white');

this.button9 = createButton('Submit');
this.button9 .position(650,420);
this.button9 .style('background', 'lightgrey');



this.access10 = createInput("");
this.access10 .position(800,540);
this.access10 .style('background', 'white');

this.button10 = createButton('Submit');
this.button10.position(800,570);
this.button10.style('background', 'lightgrey');



this.access11 = createInput("");
this.access11.position(650,700);
this.access11.style('background', 'white');

this.button11 = createButton('Submit');
this.button11 .position(650,730);
this.button11 .style('background', 'lightgrey');



this.access12 = createInput("");
this.access12 .position(800,860);
this.access12 .style('background', 'white');

this.button12 = createButton('Submit');
this.button12.position(800,890);
this.button12.style('background', 'lightgrey');
    }

    display(){

        // Add code to make the buttons function as expected
     this.button1.mousePressed(() => {
         if(system.authenticate(accessCode1 , this.access1.value())){
             this.button1.hide();
             this.access1.hide();  
             score++;
            sound.play();
         }
     });


     this.button2.mousePressed(() => {
        if(system.authenticate(accessCode2 , this.access2.value())){
            this.button2.hide();
            this.access2.hide();
            score++;
            sound.play();
        }
    });



    this.button3.mousePressed(() => {
        if(system.authenticate(accessCode3 , this.access3.value())){
            this.button3.hide();
            this.access3.hide();
            score++;
            sound.play();
        }
    });


    this.button4.mousePressed(() => {
        if(system.authenticate(accessCode4 , this.access4.value())){
            this.button4.hide();
            this.access4.hide();
            score++;
            sound.play();
        }
    });

    this.button5.mousePressed(() => {
        if(system.authenticate(accessCode5 , this.access5.value())){
            this.button5.hide();
            this.access5.hide();
            score++;
            sound.play();
        }
    });

    this.button6.mousePressed(() => {
        if(system.authenticate(accessCode6 , this.access6.value())){
            this.button6.hide();
            this.access6.hide();
            score++;
            sound.play();
        }
    });


    this.button7.mousePressed(() => {
        if(system.authenticate(accessCode7 , this.access7.value())){
            this.button7.hide();
            this.access7.hide();
            score++;
            sound.play();
        }
    });


    this.button8.mousePressed(() => {
        if(system.authenticate(accessCode8 , this.access8.value())){
            this.button8.hide();
            this.access8.hide();
            score++;
            sound.play();
        }
    });

    this.button9.mousePressed(() => {
        if(system.authenticate(accessCode9 , this.access9.value())){
            this.button9.hide();
            this.access9.hide();
            score++;
            sound.play();
        }
    });

    this.button10.mousePressed(() => {
        if(system.authenticate(accessCode10 , this.access10.value())){
            this.button10.hide();
            this.access10.hide();
            score++;
            sound.play();
        }
    });

    this.button11.mousePressed(() => {
        if(system.authenticate(accessCode11 , this.access11.value())){
            this.button11.hide();
            this.access11.hide();
            score++;
            sound.play();
        }
    });


    this.button12.mousePressed(() => {
        if(system.authenticate(accessCode12 , this.access12.value())){
            this.button12.hide();
            this.access12.hide();
            score++;
            sound.play();
        }
    });

   
   
    }

       
}