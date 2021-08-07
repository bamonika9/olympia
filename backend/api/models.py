from django.db import models

# Create your models here.
class Achiever(models.Model):
    first_name = models.CharField(max_length=20)
    dob = models.DateField()

    def __str__(self):
        return self.first_name