from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    your_name = "Sujeet"
    her_name = "Baby"   # ← change to her nickname

    return render_template('index.html', 
                          your_name=your_name, 
                          her_name=her_name)

if __name__ == '__main__':
    app.run(debug=True)