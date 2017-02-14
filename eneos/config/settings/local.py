from .base import *

# Local debug mode is true
DEBUG = True

# Allow host to access
ALLOWED_HOSTS = ['*']


# App needed for local development
INSTALLED_APPS += [
    'debug_toolbar',
    'django_extensions',
]

# Middleware for local development
MIDDLEWARE += [
    'debug_toolbar.middleware.DebugToolbarMiddleware'
]

# Cors Header Origin
CORS_ORIGIN_ALLOW_ALL = True
