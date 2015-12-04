=======
MY BLOG
=======

Quick Start
===========

Locally (after cloning, from inside project root, with a postgres db ready)::
    mkvirtualenv sc
    setvirtualenvproject
    pip install -r requirements.txt
    pip uninstall South
    export DATABASE_URL=postgres://sc:sc@localhost/sc
    ./manage.py migrate

then uncomment the commented cms plugins in INSTALLED_APPS and do another::
    ./manage.py migrate

TODO:
I don't know why South is installed even if Django is version 1.8.
migrations of cms plugins are done before cms itself is migrated hence the need for the ugly "migrate uncomment migrate".
djangocms_blog migrations fails strangely if DEBUG=True and debug_toolbar is installed.

Heroku ... I need to solve above problems, pip uninstall seems not to work on heroku so I'm stuck :(