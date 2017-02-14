from rest_framework import routers


router = routers.DefaultRouter()

# Using urlpatterns instead because it allow us to group
# api urls in /api/ namespace
urlpatterns = [

]

urlpatterns += router.urls
