# Generated by Django 3.2 on 2021-06-01 15:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_alter_product_productid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='productID',
        ),
    ]
