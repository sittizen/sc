MY BLOG
=======

Quick Start
===========

Locally (after cloning, from inside project root, with a postgres server ready):

    createuser --createdb --username postgres --no-createrole --no-superuser --pwprompt sc
    psql
    create database sc;
    exit
    exit
    mkvirtualenv sc
    setvirtualenvproject
    pip install -r requirements.txt
    export DATABASE_URL=postgres://sc:sc@localhost/sc
    ./manage.py migrate

On Heroku (after having installed locally, from inside project root, with heroku toolbelt installed):

    heroku create
    git push heroku master
    heroku ps:scale web=1
    heroku run python manage.py migrate
