from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse

class Post(models.Model):
    title = models.CharField(max_length=100) # Max 100 characters
    content = models.TextField() # Text wihout limit
    date_posted = models.DateTimeField(default=timezone.now) # Registry current date when the post is created with posibility of modified in the future
    author = models.ForeignKey(User, on_delete=models.CASCADE) # Allows delete elements of the User, not the User

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk': self.pk})

