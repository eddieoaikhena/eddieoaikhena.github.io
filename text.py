import pyttsx3 as pt

def text():
    for i in range(0, 5):
        mytext = input("Please Enter A Valid Sentence: ")
        if mytext:
            engine = pt.init()
            engine.setProperty("volume", 3.0)
            engine.setProperty("rate", 180)
            engine.say(mytext)
            engine.runAndWait()
text()




