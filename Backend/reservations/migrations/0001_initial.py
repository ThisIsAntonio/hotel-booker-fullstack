# Generated by Django 5.2.1 on 2025-05-07 14:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('guest_name', models.CharField(max_length=100)),
                ('room_number', models.IntegerField()),
                ('check_in', models.DateField()),
                ('check_out', models.DateField()),
            ],
        ),
    ]
