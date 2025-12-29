import flask

app = flask.Flask(__name__)

@app.route('/', endpoint='index')
def show_index():
    """Home page.

    Returns:
        Home page 
    """

    return flask.render_template("index.html")

@app.route('/music', endpoint='music')
def show_music():
    """Music page.

    Returns:
        Music page 
    """

    return flask.render_template("music.html")

@app.route('/about', endpoint='about')
def show_about():
    """about page.

    Returns:
        about page
    """

    return flask.render_template("about.html")

@app.route('/books', endpoint='books')
def show_books():
    """books page.

    Returns:
        books page 
    """

    return flask.render_template("books.html")

@app.route('/research', endpoint='research')
def show_research():
    """Research page.

    Returns:
        Research page 
    """

    return flask.render_template("research.html")

@app.route('/travel', endpoint='travel')
def show_travel():
    """travel page.

    Returns:
        travel page 
    """

    return flask.render_template("travel.html")

@app.route('/writing', endpoint='writing')
def show_writing():
    """writing page.

    Returns:
        writing page posts
    """

    return flask.render_template("writing.html")

@app.route('/projects', endpoint='projects')
def show_projects():
    """projects page.

    Returns:
        projects page
    """

    return flask.render_template("projects.html")

@app.route('/research/<postid>/', methods=['GET'])
def research_post(postid):
    return flask.render_template(f"research_posts/post_{postid}.html")

@app.route('/writing/<postid>/', methods=['GET'])
def writing_post(postid):
    return flask.render_template(f"writing_posts/post_{postid}.html")
@app.route('/music/<postid>/', methods=['GET'])
def music_post(postid):
    return flask.render_template(f"music_posts/post_{postid}.html")

@app.route('/projects/<postid>/', methods=['GET'])
def project_post(postid):
    return flask.render_template(f"project_posts/post_{postid}.html")

@app.route('/resume', methods=['GET'], endpoint='resume')
def show_resume():
    return flask.render_template("resume.html")
