# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class Department(models.Model):
    deptno = models.IntegerField(primary_key=True)
    deptname = models.CharField(max_length=25, blank=True, null=True)
    location = models.CharField(max_length=25, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'department'

class Employee(models.Model):
    empid = models.AutoField(primary_key=True)
    fullname = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    email = models.CharField(unique=True, max_length=25)
    contact = models.IntegerField(blank=True, null=True)
    sal = models.IntegerField(blank=True, null=True)
    deptno = models.ForeignKey(Department, models.DO_NOTHING, db_column='deptno', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'employee'
