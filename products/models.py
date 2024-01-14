from django.db import models

# Create your models here.
class Customer(models.Model):
    id=models.CharField(max_length=200,blank=True,primary_key=True)
    customer_name=models.CharField(max_length=20, null=True, blank=True)
    phone_no=models.CharField(max_length=20, null=True, blank=True)
    address=models.CharField(max_length=200, null=True, blank=True)
    email=models.CharField(max_length=200, null=True, blank=True)
    city=models.CharField(max_length=200, null=True, blank=True)
    state=models.CharField(max_length=200, null=True, blank=True)
    post_code=models.CharField(max_length=200, null=True, blank=True)
    date=models.DateField(null=True, blank=True)
    card_number=models.IntegerField( null=True, blank=True)
    exp_date=models.DateField(null=True, blank=True)
    cvv=models.IntegerField( null=True, blank=True)
    cardholder_name=models.CharField(max_length=20, null=True, blank=True)
    app_user_id = models.CharField(max_length=20, null=True, blank=True)
    def __str__(self):
        return self.customer_name

class user_contact(models.Model):
    contact_id=models.CharField(max_length=200,blank=True,primary_key=True)
    name=models.CharField(max_length=20, null=True, blank=True)
    email=models.EmailField(max_length=200, null=True, blank=True)
    messege=models.IntegerField( null=True, blank=True)
    app_user_id = models.CharField(max_length=20, null=True, blank=True)
    def __str__(self):
        return self.name

class Our_founder(models.Model):
    id=models.CharField(max_length=200,blank=True,primary_key=True)
    name=models.CharField(max_length=20, null=True, blank=True)
    designation=models.CharField(max_length=200, null=True, blank=True)
    app_user_id = models.CharField(max_length=20, null=True, blank=True)
    def __str__(self):
        return self.name

class Categories(models.Model):
    categories_id=models.CharField(max_length=200,blank=True,primary_key=True)
    category_name=models.CharField(max_length=20, null=True, blank=True)
    descreption=models.CharField(max_length=200, null=True, blank=True)
    price=models.IntegerField( null=True, blank=True)
    app_user_id = models.CharField(max_length=20, null=True, blank=True)
    def __str__(self):
        return self.product_name

class features_product(models.Model):
    featuresproduct_id=models.CharField(max_length=200,blank=True,primary_key=True)
    product_name=models.CharField(max_length=20, null=True, blank=True)
    descreption=models.CharField(max_length=200, null=True, blank=True)
    price=models.IntegerField( null=True, blank=True)
    app_user_id = models.CharField(max_length=20, null=True, blank=True)
    def __str__(self):
        return self.product_name



class Products(models.Model):
    id=models.CharField(max_length=200,blank=True,primary_key=True)
    product_name=models.CharField(max_length=20, null=True, blank=True)
    review=models.IntegerField(null=True, blank=True)
    stars=models.IntegerField( null=True, blank=True)
    descreption=models.CharField(max_length=200, null=True, blank=True)
    old_price=models.IntegerField( null=True, blank=True)
    new_price=models.IntegerField( null=True, blank=True)
    app_user_id = models.CharField(max_length=20, null=True, blank=True)
    def __str__(self):
        return self.product_name