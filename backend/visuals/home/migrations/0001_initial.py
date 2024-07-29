# Generated by Django 5.0.7 on 2024-07-22 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AppUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=20)),
                ('is_active', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('end_year', models.CharField(blank=True, max_length=200, null=True)),
                ('intensity', models.IntegerField(blank=True, null=True)),
                ('sector', models.CharField(blank=True, max_length=200)),
                ('topic', models.CharField(blank=True, max_length=200)),
                ('insight', models.CharField(blank=True, max_length=200)),
                ('url', models.URLField()),
                ('region', models.CharField(blank=True, max_length=200, null=True)),
                ('start_year', models.CharField(blank=True, max_length=200, null=True)),
                ('impact', models.CharField(blank=True, max_length=200, null=True)),
                ('added', models.CharField(blank=True, max_length=200, null=True)),
                ('published', models.CharField(blank=True, max_length=200, null=True)),
                ('country', models.CharField(blank=True, max_length=200, null=True)),
                ('relevance', models.IntegerField(default=0)),
                ('pestle', models.CharField(blank=True, max_length=200, null=True)),
                ('source', models.CharField(blank=True, max_length=200, null=True)),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('likelihood', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]