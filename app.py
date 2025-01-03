from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
	return render_template("home.html")

@app.route("/product")
def product():
	return render_template("product.html")

@app.route("/cart")
def cart():
	return render_template("product.html")

@app.route("/contact")
def  contact():
	return render_template("contact.html")

@app.route("/submit-contact", method=["POST"])
def submit_contact():
	name = request.form["name"]
	email = request.form["email"]
	message = request.form["message"]
	return f"Thank you, {name}. We have received your Message."

if __name__ == "__main__":
	app.run(debug=True)