FROM python:3.8

WORKDIR /app/

ADD . /app/

RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
RUN pip3 install gunicorn