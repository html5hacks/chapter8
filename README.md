[HTML5 Hacks](https://github.com/html5hacks)
=================

HTML5 Hacks is more than just a book and a set of companion code repositories. HTML5 Hacks is a group of [HTML5 Evangelist/Makers](https://github.com/html5hacks?tab=members) that enjoy pushing the limits of modern web technologies and the programming languages of the Web: HTML, CSS, and JavaScript. 

By creating 'bundles' of hacks packaged into web applications that leverage the Twitter Bootstrap UI and are deployed to remote git repository endpoints such as Github and Heroku, the community of hackers can fork, share, and contribute back to each bundled application. 

HTML5 Hacks represents a crossroads between open source social coding, 'Maker' culture, and application development with future-friendly, standards based, web technologies. 

New to Git?
-----------
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows. For getting started with Git see [git-scm.com](http://git-scm.com/) as a starting point.


New to Github?
-----------
GitHub is one of the most popular places to host open source code, because it's free for open source projects and has good integration with the open-source version control system Git. Github's documentation is outstanding, so for more on using Git and Github see [Github help](https://help.github.com) as a starting point.


Quick start
-----------

HTML5 Hacks Chapter 8 is a simple, Node.js application. 

## Getting the Hacks

To access the latest code from a particular chapter, clone the repo.

<pre>
$ git clone git@github.com:html5hacks/chapter8.git
$ cd chapter8
</pre>

Or [download the latest release](https://github.com/html5hacks/chapter8/archive/master.zip).

You can instead fork this repo by clicking the "Fork" button above

Clone your fork to make a local working copy:

<pre>
$ git clone git@github.com:[your_github_username]/chapter8.git
$ cd chapter8
</pre>

## Setting up Dependencies

Install [node.js](http://nodejs.org/#download).

Make sure your current directory is chapter8 before moving to the next step.

<pre>
$ cd [your repos path]/chapter8
</pre>

Install dependencies using the node package manger (npm).

<pre>
$ sudo npm install
</pre>

## Running the App

Start the chapter8 demo server from a different terminal window:

<pre>
$ node app
</pre>

Visit [http://localhost:3000](http://localhost:3000) in a web browser.
