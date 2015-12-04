#######
MY BLOG
#######

***********
Quick Start
***********

Locally (after cloning, from inside project root, with a postgres db ready)::
    mkvirtualenv sc
    setvirtualenvproject
    pip install -r requirements.txt
    pip uninstall South
    export DATABASE_URL=postgres://sc:sc@localhost/sc
    ./manage.py migrate