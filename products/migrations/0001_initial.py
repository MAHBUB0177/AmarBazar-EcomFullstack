# Generated by Django 5.0.1 on 2024-01-12 08:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.CharField(blank=True, max_length=200, primary_key=True, serialize=False)),
                ('customer_name', models.CharField(blank=True, max_length=20, null=True)),
                ('phone_no', models.CharField(blank=True, max_length=20, null=True)),
                ('address', models.CharField(blank=True, max_length=200, null=True)),
                ('app_user_id', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
    ]
