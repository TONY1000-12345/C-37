class Form{
    constructor(){

    }

 display(){
     var title=createElement('h2')
     title.html("RACING CAR")
     title.position(100,0)
     var input=createInput("Name")
     var button=createButton('PLAY')
     input.position(130,160)
     button.position(250,200)
     button.mousePressed(function () {
         input.hide()
         button.hide()
         var Name=input.value()
         playerCount=playerCount+1;
         player.update(Name)
         player.updateCount(playerCount)
         var Wlecome=createElement('h3')
         Wlecome.html("Wlecome"+Name)
         Wlecome.position(130,160)

     })

 }

}
