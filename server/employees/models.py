# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class BkAuthor(models.Model):
    authorid = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=255)
    lname = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'bk_author'


class BkBook(models.Model):
    isbn = models.BigIntegerField(unique=True)
    title = models.CharField(max_length=225, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    pubdate = models.DateField(blank=True, null=True)
    pubid = models.ForeignKey('BkPublisher', models.DO_NOTHING, db_column='pubid', blank=True, null=True)
    authorid = models.ForeignKey(BkAuthor, models.DO_NOTHING, db_column='authorid', blank=True, null=True)
    cost = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    image = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bk_book'


class BkPublisher(models.Model):
    pubid = models.AutoField(primary_key=True)
    pubname = models.CharField(max_length=200)
    pubcontact = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bk_publisher'







