# NeuroCP
NeuroCP is a software to help rehabilitating people with anomic aphasias, which is validated by experts in the field.

## Setup enviroment
1. Install [Python 3.7.7](https://www.python.org/ftp/python/3.7.7/python-3.7.7-amd64.exe):

2. Check Python version
```
$ python --version
Python 3.7.7
```

3. Install Django
```
$ pip install django
```

4. Check Django version
```
$ python -m django --version
3.0.7
```

> If you can't see the framework version on Windows, launch a PowerShell window as an administrator and enter this following command. Later, try again to verify.
```
Set-ExecutionPolicy Unrestricted
```

## Run the app
2.1 Go to the root folder
```
cd NCP\neurocp\
```

2.2 Run the app locally.
```
python .\manage.py runserver
```
And, open your web browser on this address:
```
http://127.0.0.1:8000/
```
> Remember give access to Python to use local network if it is necessary.

2.3 Stop the app with <kbd>ctrl</kbd> + <kbd>C</kbd>.

## Authors
* Carolina Paz - Product owner
* Andrés Forero - Software development

## Reference links
* [Corey Schafer -Django Tutorials](https://www.youtube.com/pl#aylist?list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p)

## Information links
* [Django documentation](https://docs.djangoproject.com/en/3.0/)