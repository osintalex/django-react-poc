# Overview

An accessible POC website to convert threat intelligence formats. Note that this is far from functionl at present! It's just an idea of how to set this up. 

# Instructions

Clone this repository and install docker. Then:
* `docker-compose build`
* `docker-compose up -d`
* `docker ps -a to get the id of the django container`
* `docker -it exec <container id goes here> /bin/bash`
* `python manage.py migrate`
* `python manage.py createsuperuser`
* `Go to localhost:8000/admin and add some data in`
* `Go to localhost:3000 to see the front end, click some of the buttons and look at the console to see that react and Django have made friends.`

## Tech Stack

* Python
* Django
* React
* Chakra UI
* JavaScript
* Docker

## Backend Libraries

At the moment this is a proof of concept, but it would be very easy to realise threat intelligence format conversion with these libraries.

* https://github.com/mitre/stix2patterns_translator
* https://github.com/oasis-open/cti-pattern-matcher
* https://github.com/oasis-open/cti-stix-elevator
* https://github.com/oasis-open/cti-stix-slider
* https://github.com/oasis-open/cti-stix-validator
* https://github.com/oasis-open/cti-pattern-validator
* https://github.com/oasis-open/cti-stix-common-objects
* https://github.com/oasis-open/cti-python-stix2
* https://github.com/opencybersecurityalliance/stix-shifter
* https://github.com/MISP/MISPSTIXConverter