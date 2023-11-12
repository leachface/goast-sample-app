from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route('/')
def index():
    jokes = [
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't scientists trust atoms? Because they make up everything!",
        "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
        "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears!",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one!"
    ]
    
    # Generate a random index within the range of available jokes to avoid IndexError
    joke_index = random.randint(0, len(jokes) - 1)
    return render_template('index.html', joke=jokes[joke_index])
if __name__ == '__main__':
# Ensure to test the application locally to confirm that all changes work as expected before deploying to production
<copy-original start-inclusive=23 end-inclusive=23>