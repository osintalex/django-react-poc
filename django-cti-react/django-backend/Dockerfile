FROM python:3.6-slim-buster

RUN apt-get update
# Add dependcies for pyscopg2, which django uses to connect to postgres sql database
RUN apt-get install -y --no-install-recommends libpq-dev gcc python3-dev
# Remove all the unecessary packages installed by the update command
RUN rm -rf /var/lib/apt/lists/*
# Set working directory for django project
WORKDIR /app/django-backend
# Install python packages
COPY requirements.txt .
RUN pip install -r requirements.txt
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]