from django.db import models

# Create your models here.
class Reservation(models.Model):
    guest_name = models.CharField(max_length=100)
    room_number = models.IntegerField()
    check_in = models.DateField()
    check_out = models.DateField()
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)


    def __str__(self):
        return f"{self.guest_name} - Room {self.room_number}"